// to create a schema we reuire mongoose here

const mongoose = require("mongoose")

const noteSchema = new mongoose.Schema({
    title:String,
    description:String
})

//for crud operation we have to noteModel without this we can't perform crud operation

const noteModel = mongoose.model("notes",noteSchema)

module.exports=noteModel