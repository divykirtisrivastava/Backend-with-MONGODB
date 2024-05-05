const mongoose = require('mongoose');


let AddCardSchema = new mongoose.Schema({
    productBrand: String,
    productPrice: String,
    productType: String,
    productRating: String,
    image: String,
})


module.exports= mongoose.model('cartDatas', AddCardSchema)
