function userValidation(req, res, next) {
  const requiredFields = ["email", "password", "firstName", "phone"];
  const validation = requiredFields.every((field) => field in req.body);
  if (validation) {
    return next();
  }
  res.status(401).json({"message": "email, password, name and phone are required"})
}

function validadeAuth(req, res,next) {
  const { authorization } = req.headers;
  console.log(authorization);
  console.log(authorization.length);
  if (authorization && authorization.length === 18) {
    return next();
  }
  res.status(401).json({"message": "invalid token"})
}

module.exports = { userValidation, validadeAuth};
