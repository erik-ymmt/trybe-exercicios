const randomNumber = () => Math.floor(Math.random() * 100);

const captalizeAll = (string) => string.toUpperCase();

const getFirstLetter = (string) => string[0];

const concatStrings = (s1, s2) => s1 + s2;

module.exports = { randomNumber, captalizeAll, getFirstLetter, concatStrings };
