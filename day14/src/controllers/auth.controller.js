
const userModel = require("../model/user.model")
const crypto = require("crypto") 
const jwt = require("jsonwebtoken")


async function registerController(req,res){
    const{ email,username,password,bio,profileImage} =req.body
     
    // const isUserExistByEmail = await userModel.findOne({email})

    // if(isUserExistByEmail){
    //     res.status(409).json({
    //         message:"User already exist with email"
    //     })
    // }
    // const isUserExistByName = await userModel.findOne({username})
    // if(isUserExistByName){
    //     res.status(409).json({
    //         message:"Username already exist"
    //     })
    // }

    //userModel.findOne() this will check in databse that name and email which is requested is already in databse or not
    const isUserAlreadyExists = await userModel.findOne(
        { $or:[   /* $or:[{username},{email}] it is a $or operatorwhich accept mutliple query which will check either by username or 
                    email which is already exist or not */
            {username},
            {email}
        ]

        }
    )

    if(isUserAlreadyExists){
        return res.status(409).json({
            message:`user already exist by ${(isUserAlreadyExists.username==username) ? "username":"email"} `
        })
    }

    const hash = crypto.createHash("sha256").update(password).digest("hex")

    const user = await userModel.create({
        email,
        username,
        password:hash,
        bio,
        profileImage
    })
    const token = jwt.sign({
        id:user._id
    },
    process.env.JWT_SECRET,{expiresIn:"1d"}) //TOKEN WILL EXPIRE IN ONE DAY

    res.cookie("token",token)

    res.status(201).json({
        message:"User registered succesfully",
        user:{
            email:user.email,
            username:user.username,
            bio:user.bio,
            profileImage:user.profileImage 
            //response m kabhi bhi password nhi bhejte securtiy purpose
        }
    })
}


async function loginController(req,res){
    const{username, email ,password}=req.body

    const user = await userModel.findOne({
        $or:[
            //condition array 1st obejct m first condition ,2nd object m second condition
            {username:username},
            {email:email}
        ]
    })
    //if user not found by username or email
    if(!user){
        return res.status(404).json({
            message:"user not found"
        })
    }
    //now check passwordis correct or not 
    const hash = crypto.createHash("sha256").update(password).digest("hex")
//if password not correct
    const isPasswordValid = hash == user.password
    if(!isPasswordValid){
        return res.status(401).json({
            message:"inavalid password"
        })
    }
//if passowrd is valid then create token
    const token = jwt.sign({
        id:user._id
    },process.env.JWT_SECRET,{
        expiresIn:"1d"
    })
    res.cookie("token",token)
    res.status(200).json({
        message:"user loggedIn succesfully",
        user:{
            username:user.username,
            email:user.email,
            bio:user.bio,
            profileImage:user.profileImage
        }
    })
}

module.exports={
    registerController,
    loginController
}