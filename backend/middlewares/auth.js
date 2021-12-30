import ErrorHandler from "../utils/errorHandler.js";
import { catchAsyncErrors } from "./catchAsyncError.js";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

 const isAuthenticatedUser=catchAsyncErrors(async(req,res,next)=>{
    const {token}=req.cookies;
    //console.log(token)
    if(!token){
        return next(new ErrorHandler("Please login to access this resource",401))
    }
    const decodedData=jwt.verify(token,process.env.JWT_SECRET)
    req.user=await User.findById(decodedData.id)
    next()
})
export default isAuthenticatedUser