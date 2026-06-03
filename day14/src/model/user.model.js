const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: {
        type:String,
        unique:[true,"User already exist"],
        required:[true,"User name is required"]
    },
    email:{
        type:String,
        unique:[true,"Email already exists"],
        required:[true,"Email is required"]
    },
    password:{
        type:String,
        required:[true,"Password is required"]
    },
    bio:String,
    profileImage:{
        type:String,
        default: "https://imagekit.io/dashboard/media-library/detail/6a1d4dc75c7cd75eb87fdb6e"
    }
})


const userModel = mongoose.model("user",userSchema)


module.exports=userModel