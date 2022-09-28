const readline = require('readline-sync');

const height = readline.questionFloat('What is your height in centimeters? ');
const weight = readline.questionFloat('What is your weight in kilograms? ');

function calculateBmi(weight, height) {
  bmi = weight / ((height/100) ** 2);

  if (bmi < 18.5) {
    return `resultado: ${bmi}. Abaixo do peso (magreza).`
  } else if (bmi > 18.5 && bmi < 24.9) {
    return `resultado: ${bmi}. Peso normal!`
  } else if (bmi > 25.0 && bmi < 29.9) {
    return `resultado: ${bmi}. Acima do peso (sobrepeso)`
  } else if (bmi > 30 && bmi < 34.9) {
    return `resultado: ${bmi}. Obesidade grau I`
  } else {
  return `resultado: ${bmi}. Obesidade grau II, II e IV`
  }
}

console.log(calculateBmi(weight, height));
