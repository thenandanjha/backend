const express = require("express")
const mongoose = require("mongoose")
const noteModel = require("./model/note.model")
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json())

const path = require("path")
app.use(express.static("./public"))





app.post("/api/notes",async(req,res)=>{
    const {title ,description } = req.body

    const note = await noteModel.create({
        title ,description
    })
    res.status(201).json({
        message:"notes created succesfully",
        note
    })
})


app.get("/api/notes",async (req,res)=>{
    const notes = await noteModel.find() //noteModel.find() will bring all the data of notemodel and save it in notes  variable
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

/* wild card routes
Ye basically bol raha hai:
"Agar koi bhi route match nahi hua, to index.html file bhej do."  */

app.use("*name",(req,res) =>{
    res.sendFile(path.join(__dirname,"..","/public/index.html"))
})



module.exports = app