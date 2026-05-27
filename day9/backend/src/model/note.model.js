const mongoose = require("mongoose")
const { schema } = require("../../../../day7/src/models/notes.model")

/*
To create a schema we use mongoose.Schema() in which we passa object of data how to be stored
schema = structure of data
Inside it we define the structure and types of data
that will be stored in the database.
*/
const noteSchema = mongoose.Schema({
    title:String,
    description:String
})

const noteModel =mongoose.model("notes",noteSchema)


module.exports=noteModel


    
