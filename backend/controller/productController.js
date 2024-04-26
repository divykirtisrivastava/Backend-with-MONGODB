let express = require('express')
let productModel = require('../models/productModel.js')

exports.saveProduct =  (req, res) => {
       const imageData = new productModel({
            productBrand: req.body.productBrand,
            productType: req.body.productType,
            productRating: req.body.productRating,
            productPrice: req.body.productPrice,
            image: req.file.filename
        })

        imageData.save()
        .then((data) => {
            res.send('save')
        })
        .catch(err => console.log(err))
    }

exports.getProduct =  async (req, res) => {
        let data = await productModel.find({})
        res.json(data)
    }

    
exports.getProductByName =  async (req, res) => {
    let name = req.params.name
    let data = await productModel.find({ name: name })
    res.json(data)
}

exports.viewProduct =  async (req, res) => {
    let id = req.params.id
    let data = await productModel.find({ _id: id })
    res.json(data)
}

exports.deleteProduct =  async (req, res) => {
    let id = req.params.id
    await productModel.findByIdAndDelete({ _id: id })
    res.send("deleted")
}

exports.updateProduct =  async (req, res) => {
    let id = req.params.id
    let newData = req.body

    await productModel.findByIdAndUpdate(id, newData, { new: true })
    res.send("data updated")
}
