import mongoose, { Mongoose } from "mongoose";
import validator from "validator";
export const userSchema = new Mongoose.schema({
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
        validator:[validator.isEmail,"please enter  valid email"]
    },
    password:{
        type:String,
        required:[true,"please enter your password"],
        unique:true,
        validator:[validator.isEmail,"please enter  valid email"],
        minLength:[6,"cannot be less than 6 characters"],
        select:false
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
const User=mongoose.model("User",userSchema)
export default User