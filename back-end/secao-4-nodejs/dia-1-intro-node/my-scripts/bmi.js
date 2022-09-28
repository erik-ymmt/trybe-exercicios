const readline = require('readline-sync');

const height = readline.questionInt('What is your height in centimeters? ');
const weight = readline.questionInt('What is your weight in kilograms? ');

function calculateBmi(weight, height) {
  bmi = weight / ((height/100) ** 2);
  return `${bmi}`;
}

console.log(calculateBmi(weight, height));
