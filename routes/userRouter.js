const express = require('express')
const userRouter = express.Router()
const productControllers = require('../controllers/productControllers')
const cartControllers= require('../controllers/cartControllers')

userRouter.get('/',productControllers.productPage)
userRouter.get('/cart',cartControllers.cartPage)
userRouter.get('/add-to-cart/:productId',cartControllers.addToCart)
userRouter.post('/quantity',cartControllers.changeQuantity)

module.exports = userRouter;