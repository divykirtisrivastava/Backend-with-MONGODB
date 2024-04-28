const mongoose = require('mongoose');

let adminSchema = new mongoose.Schema({

    email: String,
    password: String,

})

module.exports = mongoose.model('adminData', adminSchema)