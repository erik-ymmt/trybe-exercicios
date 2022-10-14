const connection = require('./connection');

async function findAllDrivers() {
  const [allDrivers] = await connection.execute(
    'SELECT * FROM drivers',
);
  return allDrivers;
}

const findDriver = async (id) => {
  const [[driver]] = await connection.execute(
    'SELECT * FROM drivers WHERE id = ?',
    [id],
  );
  return driver;
};

const registerNewDriver = async (newDriver) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO drivers (name) VALUES (?)',
    [newDriver.name],
  );

  newDriver.carIds.forEach((carId) => {
    connection.execute(
      'INSERT INTO drivers_cars (driver_id, car_id) VALUES (?, ?)',
      [insertId, carId],
    );
  });

  return insertId;
};

module.exports = {
  findAllDrivers,
  findDriver,
  registerNewDriver,
};