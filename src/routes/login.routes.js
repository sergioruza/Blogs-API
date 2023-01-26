const express = require('express');

const router = express.Router();

const { validBody } = require('../middlewares/loginMiddleware');
const { login } = require('../controllers');

router.post('/', validBody, login.authLogin);

module.exports = router;