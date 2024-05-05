const mongoose = require('mongoose')

let clientSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true, 
        index: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowecase: true,
        trim: true, 
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    image: String,
},
{
    timestamps: true
})

module.exports = mongoose.model('clientData', clientSchema)