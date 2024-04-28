const mongoose = require('mongoose');

let productShema = new mongoose.Schema({
    productBrand: String,
    productPrice: String,
    productType: String,
    productRating: String,
    image: String,
    
})

module.exports = mongoose.model('productData', productShema)
