const cartModel = require('../models/cart.js')


exports.saveCartData = async (req, res) => {
       const cartData = new cartModel({
            productBrand: req.body.productBrand,
            productType: req.body.productType,
            productRating: req.body.productRating,
            productPrice: req.body.productPrice,
            image: req.body.image
        })
        cartData.save()
        .then(() => {
            res.send('save')
        })
        .catch(err => console.log(err))
}

exports.getCartData =  async (req, res) => {
    let data = await cartModel.find({})
    res.json(data)
}

exports.deleteCartData = async (req, res) => {
    let id = req.params.id
    await cartModel.findByIdAndDelete({ _id: id })
    res.send("deleted")
}

