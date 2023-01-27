const Post = require('../models/postModel.js');

// get all posts
exports.getAllPosts = async (req, res, next) => {
  try {
    const posts = await Post.getAllPosts();
    if (posts.length === 0) {
      res.status(404).json({
        status: 'fail',
        message: 'No posts found',
      });
    }
    res.status(200).json({
      status: 'success',
      results: posts.length,
      posts,
    });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      error: 'Internal server error',
    });
  }
};

// create a new post
exports.createPost = async (req, res, next) => {
  try {
    if (
      // checks is entered values are null, undefined or empty then gives error
      Object.values(req.body).includes(null) ||
      Object.values(req.body).includes(undefined) ||
      Object.values(req.body).includes('')
    ) {
      return res.status(411).json({
        error: 'One or more required fields are empty',
      });
    }
    const newPost = await Post.createPost(
      req.body.title,
      req.body.ingredients,
      req.body.directions,
      req.body.country,
      req.body.description
    );
    res.status(201).json({
      status: 'Post Created',
      data: {
        newPost,
      },
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// get a single post by ID
exports.getPostById = async (req, res, next) => {
  try {
    const post = await Post.getPostById(req.params.id);
    if (post) {
      res.status(200).json({
        status: 'success',
        data: {
          post,
        },
      });
    } else {
      res.status(404).json({
        status: 'fail',
        message: 'Post with given Id does not exist',
      });
    }
  } catch (error) {
    res.status(500).json({
      error: 'Internal server error',
    });
  }
};

// update an existing post
exports.updatePost = async (req, res, next) => {
  try {
    const post = await Post.updatePost(
      req.params.id,
      req.body.title,
      req.body.ingredients,
      req.body.directions,
      req.body.country,
      req.body.description
    );
    if (!post) {
      res.status(404).json({
        status: 'fail',
        message: 'Post with given Id not found!',
      });
    } else {
      res.status(200).json({
        status: 'success',
        data: post,
      });
    }
  } catch (error) {
    res.status(500).json({
      error: 'Internal server error',
    });
  }
};

// delete a post
exports.deletePost = async (req, res, next) => {
  try {
    const postId = req.params.id;
    const post = await Post.getPostById(postId); // check if post with given id exists
    if (!post) {
      res.status(404).json({
        status: 'fail',
        message: 'Post with given Id not found!',
      });
    } else {
      await Post.deletePost(postId);
      res.status(204).json({
        status: 'success',
        message: 'Post deleted successfully!',
      });
    }
  } catch (error) {
    res.status(500).json({
      error: 'Internal server error',
    });
  }
};
