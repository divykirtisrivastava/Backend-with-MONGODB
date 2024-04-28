<<<<<<< HEAD
const express = require('express');
const router = express.Router();
const upload = require('../multerConfig.js')

const productController = require('../controller/productController.js')

router.post('/saveProduct',upload.single('image'), productController.saveProduct)
router.get('/getProduct', productController.getProduct)
router.get('/getProductByName/:productBrand', productController.getProductByName)
router.get('/viewProduct/:id', productController.viewProduct)
router.put('/updateProduct/:id',upload.single('image'), productController.updateProduct)
router.delete('/deleteProduct/:id', productController.deleteProduct)


module.exports = router
=======
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
>>>>>>> 15b8a6e014285f70bfc807b7fe8c53dcbe073c0a
