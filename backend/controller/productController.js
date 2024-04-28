<<<<<<< HEAD
const productModel = require('../models/product.js')

exports.saveProduct = async (req, res) => {
       const productData = new productModel({
=======
let express = require('express')
let productModel = require('../models/productModel.js')

exports.saveProduct =  (req, res) => {
       const imageData = new productModel({
>>>>>>> 15b8a6e014285f70bfc807b7fe8c53dcbe073c0a
            productBrand: req.body.productBrand,
            productType: req.body.productType,
            productRating: req.body.productRating,
            productPrice: req.body.productPrice,
            image: req.file.filename
        })
<<<<<<< HEAD
        productData.save()
=======

        imageData.save()
>>>>>>> 15b8a6e014285f70bfc807b7fe8c53dcbe073c0a
        .then((data) => {
            res.send('save')
        })
        .catch(err => console.log(err))
<<<<<<< HEAD
}


exports.getProduct = async (req, res) => {
    let data = await productModel.find({})
    res.json(data)
}

exports.getProductByName= async (req, res) => {
    let productBrand = req.params.productBrand
    let data = await productModel.find({ productBrand: productBrand })
=======
    }

exports.getProduct =  async (req, res) => {
        let data = await productModel.find({})
        res.json(data)
    }

    
exports.getProductByName =  async (req, res) => {
    let name = req.params.name
    let data = await productModel.find({ name: name })
>>>>>>> 15b8a6e014285f70bfc807b7fe8c53dcbe073c0a
    res.json(data)
}

exports.viewProduct =  async (req, res) => {
    let id = req.params.id
    let data = await productModel.find({ _id: id })
    res.json(data)
}

<<<<<<< HEAD

=======
>>>>>>> 15b8a6e014285f70bfc807b7fe8c53dcbe073c0a
exports.deleteProduct =  async (req, res) => {
    let id = req.params.id
    await productModel.findByIdAndDelete({ _id: id })
    res.send("deleted")
}

<<<<<<< HEAD
exports.updateProduct = async (req, res) => {
=======
exports.updateProduct =  async (req, res) => {
>>>>>>> 15b8a6e014285f70bfc807b7fe8c53dcbe073c0a
    let id = req.params.id
    let newData = req.body

    await productModel.findByIdAndUpdate(id, newData, { new: true })
    res.send("data updated")
}
