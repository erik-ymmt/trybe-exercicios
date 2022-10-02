const express = require("express");
const crypto = require('crypto');
const { validateName,
  validatePrice,
  validateDescription,
  validateDateFormat,
  validateRating,
  validateDifficulty } = require('./middlewares/activityValidation');
const { userValidation,
  validadeAuth } = require('./middlewares/userValidation')

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

const users = [
  {
    "email": "erik@email.com",
    "password": "123456",
    "firstName": "Erik",
    "phone": ""
  }
];

function generateToken() {
  return crypto.randomBytes(8).toString('hex');
}

app.post("/activities",
  validadeAuth,
  validateName,
  validatePrice,
  validateDescription,
  validateDateFormat,
  validateRating,
  validateDifficulty,
  (req, res) => {
    const newActivity = req.body;
    activities.push(newActivity);

    res.status(201).json({ "message": "activity submitted with success!" });
  }
);

app.post('/signup', userValidation, (_req, res) => {
  const token = generateToken();
  res.status(200).json({token})
})

module.exports = app;
