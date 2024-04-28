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

exports.saveAdmin = async (req, res) => {
    let adminBody = req.body
    let finalPass = new adminModel(adminBody)
    finalPass.save()
        .then(() => res.send("data submited"))
        .catch(err => console.log(err))

}