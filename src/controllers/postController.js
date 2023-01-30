const { postService } = require('../services');
const { mapError } = require('../utils/errorMap');

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { email } = req.user;
  const { type, message } = await postService.createPost({
    title, content, categoryIds, email,
  });
  if (type) return res.status(mapError(type)).json({ message });
  
  console.log(message);
  return res.status(201).json(message);
};

const getAllPosts = async (req, res) => {
  const allUsers = await postService.getAllPosts();

  return res.status(200).json(allUsers);
};

module.exports = {
  createPost,
  getAllPosts,
};