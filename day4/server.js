// we use server .js file to mainly start server
//server.js file is not created under src folder it is always created under root folder

const app = require("./src/app")

app.listen(3000,()=>{
    console.log("server is running");
    
})