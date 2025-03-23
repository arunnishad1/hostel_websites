const mongoose = require("mongoose")
require("dotenv").config()

mongoose.connect(`${process.env.MONGODB_URI}`,{
    useUnifiedTopology:true,
}).then((db)=>{
    console.log(`database is connected to :${db.connection.host}`)
}).catch((error)=>{
    console.log(`database connection failed : ${error}`)
})