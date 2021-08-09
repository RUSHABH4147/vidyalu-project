const mongoose = require('mongoose')

const signupModel = mongoose.Schema({
    "Name":{
        type:String,
        required:true
    },
    "Email":{
        type:String,
        required:true
    },
    "password":{
        type:String,
        required:true
    },
    "date":{
        type:Date,
        default:Date.now
    }
    
})

module.exports = mongoose.model("vidyalu_users",signupModel)