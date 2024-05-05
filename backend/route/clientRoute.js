const express = require('express');
const router = express.Router();
const upload = require('../multerConfig.js')

const clientControllers = require('../controller/clientController.js')

router.post('/saveClient',upload.single('image'), clientControllers.saveClient)
router.post('/clientLogin', clientControllers.clientLogin)
router.get('/createUserCart/:username', clientControllers.createUserCart)



module.exports = router