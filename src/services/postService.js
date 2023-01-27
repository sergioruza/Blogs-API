const { BlogPost, PostCategory, User, Category } = require('../models');

const createPost = async ({ title, content, categoryIds, email }) => {
  const categories = await Category.findAll();
  const idsCategories = await categories.map((e) => e.id);
  const validateIds = categoryIds.every((e) => idsCategories.includes(e));

  if (!validateIds) {
    return {
      type: 'INVALID_VALUE',
      message: 'one or more "categoryIds" not found',
    };
  }

  const { id } = await User.findOne({ where: { email } });
  const addPost = await BlogPost.create({ title, content, id });
   await categoryIds.forEach(async (e) => {
    await PostCategory.create({ postId: addPost.id, categoryId: e });
  });

  return { type: null, message: addPost };
};

module.exports = {
  createPost,
};