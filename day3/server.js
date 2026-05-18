const express = require("express")

const app = express()//the server we created by express here is not capable so much that it can read req.body data coming from client to server so we use middlewear express.json() to read the data 

// 🔥 Middleware to parse JSON
app.use(express.json())

const notes = [
    // {
    //     title: "test title 1",
    //     description: "description title 1",
    // },
    // {
    //     title: "test title 2",
    //     description: "description title 2",
    // }
]

app.post("/notes",(req,res)=>{
    console.log(req.body)// to read req.body data we use app.use(express.json())
    notes.push(req.body)
    res.send("notes created")
})

app.get("/notes",(req,res)=>{
    res.send(notes)
})


app.listen(3000)

