const snakeize = require('snakeize');
const connection = require('./connection');

const registerCar = async (newCar) => {
  const keys = Object.keys(snakeize(newCar))
  .map((key) => `${key}`)
  .join(', ');
  // console.log('keys', keys);

  const placeholder = Object.keys(newCar).map((_key) => '?');
  const queryPlaceholder = placeholder.join(', ');
  // console.log('queryPlaceholder', queryPlaceholder);
  // console.log(Object.values(newCar));

  const [{ insertId }] = await connection.execute(
    `INSERT INTO cars (${keys}) VALUES (${queryPlaceholder})`,
    Object.values(newCar),
  );

  // console.log('insertId: ', insertId);
  return insertId;
};

const findCar = async (id) => {
  const [[car]] = await connection.execute(
    'SELECT * FROM cars WHERE id = ?',
    [id],
  );
  // console.log(car);
  return car;
};

module.exports = {
  registerCar,
  findCar,
};