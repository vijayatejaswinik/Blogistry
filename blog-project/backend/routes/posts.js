/*
const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Create a post
router.post('/', async (req, res) => {
  try {
    const newPost = new Post(req.body);
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// Get all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// Get a single post by ID
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.json(post);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// Update a post
router.put('/:id', async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.json(updatedPost);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// Delete a post
router.delete('/:id', async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.json("Post deleted successfully");
  } catch (err) {
    res.status(500).json(err.message);
  }
});



module.exports = router;

*/

const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Create a post
router.post('/', async (req, res) => {
  const { username, title, content } = req.body;
  try {
    const newPost = new Post({ username, title, content });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// Get all posts (or by username query)
router.get('/', async (req, res) => {
  const username = req.query.user;
  try {
    const posts = username
      ? await Post.find({ username })
      : await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// ✅ Get a single post by ID (you need this!)
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json("Post not found");
    res.json(post);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// Update a post
router.put('/:id', async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.json(updatedPost);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;
