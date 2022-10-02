const express = require("express");
const { validateName,
  validatePrice,
  validateDescription,
  validateDateFormat,
  validateRating,
  validateDifficulty } = require('./middlewares/activityValidation');

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

app.post("/activities",
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

module.exports = app;
