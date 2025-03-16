import React from 'react';
import './ShoppingCart.css'; // Stelle sicher, dass du eine separate CSS-Datei für ShoppingCart hast

function ShoppingCart({ cartItems, totalPrice, removeFromCart, updateQuantity, onClose, onCheckout }) {
    return (
        <div className="cart-container">
            <h2>Warenkorb</h2>
            {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                    <h3>{item.name} - {item.variation}</h3>
                    <p>Menge: {item.quantity}</p>
                    <div className="quantity-controls">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                    <button onClick={() => removeFromCart(item.id)}>Entfernen</button>
                </div>
            ))}
            <p>Gesamtpreis: {totalPrice} €</p>
            <button onClick={onCheckout} className="checkout-button">Zur Kasse</button>
            <button onClick={onClose} className="close-button">Schließen</button>
        </div>
    );
}

export default ShoppingCart;