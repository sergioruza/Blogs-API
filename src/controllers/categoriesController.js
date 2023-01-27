const { categoriesService } = require('../services');

const createCategory = async (req, res) => {
  const { name } = req.body;

  const { message } = await categoriesService.createCategory({ name });
  
  return res.status(201).json(message);
};

const getAllCategories = async (req, res) => {
  const { message } = await categoriesService.getAllCategories();
  res.status(200).json(message);
};
module.exports = {
  createCategory,
  getAllCategories,
};