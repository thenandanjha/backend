/*
    inside App.js file we maily use to create server and config server
*/

const express = require ("express")

const app = express() //server is created here

app.use(express.json())

const notes = []
/* post/notes */
app.post("/notes",(req,res)=>{
    
    notes.push(req.body)

    // console.log(notes)

    res.send("notes created")
})
/* get/notes */
app.get("/notes",(req,res)=>{
    res.send(notes)
})

/*✅ req.body

👉 Jab client se actual data bhejte hain tab use hota hai.

Mostly:

create data
update data
send form data

✅ req.params

👉 Jab URL me single specific data bhejte hain tab use hota hai.

Mostly:

delete one item
update one item
get one item

/*


// delete/notes 
/* "/notes/:index means" it will throw dymanic index value here which client send to server and that index value will store in req.params*/

app.delete("/notes/:index",(req,res)=>{
    
    // console.log(req.params.index)
    delete notes[req.params.index]
    res.send("note deleted succesfully")
})

app.patch("/notes/:index",(req,res)=>{
    notes[ req.params.index ].description = req.body.description
    res.send("note updated sucesfully")
})

module.exports = app