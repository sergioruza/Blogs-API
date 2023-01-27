const express = require('express');

const router = express.Router();

const { bodyValidate } = require('../middlewares/userMiddleware');
const { userController } = require('../controllers');
const authToken = require('../middlewares/authMiddleware');

router.post('/', bodyValidate, userController.createUser);

router.get('/', authToken, userController.getAllUsers);

router.get('/:id', authToken, userController.getUserById);
module.exports = router;