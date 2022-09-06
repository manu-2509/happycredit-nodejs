const express = require("express")

const Post = require("../models/posts.models")

const Comment = require("../models/comments.models")

const router = express.Router();


router.get("",async(req,res)=>{
    try {
        const post = await Post.find().lean().exec();
        Post.forEach(async(e)=>{
            const comment = await Comment.find({postId:e.id})
            post.comment=comment
        })
        return res.status(200).send(post)
    } catch (err) {
        return res.status(500).send(err.message)
    }
})


module.exports = router;