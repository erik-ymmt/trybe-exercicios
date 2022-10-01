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

function validateActivity(req, res, next) {
  const newActivity = req.body;
  const requiredFields = ["name","price", "description"];
  const description = newActivity.description;
  const descriptionRequired = ["rating", "difficulty", "createdAt"];

  if(
    requiredFields.every((field) => field in newActivity)
    && descriptionRequired.every((field) => field in description)
  ) {
    next();
  } else {
    res.status(401).json({"message": "invalid format"});
  }
}

app.post("/activities", validateActivity, (req, res) => {
  const newActivity = req.body;
  activities.push(newActivity);

  res.status(201).json({ "message": "activity submitted with success!" });
});

module.exports = app;
