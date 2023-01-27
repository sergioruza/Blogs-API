const { loginService } = require('../services');

const authLogin = async (req, res) => {
  const { email, password } = req.body;
 
  const { type, message } = await loginService.authLogin({ email, password });

  if (type) {
 return res.status(400)
  .json({ message }); 
}

  res.status(200).json({ token: message });
};

module.exports = {
  authLogin,
};