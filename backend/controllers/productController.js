const Product=require("../models/productModel")
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncError");

exports.createProduct=catchAsyncErrors(
    async(req,res,next)=>{
        const product=await Product.create(req.body)
        res.status(201).json({
            success:true,
            product
        })
    
    }
)
exports.getAllProducts= catchAsyncErrors(async(req,res)=>{
  //return next(new ErrorHandler("temp error"))
  const resultPerPage=8
  const products=await Product.find();

    res.status(200).json({
        success:true,
        products,
    })
})
exports.updateProduct= catchAsyncErrors(async(req,res,next)=>{
  let product=await Product.findById(req.params.id)
  if(!product){
      return res.status(500).json({
          success:false,
          message:"product not found"
      })
  }
  product=await Product.findByIdAndUpdate(req.params.id,req.body,{
      new:true,
      runValidators:true,
      useFindAndModify:false
  })
  res.status(200).json({
      success:true,
      product
  })
})
exports.deleteProduct= catchAsyncErrors(async(req,res,next)=>{
    const product=await Product.findById(req.params.id)
    if(!product){
        return next(new ErrorHandler(("Product not found", 404)))

    }
    await product.remove()
    res.status(200).json({
        success:true,
        message:"product deleted successfully"
    })
})
exports.getProductDetails=catchAsyncErrors(async(req,res,next)=>{
  const product=await Product.findById(req.params.id)
  if(!product){
      return next(new ErrorHandler(("Product not found", 404)))
  }
  res.status(200).json({
      success:true,
      product,
  })

})

  