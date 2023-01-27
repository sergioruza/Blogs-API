const { createUserSchema } = require('./schema');

const createUserValid = ({ displayName, email, password }) => {
  const { error } = createUserSchema.validate({ displayName, email, password });
  if (error) return { type: 'INVALID_VALUE', message: error.message };
  return { type: null, message: '' };
};

module.exports = {
  createUserValid,
};