const mongoose = require ('mongoose')
const productSchema = new mongoose.Schema({
    productName:{
        type:String ,
        required : true
    },
    image : [{
        type:String
    }],
    productPrice: {
        type:Number ,
        required : true
    },
    description: {
        type:String 
    }
})
module.exports = mongoose.model('product',productSchema)