const express = require('express');
 
const cors = require('cors');

const postsControllers = require("./controllers/posts.controllers")

const commentsControllers = require("./controllers/comments.controllers")

const app = express();

app.use(cors())

app.use(express.json())

app.use("/posts",postsControllers)

app.use("/comments",commentsControllers)

module.exports = app;