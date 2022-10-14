const { passengerModel, waypointModel, travelModel } = require('../models');
const {
  validateRequestTravelSchema, validateNewPassenger, validateId,
} = require('./validations/validationsInputValues');

const doesPassengerExist = async (passengerId) => {
  const passenger = await passengerModel.findById(passengerId);
  if (passenger) return true;
  return false;
};

const saveWaypoints = (waypoints, travelId) => {
  if (waypoints && waypoints.length > 0) {
    return waypoints.map(async (value) => {
      await waypointModel.insert({
        address: value.address,
        stopOrder: value.stopOrder,
        travelId,
      });
    });
  }

  return [];
};

const requestTravel = async (passengerId, startingAddress, endingAddress, waypoints) => {
  const validationResult = validateRequestTravelSchema(
    passengerId,
    startingAddress,
    endingAddress,
    waypoints,
  );

  if (validationResult.type) return validationResult;
  
  if (await doesPassengerExist(passengerId)) {
    const travelId = await travelModel.insert({
      passengerId,
      startingAddress,
      endingAddress,
    });

    await Promise.all(saveWaypoints(waypoints, travelId));
    const travel = await travelModel.findById(travelId);
    return { type: null, message: travel };
  }
};

const findAll = async () => {
  const passengers = await passengerModel.findAll();
  return { type: null, message: passengers };
};

const findById = async (passengerId) => {
  const error = validateId(passengerId);
  if (error.type) return error;

  const passenger = await passengerModel.findById(passengerId);
  if (passenger) return { type: null, message: passenger };
  return { type: 'PASSENGER_NOT_FOUND', message: 'Passenger not found' };
};

const createPassenger = async (name, email, phone) => {
  const error = validateNewPassenger(name, email, phone);
  if (error.type) return error;

  const newPassengerId = await passengerModel.insert({ name, email, phone });
  const newPassenger = await passengerModel.findById(newPassengerId);

  return { type: null, message: newPassenger };
};

module.exports = {
  requestTravel,
  findAll,
  findById,
  createPassenger,
};
