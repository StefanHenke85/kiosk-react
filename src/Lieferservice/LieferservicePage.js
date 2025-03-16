import React, { useState } from 'react';
import ProductCatalog from './ProductCatalog';
import ShoppingCart from './ShoppingCart';
import './Lieferservice.css';

function LieferservicePage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('alle');
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        const existingItem = cartItems.find((item) => item.id === product.id && item.variation === product.variation);
        if (existingItem) {
            setCartItems(
                cartItems.map((item) =>
                    item.id === product.id && item.variation === product.variation ? { ...item, quantity: item.quantity + product.quantity } : item
                )
            );
        } else {
            setCartItems([...cartItems, product]);
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

    return (
        <div>
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
            <ProductCatalog searchTerm={searchTerm} categoryFilter={categoryFilter} addToCart={addToCart} />
            <ShoppingCart cartItems={cartItems} totalPrice={totalPrice} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />
        </div>
    );
}

export default LieferservicePage;