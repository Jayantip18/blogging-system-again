const mongoose = require("mongoose")

const catSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now() //date time

    }
})

module.exports = mongoose.model('Category',catSchema)