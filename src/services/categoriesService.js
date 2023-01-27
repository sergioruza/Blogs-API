const { Category } = require('../models');

const createCategory = async ({ name }) => {
  const create = await Category.create({ name });
  
  return { type: null, message: create };
};

const getAllCategories = async () => {
  const categories = await Category.findAll();

  return { type: null, message: categories };
};

module.exports = {
  createCategory,
  getAllCategories,
};