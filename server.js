const express = require('express')

const app = express()



//1.
app.get('/greetings/:username', (req, res) => {
    res.send(`Hello there, ${req.params.username}`)
})

//2.
app.get('/roll/:number', (req, res) => {
    const number = parseFloat(req.params.number);
    if (isNaN(number)) {
        res.send(`<h1>you must specify a number</h1>`)
    } else {
        res.send(`<h1>${Math.floor(Math.random() * number)}</h1>`)
    }
})


//3.
const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

app.get('/collectibles/:index', (req, res) => {
    const index = parseFloat(req.params.index);
    if (index >= 0 && index < collectibles.length) {
        const item = collectibles[index];
        res.send(`So, you want the ${item.name} for ${item.price}, it can be yours!`);
    } else {
        res.send(`This item is not yet in stock. Check back soon!`);
    }
})


//4.
const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];

app.get('/shoes', (req, res) => {
    let { min_price, max_price, type } = req.query;
    let filteredShoes = shoes;
    if (min_price) {
        min_price = parseFloat(min_price);
        filteredShoes = filteredShoes.filter(shoe => shoe.price >= min_price);
    }
    if (max_price) {
        max_price = parseFloat(max_price);
        filteredShoes = filteredShoes.filter(shoe => shoe.price <= max_price);
    }
    if (type) {
        filteredShoes = filteredShoes.filter(shoe => shoe.type === type);
    }
    res.send(filteredShoes);
})









app.listen(3000, () => {
    console.log(`express app is listening on port 3000`)
})