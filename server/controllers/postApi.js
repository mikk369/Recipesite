const Post = require('../models/postModel');
const cloudinary = require('./cloudinary');
const jwt = require('jsonwebtoken');

// get all posts
exports.getAllPosts = async (req, res, next) => {
  try {
    const posts = await Post.getAllPosts();
    if (posts.length === 0) {
      return res.status(404).json({
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
  // Check if all fields are filled
  if (
    !req.body.title ||
    !req.body.ingredients ||
    !req.body.directions ||
    !req.body.country ||
    !req.body.description
  ) {
    return res.status(411).json({
      error: 'All fields are required',
    });
  }
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    req.imageUrl = result.secure_url;
    if (!req.file) {
      return res.status(400).json({
        error: 'Image file is required',
      });
    }

    // Extract the token from the Authorization header
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    // Verify the token
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    // Extract the user ID from the token
    const author_id = decodedToken.user_id;
    // get username from token
    const username = decodedToken.username;
    const newPost = await Post.createPost(
      req.body.title,
      req.body.ingredients,
      req.body.directions,
      req.body.country,
      req.body.description,
      req.imageUrl,
      author_id,
      username
    );

    res.status(201).json({
      status: 'Post Created',
      newPost,
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.likedPost = async (req, res, next) => {
  try {
    // Create a new post object with the user_id and post_id
    const newLikedPost = await Post.likedPost(
      req.body.user_id,
      req.body.post_id
    );
    console.log(newLikedPost);

    res.status(201).json({
      statu: 'success',
      message: 'Liked post saved successfully',
      likedPost: newLikedPost,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'Failed to save liked post',
      error: error.message,
    });
  }
};

// get a single post by ID
exports.getPostById = async (req, res, next) => {
  try {
    const post = await Post.getPostById(req.params.id);
    if (post) {
      res.status(200).json({
        status: 'success',
        post,
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
      req.body.description,
      req.body.image
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
