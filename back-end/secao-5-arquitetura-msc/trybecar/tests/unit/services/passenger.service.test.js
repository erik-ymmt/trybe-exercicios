const { expect } = require('chai');
const sinon = require('sinon');
const {
  findAll, findById, requestTravel, createPassenger,
} = require('../../../src/services/passenger.service');
const travelModel = require('../../../src/models/travel.model');
const waypointModel = require('../../../src/models/waypoint.model');
const passengerModel = require('../../../src/models/passenger.model');

const {
  travelResponse, allPassengers, invalidValue,
  validName, validEmail, validPhone,
} = require('./mocks/passenger.service.mock');

describe('Verificando service pessoa passageira', function () {
  describe('listagem de pessoas passageiras', function () {
    it('retorna a lista completa de pessoas passageiras', async function () {
      sinon.stub(passengerModel, 'findAll').resolves(allPassengers);
      
      const result = await findAll();

      expect(result.message).to.deep.equal(allPassengers);
    });
  });
  
  describe('busca de uma pessoa passageira', function () {
    it('retorna um erro caso receba um ID inválido', async function () {
      const result = await findById(invalidValue);
      
      expect(result.type).to.equal('INVALID_VALUE');
      expect(result.message).to.equal('"id" must be a number');
    });

    it('retorna um erro caso a pessoa passageira não existe', async function () {
      sinon.stub(passengerModel, 'findById').resolves(undefined);
     
      const result = await findById(1);
      
      expect(result.type).to.equal('PASSENGER_NOT_FOUND');
      expect(result.message).to.equal('Passenger not found');
    });
    
    it('retorna a pessoa passageira caso ID existente', async function () {
      sinon.stub(passengerModel, 'findById').resolves(allPassengers[0]);
      
      const result = await findById(1);

      expect(result.type).to.equal(null);
      expect(result.message).to.deep.equal(allPassengers[0]);
    });
  });

  describe('cadastro de uma pessoa passageira com valores inválidos', function () {
    it('retorna um erro ao passar um nome inválido', async function () {
      const result = await createPassenger(invalidValue, validEmail, validPhone);

      expect(result.type).to.equal('INVALID_VALUE');
      expect(result.message).to.equal('"name" length must be at least 3 characters long');
    });

    it('retorna um erro ao passar um email inválido', async function () {
      const result = await createPassenger(validName, invalidValue, validPhone);

      expect(result.type).to.equal('INVALID_VALUE');
      expect(result.message).to.equal('"email" must be a valid email');
    });

    it('retorna um erro ao passar um telefone inválido', async function () {
      const result = await createPassenger(validName, validEmail, invalidValue);

      expect(result.type).to.equal('INVALID_VALUE');
      expect(result.message).to.equal('"phone" length must be at least 9 characters long');
    });
  });

  describe('cadastro de uma pessoa passageira com valores válidos', function () {
    it('retorna o ID da pessoa passageira cadastrada', async function () {
      sinon.stub(passengerModel, 'insert').resolves([{ insertId: 1 }]);
      sinon.stub(passengerModel, 'findById').resolves(allPassengers[0]);
      
      const result = await createPassenger(validName, validEmail, validPhone);

      expect(result.type).to.equal(null);
      expect(result.message).to.deep.equal(allPassengers[0]);
    });
  });

  describe('solicitação de viagem', function () {
    it('sem pontos de parada é realizada com sucesso', async function () {
      // arrange
       sinon.stub(passengerModel, 'findById').resolves(true); // retorna verdadeiro sinalizando que o passageiro existe
       sinon.stub(travelModel, 'insert').resolves(1); // retorna travel com ID 1
       sinon.stub(travelModel, 'findById').resolves(travelResponse);
      const WAITING_DRIVER = 1;
      const passenger = {
        id: 1,
        startingAddress: 'Rua X',
        endingAddress: 'Rua Y',
      };
      // act
      const travel = await requestTravel(
        passenger.id,
        passenger.startingAddress,
        passenger.endingAddress,
      );
      // assert
      expect(travel.message).to.deep.equal({
        id: 1,
        passengerId: 1,
        driverId: null,
        travelStatusId: WAITING_DRIVER,
        startingAddress: 'Rua X',
        endingAddress: 'Rua Y',
        requestDate: '2022-08-24T03:04:04.374Z',
      });
    });

    it('com pontos de parada é realizada com sucesso', async function () {
      // arrange
      sinon.stub(passengerModel, 'findById').resolves(true); // retorna verdadeiro sinalizando que o passageiro existe
       sinon.stub(travelModel, 'insert').resolves(1); // retorna travel com ID 1
       sinon.stub(travelModel, 'findById').resolves(travelResponse);
       sinon.stub(waypointModel, 'insert').resolves(1); // retorna waypoint com ID 1

      const WAITING_DRIVER = 1;
      const passenger = {
        id: 1,
        startingAddress: 'Rua X',
        endingAddress: 'Rua Y',
      };

      // act
      const travel = await requestTravel(
        passenger.id,
        passenger.startingAddress,
        passenger.endingAddress,
        passenger.waypoints,
      );

      // assert
      expect(travel.message).to.deep.equal({
        id: 1,
        passengerId: 1,
        driverId: null,
        travelStatusId: WAITING_DRIVER,
        startingAddress: 'Rua X',
        endingAddress: 'Rua Y',
        requestDate: '2022-08-24T03:04:04.374Z',
      });
    });

    it('com mesmo local de origem e destino é rejeitada', async function () {
      // arrange
      const passenger = {
        id: 1,
        startingAddress: 'Rua X',
        endingAddress: 'Rua X',
      };

      // act
      const error = await requestTravel(
        passenger.id,
        passenger.startingAddress,
        passenger.endingAddress,
      );

      // assert
      expect(error.type).to.equal('INVALID_VALUE');
      expect(error.message).to.equal('"endingAddress" contains an invalid value');
    });
  });
   afterEach(function () {
     sinon.restore();
   });
 });
