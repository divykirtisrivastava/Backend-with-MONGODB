let mongoose = require('mongoose')

let connection = async ()=> {
    await mongoose.connect('mongodb+srv://roshanpandey33580:Roshan@cluster0.ihfyf4v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
}

module.exports = connection