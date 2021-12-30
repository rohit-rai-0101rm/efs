import ErrorHandler from "../utils/errorHandler.js";
import { catchAsyncErrors } from "../middlewares/catchAsyncError.js";
import User from "../models/userModel.js";
import sendToken from "../utils/jwtToken.js";

export const registerUser = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "this is  a sample id",
      url: "profilepicUrl",
    },
  });
  sendToken(user,201,res)
});
export const loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new ErrorHandler("Please enter email & password", 404));
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorHandler("insvalid email or password", 401));
  }
  const isPasswordMatched = user.comparePassword(password);
  if (!isPasswordMatched) {
    return next(new ErrorHandler("insvalid email or password", 401));
  }
 sendToken(user,200,res)

})
export const logout=catchAsyncErrors(async(req,res)=>{
  
  res.cookie("token",null,{
    expires:new Date(Date.now()),//expire immideaqtely
    httpOnly:true
  })
  
  res.status(200).json({
    success:true,
    message:"logged out"
  })
})

export const forgotPasword=catchAsyncErrors(async(req,res,next)=>{
  const user=await User.findOne({email:req.body.email})
  if(!user){
    return next(new ErrorHandler("user not found",404))

  }
 const resetToken= user.getResetPasswordToken();
await user.save({validateBeforeSave:false})
const resetPasswordUrl=`${req.protocol}://${req.get(
  "host"
  )}/api/v1/password/reset/${resetToken}`
//re.get("host")==http://localhost:5000

//${req.protocol}=hhtp/https


})