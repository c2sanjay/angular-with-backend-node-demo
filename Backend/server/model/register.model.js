const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let RegisterDetail = new Schema({

    firstName: String,
    lastName: String,
    userName: String,
    email: String,
    age: Number,
    password: String
})
module.exports = mongoose.model('Register', RegisterDetail);