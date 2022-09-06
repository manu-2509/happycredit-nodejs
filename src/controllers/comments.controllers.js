const express = require("express")

const Comment = require("../models/comments.models")

const Post = require("../models/posts.models")

const router = express.Router();

router.post("",async(req, res)=>{
    try {
        const comment = await Comment.create(req.body)
    
        const post = await Post.findById(req.id)
    
        post.comment = Comment.find({postId:req.id})
    
        return res.status(200).send(post)
    } catch (err) {
        return res.status(500).send(err.message)
    }
})

module.exports = router;