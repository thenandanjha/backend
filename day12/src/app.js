const express = require("express")
const cookieParser=require("cookie-parser")
// const userModel = require("./models/users.model")
const authRouter=require("./routes/auth.routes")

const app = express()


app.use(express.json())
app.use(cookieParser())//by this middleware server can keep data in browser cookies and can read it also
app.use("/api/auth",authRouter)

module.exports=app