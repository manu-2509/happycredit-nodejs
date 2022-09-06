const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    userId:{type:Number,required:true},
    title:{type:String,required:true},
    body:{type:String,required:true},
})

const Post = mongoose.model("post",postSchema)

module.exports = Post