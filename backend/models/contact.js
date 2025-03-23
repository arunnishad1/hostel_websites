const mongoose = require("mongoose")
const contactSchema = new mongoose.Schema({
    email:{
        type:String,
        unique:true,
        required:true,
    },

    subject:{
        type:String,
        required:true,
    },

    message:{
        type:String,
        required:true,
    },

},{timestamps:true})

const contacts = new mongoose.model('contact', contactSchema)
module.exports = contacts;