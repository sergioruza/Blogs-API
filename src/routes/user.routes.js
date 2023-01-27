const express = require('express');

const router = express.Router();

const { bodyValidate } = require('../middlewares/userMiddleware');
const { userController } = require('../controllers');

router.post('/', bodyValidate, userController.createUser);

module.exports = router;