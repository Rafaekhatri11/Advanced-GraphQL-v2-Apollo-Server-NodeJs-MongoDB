const mongoose = require("mongoose");


const AuthorSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
},{timestamps:true})


const Author = mongoose.model('author', AuthorSchema)

module.exports = Author