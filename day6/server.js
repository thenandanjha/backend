require("dotenv").config()
const app = require("./src/app")

const mongoose = require("mongoose")

function connectToDb(){
    // mongoose.connect("mongodb+srv://nandanjhadev_db_user:qksVm30t1S8ukHA3@cluster0.rcpcwfg.mongodb.net/day-6")
    mongoose.connect(process.env.MONGO_URI)// we use this to connect beacuse we dont want push this mongo_uri link to github for security thread
    .then(()=>{
        console.log("database is connected")
    })
}

connectToDb()


app.listen(3000,()=>{
    console.log("server is running on port 3000")
})