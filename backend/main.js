let express = require('express')
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

db().then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch(err => console.log(err))

    app.use('/api', productRoute)

    app.use('/api', cartRoute)

    app.use('/api', adminRoute)
