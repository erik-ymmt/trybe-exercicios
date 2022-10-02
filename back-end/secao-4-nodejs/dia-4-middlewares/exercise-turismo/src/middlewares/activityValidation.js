// function validateActivity(req, res, next) {
//   const newActivity = req.body;
//   const requiredFields = ["name","price", "description"];
//   const description = newActivity.description;
//   const descriptionRequired = ["rating", "difficulty", "createdAt"];

//   if(
//     requiredFields.every((field) => field in newActivity)
//     && descriptionRequired.every((field) => field in description)
//   ) {
//     next();
//   } else {
//     res.status(401).json({"message": "invalid format"});
//   }
// }

function validateName(req, res, next) {
  const activityName = req.body.name;
  if (!activityName) {
    return res.status(400).json({"message": "invalid format, missing name"});
  }
  if (activityName.length < 4) {
    return res.status(400).json({"message": "invalid format, name must have more than 4 letters"});
  }
  next();
}

function validatePrice (req, res, next) {
  const activityPrice = req.body.price;
  if (!activityPrice) {
    return res.status(400).json({"message": "invalid format, missing price"});
  }
  if (activityPrice < 0) {
    return res.status(400).json({"message": "invalid format, price must be a number, zero or greater"});
  }
  next();
}

function validateDescription (req, res, next) {
  const {description} = req.body;

  if (!description) {
    return res.status(400).json({"message": "invalid format, missing description"});
  }

  const {rating} = req.body.description;
  const {difficulty} = req.body.description;
  const {createdAt} = req.body.description;
  if (!rating) {
    return res.status(400).json({"message": "invalid format, missing rating"});
  }
  if (!difficulty) {
    return res.status(400).json({"message": "invalid format, missing difficulty"});
  }
  if (!createdAt) {
    return res.status(400).json({"message": "invalid format, missing createdAt"});
  }
  next();
}

function validateDateFormat(req, res, next) {
  const {createdAt} = req.body.description;
  const dataRegex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;

  if (dataRegex.test(createdAt)) {
    return next();
  }
  res.status(400).json({"message": "invalid format, createdAt needs to be dd/mm/yyyy"});
}

function validateRating(req, res, next) {
  const rating = Number(req.body.description.rating);

  if (Number.isInteger(rating) && rating >= 1 && rating <= 5) {
    return next();
  }
  res.status(400).json({"message": "invalid format, rating must be an integer between 1 and 5"});
}

function validateDifficulty(req, res, next) {
  const {difficulty} = req.body.description;
  const validDifs = ["Fácil", "Médio", "Difícil"]

  if (validDifs.includes(difficulty)) {
    return next();
  }
  res.status(400).json({"message": "invalid format, difficulty must to be Fácil, Médio ou Difícil"});
}

module.exports = {
  validateName,
  validatePrice,
  validateDescription,
  validateDateFormat,
  validateRating,
  validateDifficulty,
}