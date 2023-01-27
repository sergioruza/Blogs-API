const { categoriesService } = require('../services');

const createCategory = async (req, res) => {
  const { name } = req.body;

  const { message } = await categoriesService.createCategory({ name });
  
  return res.status(201).json(message);
};

module.exports = {
  createCategory,
};