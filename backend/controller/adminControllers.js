const adminModel = require('../models/admin.js')

exports.adminLogin =  async (req, res) => {
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
}

exports.saveAdmin =  (req, res) => {
    let finalPass = new adminModel({    
        email: req.body.email,
        password:req.body.password
    })
    console.log(finalPass)
    finalPass.save()
        .then(() => res.send("data submited"))
        .catch(err => console.log(err))
}