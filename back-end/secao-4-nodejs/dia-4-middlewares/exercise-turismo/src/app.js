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
//   const descriptionRequired = ["rating", "difficulty", "createdAt"];

//   if() {
//     return res.status(401).json({"message": "invalid format"})
//   }
//   next();
// }

app.post("/activities", validateActivity, (req, res) => {
  const newActivity = req.body;
  activities.push(newActivity);

  res.status(201).json({ "message": "activity submitted with success!" });
});

module.exports = app;
