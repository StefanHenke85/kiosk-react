import React from 'react';

function ShoppingCart({ cartItems, totalPrice, removeFromCart, updateQuantity }) {
    return (
        <div>
            <h2>Warenkorb</h2>
            {cartItems.map((item) => (
                <div key={item.id}>
                    <h3>{item.name} - {item.variation}</h3>
                    <p>Menge: {item.quantity}</p>
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    <button onClick={() => removeFromCart(item.id)}>Entfernen</button>
                </div>
            ))}
            <p>Gesamtpreis: {totalPrice} €</p>
        </div>
    );
}

export default ShoppingCart;