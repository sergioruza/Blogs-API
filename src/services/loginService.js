const { User } = require('../models');
const tokenGenerate = require('../token/generateToken');

const authLogin = async ({ email }) => {
  const find = await User.findOne({
    where: { email },
  });

  if (!find) return { type: 'INVALID_FIELDS', message: 'Invalid fields' };

  const payload = {
    email,
  };
  return { type: null, message: tokenGenerate(payload) };
};

module.exports = {
  authLogin,
};