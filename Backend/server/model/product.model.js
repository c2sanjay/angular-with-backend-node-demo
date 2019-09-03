const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductDetail = new Schema({

    //productImage: String,
    productName: String,
    productDescription: String,
    productCode: String,
    productCreated: Date,
    ProductPrice: String
})

//Export the model

module.exports = mongoose.model('Product', ProductDetail);
