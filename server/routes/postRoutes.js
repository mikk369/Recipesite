const express = require('express');
const router = express.Router();
const postApi = require('./../controllers/postApi');
const authController = require('./../controllers/authController');

router
  .route('/')
  .get(postApi.getAllPosts)
  .post(authController.protect, postApi.createPost);

router
  .route('/:id')
  .get(postApi.getPostById)
  .patch(authController.protect, postApi.updatePost)
  .delete(authController.protect, postApi.deletePost);

module.exports = router;
