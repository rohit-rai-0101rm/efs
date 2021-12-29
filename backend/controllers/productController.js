import { catchAsyncErrors } from '../middlewares/catchAsyncError.js'
import Product from '../models/productModel.js'
import ApiFeatures from '../utils/apiFeatures.js'
import ErrorHandler from '../utils/errorHandler.js'
export const createProduct=catchAsyncErrors(
    async(req,res,next)=>{
        const product=await Product.create(req.body)
        res.status(201).json({
            success:true,
            product
        })
    
    }
)
export const getAllProducts= catchAsyncErrors(async(req,res)=>{
  const apiFeature=new ApiFeatures(Product.find(),req.query).search()
  const resultPerPage=8
  const products=await apiFeature.query;

    res.status(200).json({
        success:true,
        products,
    })
})
export const updateProduct= catchAsyncErrors(async(req,res,next)=>{
  let product=await Product.findById(req.params.id)
    if(!product){
        return (new ErrorHandler("no product found",404))
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
export const deleteProduct= catchAsyncErrors(async(req,res,next)=>{
    const product=await Product.findById(req.params.id)
    if(!product){
        return next(new ErrorHandler(("Product not found", 44)))

    }
    await product.remove()
    res.status(200).json({
        success:true,
        message:"product deleted successfully"
    })
})
export const getProductDetails=catchAsyncErrors(async(req,res,next)=>{
  const product=await Product.findById(req.params.id)
  if(!product){
    return next(new ErrorHandler(("Product not found", 404)))
  }
  res.status(200).json({
      success:true,
      product,
  })

})

  