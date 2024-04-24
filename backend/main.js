let express = require('express')
let mongoose = require('mongoose')
let bodyParser = require('body-parser')
let multer = require('multer')
let path = require('path')
let cors = require('cors')



let App = express()
App.use(express.json())
App.use(cors())
App.use(bodyParser.urlencoded({extended: true}))

App.use(express.static('uploads'))
async function Mongdb() {
    await mongoose.connect('mongodb+srv://roshanpandey33580:Roshan@cluster0.ihfyf4v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
}
Mongdb().then(() => console.log("databse connected"))
    .catch(err => console.log(err))

let newimageSchema = new mongoose.Schema({
    productBrand: String,
    productPrice: String,
    productType: String,
    productRating: String,
    image: String,
    
})


//Add To card Schema


let AddCardSchema = new mongoose.Schema({
    productBrand: String,
    productPrice: String,
    productType: String,
    productRating: String,
    image: String,
})

//Add To card model

let CardModel = mongoose.model('AddCard', AddCardSchema)

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
let newimageModel = mongoose.model('myFormData', newimageSchema)

//multer configration
const storage = multer.diskStorage({
    destination: './uploads/',
    filename: (req, file, cb) => {
        cb(null,file.fieldname  + '-' + Date.now() + path.extname(file.originalname) );
    }
});

const upload = multer({ storage: storage }).single('image');


// for admin schema

let adminSchema = new mongoose.Schema({

    email: String,
    password: String,

})

let adminModel = mongoose.model('adminData', adminSchema)



App.get('/', (req,res)=>{
    res.sendFile(__dirname + '/index.html')
})


App.post('/submit', (req, res) => {
    upload(req, res, (err) => {
  
     if(err){
        console.log(err)
     }else{
       const imageData = new newimageModel({
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
   })
})

App.get('/getdata', async (req, res) => {
    let data = await newimageModel.find({})
    res.json(data)
})

App.get('/getdata/:name', async (req, res) => {
    let name = req.params.name
    let data = await newimageModel.find({ name: name })
    res.json(data)
})




App.get('/viewdata/:id', async (req, res) => {
    let id = req.params.id
    let data = await newimageModel.find({ _id: id })
    res.json(data)
})


App.delete('/Deletedata/:id', async (req, res) => {
    let id = req.params.id
    await newimageModel.findByIdAndDelete({ _id: id })
    res.send("deleted")
})

App.put('/updateData/:id', async (req, res) => {
    let id = req.params.id
    let newData = req.body

    await newimageModel.findByIdAndUpdate(id, newData, { new: true })
    res.send("data updated")
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
