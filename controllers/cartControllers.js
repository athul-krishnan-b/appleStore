const cartModel = require('../models/cartModel');
const productModel = require('../models/productModel');

const cartPage= async(req,res)=>{
    try {
const cartItems=await cartModel.find({}).populate('product')
console.log(cartItems)
        res.render('user/cart',{cartItems})
    } catch (error) {
        console.log(error)
        res.send('Error Page')
    }
}

const addToCart=async(req,res)=>{
    try {
        const productId=req.params.productId
        console.log(productId);
        const productDetail = await productModel.findById(productId);
        console.log(productDetail);

        if (!productDetail) {
            return res.status(404).send('Product not found');
        }

        //find is product in cart

        //product already in cart

        const addedProduct = await new cartModel ({
            product:productId,
            totalPrice:productDetail.productPrice
        }).save();
        console.log(addedProduct);
        res.send('product added to cart successfully')

        
    }catch (error) {
        console.log(error)
        res.send('Error Page')
    }
}

const changeQuantity=(req,res)=>{
    try {
        console.log(req.body);
    } catch (error) {
        console.log(error);
    }
}


module.exports={addToCart,cartPage,changeQuantity}