import express from "express";
import Product from '../models/productModel.js'


export const createProduct=async(req,res,next)=>{
  const product=await Product.create(req.body);
  res.status(201).json({
    success:true,
    product
  })

}
export const getAllProducts = async (req, res) => {
  const products=await Product.find();

  
  
  res.status(200).json({
    success:true,
    products
  });
};
export const getProductById=async(req,res)=>{
  const product=await Product.findById(req.params.id)
  res.status(200).json({
    success:true,
    product
  })
}
  export const updateProduct=async(req,res)=>{
    let product=await Product.findById(req.params.id);
    if(!product){
      return res.status(500).json({
        success:false,
        message:"product not found"
      })
    }
    product=await Product.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true,useFindAndModify:false})
    res.status(201).json({
      success:true,
      message:" one product updated ",
      product
    })

  }
  export const deleteProduct=async(req,res)=>{
    const product=await Product.findById(req.params.id)
    if(!product){
      return res.status(500).json({
        success:false,
        message:"product not found"
      })

    }
    await product.remove()
    res.status(200).json({
      success:true,
      message:"product deleted"
  })
  }
  
  /* cloudinary.v2.api.resources({
    type: 'upload',
    prefix: 'Stories' // add your folder
  },
   function(error, result) { 
  
    res.status(200).json({
      success: true,
      result,
  });
  
 }) */

