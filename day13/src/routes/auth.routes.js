const express = require("express")//we have to reqyuire here express again

const jwt = require("jsonwebtoken");
const crypto = require("crypto")


const userModel=require("../models/users.model")


const authRouter = express.Router();


authRouter.post("/register",async(req,res)=>{
    const {email,name,password}=req.body  
    const isUserAlreadyExist= await userModel.findOne({email})

    if (isUserAlreadyExist){
        return res.status(409).json({
            message:"user already exist with this email id"
        })
    }

    const hash = crypto.createHash("md5").update(password).digest("hex")
    const user = await userModel.create({email,name,password:hash})

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

authRouter.post("/protected",(req,res)=>{
    console.log(req.cookies)
    res.status(200).json({
        message:"This is protected route",

    })
})


authRouter.post("/login",async(req,res)=>{

    const{email,password}=req.body

    const user = await userModel.findOne({email})
    if(!user){
        return res.status(404).json({
            message:"user not found with this email id"
        })
    }

    const isPasswordMatched = user.password === crypto.createHash("md5").update(password).digest("hex")
    if(!isPasswordMatched){
        res.status(401).json({
            message:"invalid User"
        })
    }

    const token = jwt.sign({
        id:user._id
    },process.env.JWT_SECRETES)

    res.cookie("jwt_token",token)

    res.status(200).json({
        message:"user logged in",
        user
    })
})




module.exports=authRouter