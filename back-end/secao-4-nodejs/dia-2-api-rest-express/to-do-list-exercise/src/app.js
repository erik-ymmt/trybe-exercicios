const express = require('express');
const activities = require('./data/activities');

const app = express();

app.get('/', (_req, res) => res.status(200).send(activities));

app.get('/myActivities/:id', (req, res) => {
  const activityId = req.params.id;

  const selectedActivity = activities.find((activity) => activity.id === Number(activityId));

  res.status(200).send(selectedActivity);
});


module.exports = app;
