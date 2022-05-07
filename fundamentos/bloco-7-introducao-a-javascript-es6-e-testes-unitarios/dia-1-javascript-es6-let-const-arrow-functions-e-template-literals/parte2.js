// Crie uma função que receba um número e retorne seu fatorial.
const randomNumber = Math.floor(Math.random() * 10);
const factorial = (number) => {
  if (number === 0) {
    return 1;
  }
  let result = number;
  for (let index = number - 1; index > 1; index -= 1) {
    result *= index;    
  }
  return result;
}
console.log(randomNumber);
console.log(factorial(randomNumber));

// Crie uma função que receba uma frase e retorne qual a maior palavra.
const exemple = 'Antônio foi no banheiro e não sabemos o que aconteceu, paralelepipedo!'
const longestWordInPhrase = (phrase) => {
  const splitPhrase = phrase.split(' ');
  let longestWord = splitPhrase[0];
  for (index in splitPhrase) {
    if (splitPhrase[index].length > splitPhrase[0].length) {
      longestWord = splitPhrase[index]
    }
  }
  return longestWord;
}

console.log(longestWordInPhrase(exemple));