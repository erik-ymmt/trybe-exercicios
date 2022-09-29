const express = require('express');
const activities = require('./data/activities');

const app = express();

app.get('/myActivities', (_req, res) => res.status(200).json(activities));

app.get('/myActivities/:id', (req, res) => {
  const activityId = req.params.id;
  const selectedActivity = activities.find((activity) => activity.id === Number(activityId));
  res.status(200).json(selectedActivity);
});

app.get('/filter/myActivities', (req, res) => {
  const activityStatus = req.query.status;
  const filteredActivities = activities.filter((activity) => activity.status === activityStatus);
  res.status(200).json(filteredActivities);
});

app.get('/search/myActivities', (req, res) => {
  const activitySearch = req.query.q;
  const filteredActivities = activities.filter((activity) => ( 
    activity.description.includes(activitySearch)
  ));
  res.status(200).json(filteredActivities);
});

module.exports = app;
