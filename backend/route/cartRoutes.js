const express = require('express');
const router = express.Router();
const upload = require('../multerConfig.js')

const cartControllers = require('../controller/cartController.js')

router.post('/saveCart',upload.single('image'), cartControllers.saveCartData)
router.get('/getCart', cartControllers.getCartData)
router.delete('/deleteCart/:id', cartControllers.deleteCartData)

module.exports = router