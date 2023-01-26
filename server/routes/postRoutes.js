const express = require('express');
const router = express.Router();
const postApi = require('./../controllers/postApi');

router.route('/').get(postApi.getAllPosts).post(postApi.createPost);

router
  .route('/:id')
  .get(postApi.getPostById)
  .patch(postApi.updatePost)
  .delete(postApi.deletePost);

module.exports = router;
