const express = require('express');

const router = express.Router();

const postBody = require('../middlewares/postMiddleware');
const { postController } = require('../controllers');
const authToken = require('../middlewares/authMiddleware');

router.post('/', authToken, postBody, postController.createPost);

module.exports = router;