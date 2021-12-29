import express from "express";




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

