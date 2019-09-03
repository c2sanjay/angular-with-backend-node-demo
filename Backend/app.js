const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var path = require('path');
//const cors = require('cors');
// initialize our express app
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'),
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'),
        res.header('Access-Control-Allow-Headers', 'Content-Type'),
        res.header('Access-Conrol-Allow-Credentials', true),

        next();
});
app.use(express.static(path.join(__dirname, 'uploads')));

mongoose.connect('mongodb://localhost/productDB');
const productAPI = require('./server/route/product.api.js');
app.use('/products', productAPI);

const registerAPI = require('./server/route/register.api.js')
app.use('/register', registerAPI);

let port = '3000';

app.get('/', (req, res) => {
    res.send('sanjay ch');
})

app.listen(port, () => {
    console.log('Server is up and running or port no', + port);
})

