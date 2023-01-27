const { Category } = require('../models');

const createCategory = async ({ name }) => {
  const create = await Category.create({ name });
  
  return { type: null, message: create };
};

module.exports = {
  createCategory,
};