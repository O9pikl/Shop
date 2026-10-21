const products = [
    {id: 1, name: 'Brown Rat', price: 7.99, category: 'standard rats', stock: 1295},
    {id: 2, name: 'Black Rat', price: 7.99, category: 'standard rats', stock: 740},
    {id: 3, name: 'White Rat', price: 8.49, category: 'standard rats', stock: 492},
    {id: 4, name: 'Fat Rat (mixed colors)', price: 12.99, category: 'big rats', stock: 110},
    {id: 5, name: 'Burly Rat (mixed colors)', price: 14.49, category: 'big rats', stock: 95},
    {id: 6, name: 'Flying Rat (white)', price: 20.99, category: 'special rats', stock: 45},
    {id: 7, name: 'Psychic Rat (black)', price: 24.99, category: 'special rats', stock: 22},
    {id: 8, name: 'Dead Half Rat (mixed colors)', price: .99, category: 'rat food', stock: 403},
    {id: 9, name: 'Cheddar piece', price: .49, category: 'rat food', stock: 239}

]
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Start timer
const startTime = performance.now();

app.get('/', (req, res) => {
    res.send('shop');
});

app.get('/api/health', (req, res) => {
    res.json({status: 'OK'});
});

app.get('/api/products', (req, res) => {
    res.json(products);

});

app.listen(PORT, () => {
    const startupTime = performance.now() - startTime;

    console.log(`Shop server running on port ${PORT}`);
    console.log(`Startup time: ${startupTime.toFixed(2)} ms`);
});