const express = require("express")//we have to reqyuire here express again

const jwt = require("jsonwebtoken");


const userModel=require("../models/users.model")


const authRouter = express.Router();




const token = jwt.sign(
  { userId: "123" },
  "secret_key"
);




authRouter.post("/register",async(req,res)=>{
    const {email,name,password}=req.body  
    const isUserAlreadyExist= await userModel.findOne({email})
    if (isUserAlreadyExist){
        return res.status(409).json({
            message:"user already exist with this email id"
        })
    }
    const user = await userModel.create({email,name,password})

    const token = jwt.sign({
        id:user._id,
        email: user.email
    },
        process.env.JWT_SECRETES
    )
    res.cookie("jwt_token",token) //by this jwt token will store in cookie

    res.status(201).json({
        message:"user registered successfully",
        user,
        token
    })

})




module.exports=authRouter