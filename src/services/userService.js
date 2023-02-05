const { createUserValid } = require('./validations/validationsInput');
const { User } = require('../models');
const tokenGenerate = require('../token/generateToken');

const createUser = async ({ displayName, email, password, image }) => {
  const error = createUserValid({ displayName, email, password });
  if (error.type) return error;

  const user = await User.findOne({
    where: { email },
  });
  
  if (user) return { type: 'EXISTING_USER', message: 'User already registered' };

  const { dataValues } = await User.create({ displayName, email, password, image }, {
    attributes: { exclude: ['password'] },
  });

  const payload = {
    id: dataValues.id,
    displayName: dataValues.displayName,
    email: dataValues.email,
  };
  return { type: null, message: tokenGenerate(payload) };
};

const getAllUsers = async () => {
  const allUsers = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  return allUsers;
};

const getUserById = async (id) => {
  const userId = await User.findOne({
    where: { id },
    attributes: { exclude: ['password'] },
  });
  if (!userId) return { type: 'DOES_NOT_EXIST', message: 'User does not exist' };
  
  console.log(userId);
  return { type: null, message: userId };
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
};