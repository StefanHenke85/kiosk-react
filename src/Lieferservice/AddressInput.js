import React, { useState } from 'react';

function AddressInput() {
    const [address, setAddress] = useState({});

    const handleInputChange = (e) => {
        setAddress({ ...address, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Adresse:', address);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" onChange={handleInputChange} />
            <input type="text" name="street" placeholder="Straße" onChange={handleInputChange} />
            <input type="text" name="zip" placeholder="PLZ" onChange={handleInputChange} />
            <input type="text" name="city" placeholder="Stadt" onChange={handleInputChange} />
            <button type="submit">Bestellen</button>
        </form>
    );
}

export default AddressInput;