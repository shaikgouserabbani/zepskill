const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));

// * landing
app.get('/', function(req, res) {
    res.render('landing');
});

// ! REST
// CRUD -> create, read, update, delete
// * index route
app.get('/products', function(req, res) {
    res.render('index');
});

// * new route
app.get('/products/new', function(req, res) {
    res.render('new');
});
// * create route
app.post('/products', function(req, res) {
    res.send(`${req.body.name} ${req.body.price}`);
});
// * show route
app.get('/products/:id', function(req, res) {
    let id = req.params.id;
    // ! 1. send info to ejs
    let name = id;
    // random price from 25k to 50k
    let price = Math.floor(Math.random() * 50000) + 25000;
    let seller = 'abc';
    res.render('show', { name, price, seller });
});

// * edit route
app.get('/products/:id/edit', function(req, res) {
    let id = req.params.id;
    res.send(`sends a form to edit a particular product having id ${id}`);
});

// * update route
app.patch('/products/:id', function(req, res) {
    let id = req.params.id;
    res.send(`actual logic to update the product having id ${id}`);
});

// * delete/destroy route
app.delete('/products/:id', function(req, res) {
    let id = req.params.id;
    res.send(`deletes the product from db having id ${id}`);
});

// @params adsfasd

app.listen(9000, function() {
    console.log('server is running');
});























