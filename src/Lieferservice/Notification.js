import React from 'react';
import './Notification.css';

function Notification({ message, product, onClose }) {
    return (
        <div className="notification">
            <p>{message}</p>
            {product && (
                <div>
                    <p>Produkt: {product.name}</p>
                    <p>Preis: {product.price} €</p>
                    <p>Menge: {product.quantity}</p>
                </div>
            )}
            <button onClick={onClose} className="notification-close-button">Schließen</button>
        </div>
    );
}

export default Notification;