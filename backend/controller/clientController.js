let clientModel = require('../models/clien.js')
const mongoose = require('mongoose');

exports.saveClient = async (req, res)=>{
    const clientData = new clientModel({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        image: req.file.filename
    })
    clientData.save()
    .then(()=>{
        res.send("client registered")
    })
    .catch((err)=> console.log(err))
}

exports.clientLogin = async (req, res)=>{
    let username = req.body.username
    let password = req.body.password
    let data = await clientModel.find({ username: username, password: password })
    if (data.length > 0) {
        res.send(true)
    }
    else {
        res.send(false)
    }
}
exports.getClient = async (req, res)=>{
    let username = req.params.username
    let data = await clientModel.find({ username: username })
   res.json(data)
}

exports.createUserCart = (req, res)=>{
    let username= req.params.username
    let clientCartSchema = new mongoose.Schema({
        productBrand: String,
        productPrice: String,
        productType: String,
        productRating: String,
        image: String,
    })
    
mongoose.model(`${username}`, clientCartSchema)
res.send("table created")
}

