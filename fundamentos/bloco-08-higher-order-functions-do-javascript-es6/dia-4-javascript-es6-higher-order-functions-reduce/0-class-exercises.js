// const numbers = [32, 15, 3, 2, -5, 56, 10];
const numbers = [-32, -15, -3, -2, -5, -56, -10];

// maior número usando o for
// let higherValue = numbers[0];
// for (number of numbers) {
//   if (number > higherValue) higherValue = number;
// }
// console.log(higherValue);

// maior número usando o reduce
const getHigherNumber = (higherNumber, num) => num > higherNumber ? num : higherNumber;
const higher = numbers.reduce(getHigherNumber);

console.log(higher);