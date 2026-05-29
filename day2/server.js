const express = require("express");

const app = express();//server instance created here




app.get('/', (req,res) => {
    res.send('hello world')
})

app.get("/about",(req,res)=>{
    res.send("This is about page...")
})

app.get("/home",(req,res)=>{
    res.send("This is home page.....")
})

app.get("/cart",(req,res)=>{
res.send("This is your cart..")
})

app.listen(3000)//server start krna



//npx nodemon server.js   command is used to run a server because it keep refershing the server as we changes code in js

// What npx nodemon server.js actually does
// nodemon is a tool that runs your Node.js server
// It automatically restarts the server whenever you make changes in your files

// 👉 So yes, your idea of “refreshing” is kind of right — but technically it’s restarting the server, not refreshing like a browser.

// 🔥 Simple difference (easy to remember)
// npm → install & manage packages + run scripts
// npx → directly run a package

// If you really want to use npm, you must define a script in package.json

// {
//   "scripts": {
//     "start": "nodemon server.js"
//   }
// }
// npm run start

// 👉 Here npm is running the script, not nodemon directly