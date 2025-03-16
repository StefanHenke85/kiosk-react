import React, { useState } from 'react';
import ProductCatalog from './ProductCatalog';
import ShoppingCart from './ShoppingCart';
import PaymentSelection from './PaymentSelection';
import AddressInput from './AddressInput';
import Notification from './Notification';
import products from './products';

function LieferservicePage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('alle');
    const [cartItems, setCartItems] = useState([]);
    const [showCart, setShowCart] = useState(false);
    const [showPaymentSelection, setShowPaymentSelection] = useState(false);
    const [showAddressInput, setShowAddressInput] = useState(false);
    const [notification, setNotification] = useState(null);

    const addToCart = (productId, category, quantity) => {
        if (products[category]) {
            const product = products[category].find((p) => p.id === productId);
            if (product) {
                const existingItem = cartItems.find((item) => item.id === productId);
                if (existingItem) {
                    setCartItems(
                        cartItems.map((item) =>
                            item.id === productId ? { ...item, quantity: item.quantity + quantity } : item
                        )
                    );
                } else {
                    setCartItems([...cartItems, { ...product, quantity }]);
                }
                setNotification({
                    message: `${product.name} wurde zum Warenkorb hinzugefügt.`,
                    product: { ...product, quantity },
                });
            }
        } else {
            console.error(`Kategorie "${category}" nicht gefunden.`);
        }
    };

    const removeFromCart = (productId) => {
        setCartItems(cartItems.filter((item) => item.id !== productId));
    };

    const updateQuantity = (productId, quantity) => {
        setCartItems(
            cartItems.map((item) =>
                item.id === productId ? { ...item, quantity: quantity } : item
            )
        );
    };

    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const closeNotification = () => {
        setNotification(null);
    };

    const handleCheckout = () => {
        if (totalPrice < 20) {
            alert('Mindestbestellwert nicht erreicht.');
        } else {
            setShowPaymentSelection(true);
        }
    };

    const handlePaymentSelection = (paymentMethod) => {
        if (paymentMethod === 'barzahlung') {
            setShowAddressInput(true);
        } else {
            // Hier Integration der Zahlungs-APIs (PayPal, Klarna)
        }
    };

    return (
        <div>
            {notification && (
                <Notification
                    message={notification.message}
                    product={notification.product}
                    onClose={closeNotification}
                />
            )}
            <div className="lieferservice">
                <h2 className="lieferservice-title">Lieferservice bitte beachte die Lieferzeiten!!!</h2>
                <h2 className="lieferservice-title">Freitag - Samstag 17:00 - 03:00 Sonntags 13:00 - 20:00 </h2>
            </div>
            <div className="search-container">
                <nav className="category-navbar">
                    <button onClick={() => setCategoryFilter('alle')}>Alle</button>
                    <button onClick={() => setCategoryFilter('snacks')}>Snacks</button>
                    <button onClick={() => setCategoryFilter('getraenke')}>Getränke</button>
                    <button onClick={() => setCategoryFilter('tabakwaren')}>Tabakwaren</button>
                    <button onClick={() => setCategoryFilter('sonstiges')}>Sonstiges</button>
                </nav>
                <input
                    type="text"
                    placeholder="Suche nach Produktnamen"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
                    <option value="alle">Alle Kategorien</option>
                    <option value="snacks">Snacks</option>
                    <option value="getraenke">Getränke</option>
                    <option value="tabakwaren">Tabakwaren</option>
                    <option value="sonstiges">Sonstiges</option>
                </select>
            </div>
            <button onClick={() => setShowCart(true)}>Warenkorb anzeigen</button>
            {showCart && (
                <ShoppingCart
                    cartItems={cartItems}
                    totalPrice={totalPrice}
                    removeFromCart={removeFromCart}
                    updateQuantity={updateQuantity}
                    onClose={() => setShowCart(false)}
                    onCheckout={handleCheckout}
                />
            )}
            {showPaymentSelection && <PaymentSelection onSelect={handlePaymentSelection} />}
            {showAddressInput && <AddressInput />}
            <ProductCatalog
                searchTerm={searchTerm}
                categoryFilter={categoryFilter}
                addToCart={addToCart}
            />
        </div>
    );
}

export default LieferservicePage;