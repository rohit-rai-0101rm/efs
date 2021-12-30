import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken'
import crypto from 'crypto'
export const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"please enter your name"],
        maxLength:[30,"cannot be more than 30 characters"],
        minLength:[3,"cannot be less than 3 characters"]


    },
    email:{
        type:String,
        required:[true,"please enter your email"],
        unique:true,
        validate:[validator.isEmail,"please enter  valid email"]
    },
    password:{
        type:String,
        required:[true,"please enter your password"],
        unique:true,
        minLength:[6,"cannot be less than 6 characters"],
        select:false,
    },
    avatar:{
        
            public_id: {
              type: String,
              required: [true],
            },
            url: {
              type: String,
              required: [true],
            },
           
    },
    role:{
        type:String,
        default:"user"
    },
    resetPasswordToken:String,
    resetPasswordExpire:Date

});
userSchema.pre("save",async function(next){//cant use this within arrow fn therefore using function keyword
if(!this.isModified("password")){
    next();
}
this.password=await bcrypt.hash(this.password,10)

})//some actions will be performed before saving

userSchema.methods.getJWTToken=function(){
    return jwt.sign({id:this._id},
        process.env.JWT_SECRET,{
            expiresIn:process.env.JWT_EXPIRE
        }
        
        )
}

userSchema.methods.comparePassword=async function(enteredPassword){
   return await bcrypt.compare(enteredPassword,this.password)


}

 userSchema.methods.getResetPasswordToken=function(){
    const resetToken=crypto.randomBytes(20).toString("hex")
    this.resetPasswordToken=crypto.createHash("sha256")
    .update(resetToken)
    .digest("hex")
    this.resetPasswordExpire=Date.now()+15*60*1000;
    return resetToken;



}

const User=mongoose.model("User",userSchema)
export default User