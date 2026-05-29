const express = require("express")   
require("dotenv").config()

const connectToDb = require("./src/config/database")
const app = require("./src/app")
const path = require("path")
app.use(express.static("./public"))



connectToDb()

/* wild card routes
Ye basically bol raha hai:
"Agar koi bhi route match nahi hua, to index.html file bhej do."  */

app.use("*name",(req,res) =>{
    res.sendFile(path.join(__dirname,"..","/public/index.html"))
})

app.listen(3000,()=>{
    console.log(`server is running on port 3000`)
})