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

  await User.create({ displayName, email, password, image });
  const payload = { email };
  return { type: null, message: tokenGenerate(payload) };
};

const getAllUsers = async () => {
  const allUsers = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  return allUsers;
};

module.exports = {
  createUser,
  getAllUsers,
};