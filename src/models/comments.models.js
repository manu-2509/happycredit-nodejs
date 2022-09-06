const mongoose = require('mongoose');


const commentSchema = mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true},
    body:{type:String, required:true},
    postId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"post",
        required:true,
    }
})

const Comment = mongoose.model('comment',commentSchema)

module.exports = Comment