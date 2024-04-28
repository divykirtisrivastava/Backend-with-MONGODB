let express = require('express')
<<<<<<< HEAD
let cors = require('cors')
const db = require('./dataBaseConfig.js')
const dotenv = require('dotenv')
dotenv.config({
    path: './.env'
})
const productRoute = require('./route/productRoute.js')
const cartRoute = require('./route/cartRoutes.js')
const adminRoute = require('./route/adminRoutes.js')

let app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(cors())

app.use(express.static('uploads'))
=======
let mongoose = require('mongoose')
let bodyParser = require('body-parser')
let cors = require('cors')
let db = require('./dataBaseConfig.js')
const productRouter = require('./route/productRoute.js')

let App = express()
App.use(express.json())
App.use(cors())
App.use(bodyParser.urlencoded({extended: true}))

App.use(express.static('uploads'))

db().then(() => console.log("databse connected"))
    .catch(err => console.log(err))


    App.use('/api', productRouter)
//Add To card Schema
>>>>>>> 15b8a6e014285f70bfc807b7fe8c53dcbe073c0a

db().then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch(err => console.log(err))

    app.use('/api', productRoute)

    app.use('/api', cartRoute)

<<<<<<< HEAD
    app.use('/api', adminRoute)
=======
App.post('/cartSubmit', (req, res) => {
    upload(req, res, (err) => {
  
     if(err){
        console.log(err)
     }else{
       const imageData = new CardModel({
            productBrand: req.body.productBrand,
            productType: req.body.productType,
            productRating: req.body.productRating,
            productPrice: req.body.productPrice,
            image: req.body.image
        })

        imageData.save()
        .then((data) => {
            res.send('save')
        })
        .catch(err => console.log(err))
    }
   })
})

App.get('/getCartData', async (req, res) => {
    let data = await CardModel.find({})
    res.json(data)
})

App.delete('/DeleteCartdata/:id', async (req, res) => {
    let id = req.params.id
    await CardModel.findByIdAndDelete({ _id: id })
    res.send("deleted")
})





// User Model

//multer configration



// for admin schema

let adminSchema = new mongoose.Schema({

    email: String,
    password: String,

})

let adminModel = mongoose.model('adminData', adminSchema)



App.get('/', (req,res)=>{
    res.sendFile(__dirname + '/index.html')
})


// for admin api

App.post('/verify', (req, res) => {
    let adminBody = req.body
    let finalPass = new adminModel(adminBody)
    finalPass.save()
        .then(() => res.send("data submited"))
        .catch(err => console.log(err))

})



App.get('/admindata', async (req, res) => {
    let data = await adminModel.find({})
    res.json(data)
})

App.post('/login', async (req, res) => {
    let email = req.body.email
    let password = req.body.password
    console.log(email)
    console.log(password)
    let data = await adminModel.find({ email: email, password: password })
    if (data.length > 0) {
        res.send(true)
    }
    else {
        res.send(false)
    }
})



App.listen(4000)
>>>>>>> 15b8a6e014285f70bfc807b7fe8c53dcbe073c0a
