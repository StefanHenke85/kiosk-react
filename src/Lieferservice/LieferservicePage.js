// src/Lieferservice/LieferservicePage.js
import React, { useState } from 'react';
import ProductCatalog from './ProductCatalog';
import ShoppingCart from './ShoppingCart';
import './Lieferservice.css';

function LieferservicePage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('alle');

    return (
        <div>
            <div className="lieferservice">
                <h2 className="lieferservice-title">Lieferservice bitte beachte die Lieferzeiten!!!</h2>
                <h2 className="lieferservice-title">Freitag - Samstag 17:00 - 03:00 Sonntags 13:00 - 20:00 </h2>
                
            </div>
            <div className="search-container"> {/* Container hinzugefügt */}
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
            <ProductCatalog searchTerm={searchTerm} categoryFilter={categoryFilter} />
            <ShoppingCart />
        </div>
    );
}

export default LieferservicePage;