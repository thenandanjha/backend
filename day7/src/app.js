const express = require("express")
const { default: mongoose } = require("mongoose")
const noteModel = require("./models/notes.model")

const app = express()//server initiated here

app.use(express.json())

/* 
    post/notes
    req.body

*/

app.post("/notes",async(req,res)=>{
    const {title ,description} = req.body
    const note = await noteModel.create({
        title,description

    })
    res.status(201).json({
       message : " notes created succesfully",
       note
    })
    
    
})

app.get("/notes",async(req,res)=>{
    const notes = await noteModel.find() //find() method always return data in array of object

    res.status(200).json({
        message:"get notes sucesfully",
        notes
    })
})


app.get("/notes",(req,res)=>{

})

module.exports = app