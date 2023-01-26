const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const authLogin = (req, res) => {
  const payload = {
    email: req.body.email,
  };

  const token = jwt.sign(payload, JWT_SECRET);

  res.status(200).json({ token });
};

module.exports = {
  authLogin,
};