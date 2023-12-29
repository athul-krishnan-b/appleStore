const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
//   user: {
//     type: mongoose.Types.ObjectId,
//     ref: "user",
//   },
  product: {
    type: mongoose.Types.ObjectId,
    ref: "product",
    required: true
  },
  quantity: {
    type: Number,
    default:1
  },
  totalPrice: {
    type: Number,
    default:0
  },
});

module.exports = mongoose.model("cart", cartSchema);

// const mongoose = require ('mongoose')
// const productSchema = new mongoose.Schema({
//     productName:{
//         type:String ,
//         required : true
//     },
//     image : [{
//         type:String
//     }],
//     productPrice: {
//         type:Number ,
//         required : true
//     },
//     description: {
//         type:String
//     }
// })
// module.exports = mongoose.model('product',productSchema)
