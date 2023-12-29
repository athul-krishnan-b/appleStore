const productModel = require("../models/productModel")

const productPage = async(req,res)=>{
    try {
        const products=await productModel.find({})
        console.log(products);
        res.render("user/products",{products})
    } catch (error) {
        res.send('Error page')
    }
}

const addProduct = async(req,res)=>{
    try {
      
const images=req.files?.map((file)=>file.filename)

// const images = req.files.map((file)=>{
//     return(
//         file.filename
//     )
// })

        const product = await new productModel({
            productName:req.body.productName,
            productPrice:req.body.productPrice,
            description:req.body.description,
            image:images
        }).save();
        console.log(product)
        res.send('added product successfully')
    } catch (error) {
        console.log(error)
        res.send('Error Page')
    }
}
const addProductPage = async(req,res)=>{
    try {
        res.render('admin/addProduct')
    } catch (error) {
        console.log(error)
        res.send('Error Page')
    }
}


module.exports={
    productPage,
    addProduct,
    addProductPage,

}
