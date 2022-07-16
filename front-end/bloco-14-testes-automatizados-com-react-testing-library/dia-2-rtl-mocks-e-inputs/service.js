const fetch = require('node-fetch');

const randomNumber = () => Math.floor(Math.random() * 100);

const captalizeAll = (string) => string.toUpperCase();

const getFirstLetter = (string) => string[0];

const concatStrings = (s1, s2) => s1 + s2;

const getRandomDogImage = async () => {
  const url = 'https://dog.ceo/api/breeds/image/random';
  const response = await fetch(url);
  const data = await response.json();
  return data.status;
}

module.exports = { randomNumber, captalizeAll, getFirstLetter, concatStrings, getRandomDogImage };
