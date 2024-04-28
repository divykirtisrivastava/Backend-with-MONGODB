let mongoose = require('mongoose')

let productSchema = new mongoose.Schema({
    productBrand: String,
    productPrice: String,
    productType: String,
    productRating: String,
    image: String,
    
})

module.exports = mongoose.model('product', productSchema)
