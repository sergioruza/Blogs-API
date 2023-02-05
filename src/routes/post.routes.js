const express = require('express');

const router = express.Router();

const { addpostMiddlware, updateMiddlware } = require('../middlewares/postMiddleware');
const { postController } = require('../controllers');
const authToken = require('../middlewares/authMiddleware');

router.post('/', authToken, addpostMiddlware, postController.createPost);

router.get('/', authToken, postController.getAllPosts);

router.get('/:id', authToken, postController.getIdPost);

router.put('/:id', authToken, updateMiddlware, postController.postUpdateId);

module.exports = router;