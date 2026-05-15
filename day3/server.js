const express = require("express")

const app = express()

const notes = [
    {
        title: "test title 1",
        description: "description title 1",
    },
    {
        title: "test title 2",
        description: "description title 2",
    }
]

app.listen(3000,()=>{
    console.log("server is running")
})