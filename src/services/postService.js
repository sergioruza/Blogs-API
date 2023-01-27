const { BlogPost, User } = require('../models');
const { getAllCategories } = require('./categoriesService');

const createPost = async ({ title, content, categoryIds, email }) => {
  const ids = await getAllCategories().then((e) => e.map(({ id }) => id));
  const validateIds = categoryIds.every((e) => ids.includes(e));

  if (!validateIds) {
    return {
      type: 'INVALID_VALUE',
      message: 'one or more "categoryIds" not found',
    };
  }
    
  const { id } = await User.findOne({ where: { email } });
  const addPost = await BlogPost.create({ title, content, categoryIds, userId: id });
};