const express = require("express");

const app = express();

app.use(express.json());

const activities = [
  {
    "name": "Trekking",
    "price": 0,
    "description": {
      "rating": 5,
      "difficulty": "Fácil",
      "createdAt": "10/08/2022"
    }
  }
];

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

app.post("/activities",
  validateName,
  validatePrice,
  validateDescription,
  validateDateFormat,
  (req, res) => {
    const newActivity = req.body;
    activities.push(newActivity);

    res.status(201).json({ "message": "activity submitted with success!" });
  }
);

module.exports = app;
