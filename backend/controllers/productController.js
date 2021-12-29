import express from "express";
import Product from '../models/productModel.js'


export const createProduct=async(req,res,next)=>{
  const product=await Product.create(req.body);
  res.status(201).json({
    success:true,
    product
  })

}
export const getProducts =  (req, res) => {
  
  
  res.status(200).json({
    message:"hello",
  });
};
  
  
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

