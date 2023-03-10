const { Op } = require('sequelize');
const { BlogPost, PostCategory, User, Category } = require('../models');

const createPost = async ({ title, content, categoryIds, email }) => {
  const categories = await Category.findAll();
  const idsCategories = await categories.map((e) => e.id);
  const validateIds = await categoryIds.every((e) => idsCategories.includes(e));

  if (!validateIds) {
    return {
      type: 'INVALID_VALUE',
      message: 'one or more "categoryIds" not found',
    };
  }

  const user = await User.findOne({ where: { email } });
  const addPost = await BlogPost.create({
    title, content, userId: user.dataValues.id, published: Date.now(), updated: Date.now(),
  });

   await categoryIds.forEach((e) => {
     PostCategory.create({ postId: addPost.id, categoryId: e });
  });

  return { type: null, message: addPost };
};

const getAllPosts = async () => {
  const users = await BlogPost.findAll({ 
    include: [
      {
        model: User,
        as: 'user',
        association: 'user',
        attributes: { exclude: ['password'] },
        
      },
      {
        model: Category,
        as: 'categories',
        association: 'categories',
        through: { attributes: [] },
        exclude: 'PostCategory',
        
      },
    ],
  });
  
  return users;
};

const getIdPost = async ({ id }) => {
  const user = await BlogPost.findByPk(id, {
    include: [{
        model: User,
        as: 'user',
        association: 'user',
        attributes: { exclude: ['password'] },
        
      },
      {
        model: Category,
        as: 'categories',
        association: 'categories',
        through: { attributes: [] },
        exclude: 'PostCategory',
        
      }],
  });
  
  if (!user) return { type: 'DOES_NOT_EXIST', message: user };
  return { type: null, message: user };
};

const postUpdateId = async ({ title, content, id, idUser }) => {
  const { dataValues } = await BlogPost.findOne({ where: { id } });
  if (dataValues.userId == Number(idUser)) {
    await BlogPost.update({ title, content }, { where: { id } });
  const result = await BlogPost.findByPk(id, {
    include: [{
        model: User,
        as: 'user',
        association: 'user',
        attributes: { exclude: ['password'] },
        
      },
      {
        model: Category,
        as: 'categories',
        association: 'categories',
        through: { attributes: [] },
        exclude: 'PostCategory',
        
      }],
  });
  return { type: null, message: result };
  }

  return { type: 'UNAUTHORIZED', message: 'Unauthorized user' };
};

module.exports = {
  createPost,
  getAllPosts,
  getIdPost,
  postUpdateId,
};