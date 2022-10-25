const Joi = require('joi');

const validateBody = (req, res, next) => {
  const user = req.body;

  const schema = Joi.object({
    username: Joi.string().min(5).required(),
    password: Joi.string().min(5).required(),
  });

  const { error } = schema.validate(user);

  if (error) return res.status(400).json({ message: error.details[0].message });

  next();
};

module.exports = validateBody;
