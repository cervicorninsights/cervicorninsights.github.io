const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Create a new post
router.post('/posts', async (req, res) => {
    const { title, content } = req.body;
    const post = new Post({ title, content });
    await post.save();
    res.json(post);
});

// Get all posts
router.get('/posts', async (req, res) => {
    const posts = await Post.find().sort('-createdAt');
    res.json(posts);
});

// Get a single post by id
router.get('/posts/:id', async (req, res) => {
    const post = await Post.findById(req.params.id);
    res.render('post', { post });
});

module.exports = router;
