import React, { useState } from 'react';
import products from './products';
import './Lieferservice.css';

function ProductCatalog({ searchTerm, categoryFilter, addToCart }) {
    const [selectedVariations, setSelectedVariations] = useState({});
    const [quantities, setQuantities] = useState({});

    const filteredProducts = Object.keys(products).reduce((acc, category) => {
        if (categoryFilter === 'alle' || category === categoryFilter) {
            const filtered = products[category].filter((product) =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            acc[category] = filtered;
        }
        return acc;
    }, {});

    const handleVariationChange = (productId, variation) => {
        setSelectedVariations({ ...selectedVariations, [productId]: variation });
    };

    const handleQuantityChange = (productId, quantity) => {
        setQuantities({ ...quantities, [productId]: quantity });
    };

    const handleAddToCart = (product, category) => {
        const variation = selectedVariations[product.id] || product.variations?.[0];
        const quantity = quantities[product.id] || 1;
        addToCart(product.id, category, quantity);
    };

    return (
        <div>
            {Object.keys(filteredProducts).map((category) => (
                <div key={category}>
                    <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {filteredProducts[category].map((product) => (
                            <div key={product.id} className="product-box">
                                <img src={product.imageUrl} alt={product.name} className="product-box img" />
                                <h2>{product.name}</h2>
                                <p>{product.description}</p>
                                <p>{product.price} €</p>
                                {product.variations && (
                                    <select
                                        value={selectedVariations[product.id] || product.variations[0]}
                                        onChange={(e) => handleVariationChange(product.id, e.target.value)}
                                    >
                                        {product.variations.map((variation) => (
                                            <option key={variation} value={variation}>
                                                {variation}
                                            </option>
                                        ))}
                                    </select>
                                )}
                                <input
                                    type="number"
                                    value={quantities[product.id] !== undefined ? quantities[product.id] : ''}
                                    placeholder="Stückzahl"
                                    onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
                                    min="1"
                                />
                                <button onClick={() => handleAddToCart(product, category)} className="add-to-cart-button">
                                    Zum Warenkorb hinzufügen
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProductCatalog;