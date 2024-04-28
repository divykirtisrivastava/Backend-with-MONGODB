let mongoose = require('mongoose')

<<<<<<< HEAD
const connection = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1)
    }
}
module.exports = connection

=======
let connection = async ()=> {
    await mongoose.connect('mongodb+srv://roshanpandey33580:Roshan@cluster0.ihfyf4v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
}

module.exports = connection
>>>>>>> 15b8a6e014285f70bfc807b7fe8c53dcbe073c0a
