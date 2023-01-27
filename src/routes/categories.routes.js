const express = require('express');

const router = express.Router();

const { createNameSchema } = require('../middlewares/categoriesMiddleware');
const authToken = require('../middlewares/authMiddleware');
const { categoriesController } = require('../controllers');

router.post('/', authToken, createNameSchema, categoriesController.createCategory);

router.get('/', authToken, categoriesController.getAllCategories);

module.exports = router;