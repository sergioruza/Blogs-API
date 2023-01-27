const { userService } = require('../services');
const { mapError } = require('../utils/errorMap');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const { type, message } = await userService.createUser({ displayName, email, password, image });
  console.log(type);
  if (type) return res.status(mapError(type)).json({ message });

  return res.status(201).json({ token: message });
};

const getAllUsers = async (_req, res) => {
  const users = await userService.getAllUsers();
  return res.status(200).json(users);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await userService.getUserById(id);

  if (type) return res.status(mapError(type)).json({ message });
  return res.status(200).json(message);
};
module.exports = {
  createUser,
  getAllUsers,
  getUserById,
};