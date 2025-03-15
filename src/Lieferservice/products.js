// src/Lieferservice/products.js
const products = {
    snacks: [
        {
            id: 1,
            name: 'Lays Chips',
            description: 'Lays verschieden Sorten.',
            price: 1.99,
            imageUrl: '/img/Produkte/Snacks/lays.jpg',
            variations: ['Sorte Auswählen', 'Salted', 'Sour Cream'],
        },
        {
            id: 2,
            name: 'Chio Tortillias',
            description: 'Chio verschiedene Sorten',
            price: 3.00,
            imageUrl: '/img/Produkte/Snacks/chiotorttilas.jpg',
            variations: ['Paprika', 'Salted', 'Sour Cream'],
        },
        {
            id: 3,
            name: 'Chio Dip',
            description: 'Chio Dip verschiedene Sorten',
            price: 3.00,
            imageUrl: '/img/Produkte/Snacks/dip.jpg',
            variations: ['Paprika', 'Salted', 'Sour Cream'],
        },
        {
            id: 4,
            name: 'Doritos',
            description: 'Doritos Nacho verschieden Sorten',
            price: 3.00,
            imageUrl: '/img/Produkte/Snacks/doritos.png',
            variations: ['Paprika', 'Salted', 'Sour Cream'],
        },
        {
            id: 5,
            name: 'Takis',
            description: 'Takis Blue Heat gerollte Maischips mit Chili Geschmack',
            price: 4.00,
            imageUrl: '/img/Produkte/Snacks/takis.jpg',
            variations: ['Paprika', 'Salted', 'Sour Cream'],
        },
        {
            id: 6,
            name: 'Chitos Chili Cheese',
            description: 'funny-frisch Chitos Chili Cheese Style',
            price: 2.50,
            imageUrl: '/img/Produkte/Snacks/chitos.jpg',
            variations: ['Paprika', 'Salted', 'Sour Cream'],
        },
        {
            id: 7,
            name: 'Milka Schokolade',
            description: 'Milka verschiedene Sorten',
            price: 2.49,
            imageUrl: '/img/Produkte/Snacks/milka.jpg',
            variations: ['Paprika', 'Salted', 'Sour Cream'],
        },
        // Weitere Snacks
    ],
    getränke: [
        {
            id: 3,
            name: 'Cola',
            description: 'Erfrischende Cola.',
            price: 1.49,
            imageUrl: '/img/cola.jpg',
            variations: ['Paprika', 'Salted', 'Sour Cream'],
        },
        {
            id: 4,
            name: 'Wasser',
            description: 'Stilles Mineralwasser.',
            price: 0.99,
            imageUrl: '/img/wasser.jpg',
            variations: ['Paprika', 'Salted', 'Sour Cream'],
        },
        // Weitere Getränke
    ],
    tabakwaren: [
        {
            id: 5,
            name: 'Zigaretten',
            description: 'Packung Zigaretten.',
            price: 7.99,
            imageUrl: '/img/zigaretten.jpg',
            variations: ['Paprika', 'Salted', 'Sour Cream'],
        },
        // Weitere Tabakwaren
    ],
    sonstiges: [
        {
            id: 6,
            name: 'Feuerzeug',
            description: 'Wiederaufladbares Feuerzeug.',
            price: 2.99,
            imageUrl: '/img/feuerzeug.jpg',
            variations: ['Paprika', 'Salted', 'Sour Cream'],
        },
        // Weitere Sonstiges
    ],
};

export default products;