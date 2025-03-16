import React from 'react';

function PaymentSelection({ onSelect }) {
    return (
        <div>
            <h2>Zahlungsmethode auswählen</h2>
            <button onClick={() => onSelect('paypal')}>PayPal</button>
            <button onClick={() => onSelect('klarna')}>Klarna Sofortüberweisung</button>
            <button onClick={() => onSelect('barzahlung')}>Barzahlung</button>
        </div>
    );
}

export default PaymentSelection;