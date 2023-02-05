const errorMap = {
  EXISTING_USER: 409,
  INVALID_VALUE: 400,
  DOES_NOT_EXIST: 404,
  UNAUTHORIZED: 401,
};

const mapError = (type) => errorMap[type] || 500;

module.exports = {
  errorMap,
  mapError,
};