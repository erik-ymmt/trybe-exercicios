const { expect } = require('chai');
const sinon = require('sinon');
const { carModel } = require('../../../src/models');
const { createCar } = require('../../../src/services/car.service');
const { newCarMock, newCarInfoMock } = require('./mocks/car.service.mock');

describe('Cart service tests', function () {
  it('Create a new car', async function () {
    sinon.stub(carModel, 'registerCar').resolves(1);
    const newCar = await createCar(newCarInfoMock);
    expect(newCar).to.deep.equal(newCarMock);
  });
});
