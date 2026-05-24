require("dotenv").config()

const app = require("./src/app")
const connectToDb = require("./src/config/database")
const mongoose = require("mongoose")

// function connectToDb(){
//     mongoose.connect("mongodb+srv://nandanjhadev_db_user:qksVm30t1S8ukHA3@cluster0.rcpcwfg.mongodb.net/day-7")
//     .then(()=>{
//         console.log("dtabase is connected")
//     })
        
    
// }  we will dont write this code in server.js file we will eport it from src/config/databse.js

connectToDb()

app.listen(3000,()=>{
    console.log("server is running on port 3000")
})