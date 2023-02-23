const express = require('express');
const router = express.Router();
const postApi = require('./../controllers/postApi');
const upload = require('../controllers/multer');

router
  .route('/')
  .get(postApi.getAllPosts)
  .post(upload, postApi.createPost, postApi.likedPost);

router
  .route('/:id')
  .get(postApi.getPostById)
  .patch(postApi.updatePost)
  .delete(postApi.deletePost);

module.exports = router;
