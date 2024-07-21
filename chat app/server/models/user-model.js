import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
    fullName:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        minlength: 6,  // Corrected typo here
    },
    gender:{
        type:String, 
        required: true,
        enum:['male', 'female']
    },
    profilePic:{
        type:String,
        required:true,
        default:"",
    },
},
{timestamps:true});  // Removed unnecessary comma here

const User = mongoose.model('User', userSchema)

export default User;