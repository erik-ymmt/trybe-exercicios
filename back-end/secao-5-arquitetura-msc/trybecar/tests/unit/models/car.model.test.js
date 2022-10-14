const { expect } = require('chai');
const sinon = require('sinon');
const { registerCar, findCar } = require('../../../src/models/carModel');
const connection = require('../../../src/models/connection');
const { car, carWithId } = require('./mocks/car.model.mock');

describe('Car model unit tests', function () {
  afterEach(sinon.restore);

  it('Register a car', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 1 }]);
    const carId = await registerCar(car);
    expect(carId).to.equal(1);
  });

  it('Find a car by its id', async function () {
    sinon.stub(connection, 'execute').resolves([[carWithId]]);
    const expectedCar = await findCar(2);
    expect(expectedCar).to.equal(carWithId);
  });
});
