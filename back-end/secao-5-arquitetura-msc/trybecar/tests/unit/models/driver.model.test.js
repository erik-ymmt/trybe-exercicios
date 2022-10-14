const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const { driversMock, driverWithId, newDriverMock } = require('./mocks/driver.model.mock');
const { 
  findAllDrivers, findDriver, registerNewDriver,
} = require('../../../src/models/driversModel');

describe('Drivers model unit tests', function () {
  afterEach(sinon.restore);

  it('List all drivers', async function () {
    sinon.stub(connection, 'execute').resolves([driversMock]);
    const drivers = await findAllDrivers();
    expect(drivers).to.equal(driversMock);
  });

  it('Find a driver by id', async function () {
    sinon.stub(connection, 'execute').resolves([[driverWithId]]);
    const expectedDriver = await findDriver(2);
    expect(expectedDriver).to.equal(driverWithId);
  });

  it('Register a driver', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 1 }]);
    const newDriver = await registerNewDriver(newDriverMock);
    expect(newDriver).to.equal(1);
  });
});