const Joi = require('joi');

const idSchema = Joi.number().integer().min(1).required();
const pointSchema = Joi.string().min(3).required();

const waypointSchema = Joi.object({
  address: pointSchema,
  stopOrder: Joi.number().integer().min(1) });

const addRequestTravelSchema = Joi.object({
  passengerId: idSchema,
  startingAddress: pointSchema.label('startingAddress'),
  endingAddress: pointSchema.invalid(Joi.ref('startingAddress')),
  waypoints: Joi.array().items(waypointSchema) });

const addPassengerSchema = Joi.object({
  name: pointSchema,
  email: Joi.string().email().required(),
  phone: Joi.string().min(9).max(20).required() });

const addNewCar = Joi.object({
  id: idSchema,
  model: pointSchema,
  color: pointSchema,
  licensePlate: Joi.string().alphanum().length(7).required(),
});

const modelCarsSchema = Joi.object({
  color: pointSchema,
  id: idSchema,
  licensePlate: Joi.string().alphanum().length(7).required(),
  model: pointSchema,
});

const addNewDriver = Joi.object({
  id: idSchema,
  name: pointSchema,
  cars: Joi.array().items(modelCarsSchema),
});

module.exports = {
  idSchema,
  addRequestTravelSchema,
  addPassengerSchema,
  addNewCar,
  addNewDriver,
};
