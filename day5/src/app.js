// server ko create krna 
//server ko config krna

const express = require ("express")
const app = express() //sever instance is created here

app.use(express.json())
const notes = [];

app.post("/notes",(req,res)=>{
    notes.push(req.body)
    // res.send("notes created succesfully")
    res.status(201).json({
        message:"notes created sucessfully"
    })
})


app.get("/notes",(req,res)=>{
   
    // res.send(notes)
    res.status(200).json({
        notes:notes
    })
})

app.delete("/notes/:index",(req,res)=>{
    delete notes[req.params.index]
    // res.send("deleted succesfully")
    res.status(204).json({
        message:"note deleted succesfullly"
    })
})

app.patch("/notes/:index", (req,res)=>{

    notes[req.params.index].name=req.body.name
    notes[req.params.index].id=req.body.id

    res.status(200).json({
        message:"notes updated succesfully",
        notes:notes
    })

    })




module.exports = app