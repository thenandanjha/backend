require("dotenv").config()
const app = require("./src/app")

const mongoose = require("mongoose")

function connectToDb(){
    mongoose.connect("mongodb+srv://nandanjhadev_db_user:qksVm30t1S8ukHA3@cluster0.rcpcwfg.mongodb.net/day-6")
    .then(()=>{
        console.log("database is connected")
    })
}

connectToDb()


app.listen(3000,()=>{
    console.log("server is running on port 3000")
})