const express = require("express")
const routes  = require("../Routes/user.routes.js")
const cors = require("cors")
const db = require("../config/conn.js")
const cookieParser = require("cookie-parser")
const app = express()
require("dotenv").config()

app.use(express.json())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
}))
app.use(cookieParser())
app.use(express.urlencoded({extended:false}))

const PORT = process.env.PORT || 5500

app.get("/", (req,res)=>{
    res.send("Hello, this is my first pages....")
})

app.use("/user", routes)

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})