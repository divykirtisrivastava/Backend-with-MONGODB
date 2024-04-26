let express = require('express')
const router = express.Router()
const productController = require('../controller/productController.js')
let upload = require('../muletConfig.js')

router.post('/saveProduct',upload.single('image'), productController.saveProduct)

router.get('/getProduct', productController.getProduct)

router.get('/getProductByName/:name', productController.getProductByName)

router.get('/viewProduct/:id', productController.viewProduct)

router.delete('/deleteProduct/:id', productController.deleteProduct)

router.put('/updateProduct/:id', productController.deleteProduct)

module.exports = router
