const express = require('express')
const adminRouter = express.Router()
const productControllers = require('../controllers/productControllers')
const upload = require('../utils/fileUpload')

adminRouter.post('/productSubmit',upload.array('productImage',3),productControllers.addProduct)

adminRouter.get('/add-product',productControllers.addProductPage)

module.exports = adminRouter;