const { User } = require('../models');

const valid = (body) => {
  console.log(body);
  if (!body.email || !body.password) {
    return true;
  }
};
const validBody = (req, res, next) => {
  const { email, password } = req.body;

  if (valid(req.body)) {
    return res.status(400)
      .json({ message: 'Some required fields are missing' }); 
  }

  const find = User.findOne({
    where: { email },
  });

  if (find.email !== email || find.password !== password) {
    return res.status(400)
      .json({ message: 'Invalid fields' });
  }

  next();
};

module.exports = {
  validBody,
};