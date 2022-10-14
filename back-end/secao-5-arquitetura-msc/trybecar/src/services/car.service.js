const { carModel } = require('../models');
const { validateNewCar } = require('./validations/validationsInputValues');

const createCar = async (newCarInfo) => {
  const newCarId = await carModel.registerCar();
  const newCar = {
    id: newCarId,
    ...newCarInfo,
  };
  const error = validateNewCar(newCar);
  if (error.type) return error;
  return ({ type: null, message: newCar });
};

module.exports = {
  createCar,
};
