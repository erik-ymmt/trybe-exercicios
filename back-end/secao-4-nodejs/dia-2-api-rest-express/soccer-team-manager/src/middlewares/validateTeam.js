const validateTeam = (req, res, next) => {
  const requiredProperties = ['name', 'initials'];
  if (requiredProperties.every((property) => property in req.body)) {
    next();
  } else {
    res.sendStatus(404).send({ message: 'o time precisa ter todos os atributos' });
  }
};

module.exports = validateTeam;