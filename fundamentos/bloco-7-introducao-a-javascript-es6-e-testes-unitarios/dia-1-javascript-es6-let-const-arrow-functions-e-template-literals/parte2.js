// Crie uma função que receba um número e retorne seu fatorial.
const randomNumber = Math.floor(Math.random() * 10);
const factorial = (number) => {
  let result = number;
  for (let index = number - 1; index > 1; index -= 1) {
    result *= index;    
  }
  return result;
}
console.log(randomNumber);
console.log(factorial(randomNumber));