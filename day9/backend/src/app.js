const express = require("express")
const mongoose = require("mongoose")
const noteModel = require("./model/note.model")
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json())

app.use(express.static("./public")) 



app.post("/api/notes",async(req,res)=>{
    const {title ,description } = req.body

    const notes = await noteModel.create({
        title ,description
    })
    res.status(201).json({
        message:"notes created succesfully",
        notes
    })
})


app.get("/api/notes",async (req,res)=>{
    const notes = await noteModel.find() //noteModel.find() will bring all the data of notemodel and save it in notes    variable
    res.status(200).json({
        message:"notes fetched succesfully",
        notes
    })
})


app.delete("/api/notes/:id",async(req,res)=>{
    const id = req.params.id
    await noteModel.findByIdAndDelete(id) 
    res.status(200).json({

        message:"notes deleted succcesfully"
        
    })
})

app.patch("/api/notes/:id",async(req,res)=>{
    const id = req.params.id
    const {description} = req.body
    await noteModel.findByIdAndUpdate(id,{description})

    res.status(200).json({
        message:"updated succesfully"
    })
     

})

module.exports = app