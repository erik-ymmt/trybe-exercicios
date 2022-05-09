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

// Função 1: Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string.

let stringExemple = 'Tryber x aqui!';

const changeX = (username) => {
 
  for (letter of stringExemple) {
    if (letter === 'x') {
      const splited = stringExemple.split(' x ');
      let result = '';
      for (let index = 0; index < splited.length - 1; index += 1) {
        result += `${splited[index]} ${username} `
      }
      result += splited[splited.length - 1]
      return result;
    }
  }
}

// Um array com escopo global, que é o escopo do arquivo JS, nesse caso, contendo cinco strings com suas principais skills.
const skills = ['html', 'css', 'js', 'dom', 'outra'];
const sortedSkills = skills.sort();

const paragraph = `${changeX('Erik')}
Minhas cinco principais habilidades são:
  •${sortedSkills[0]}
  •${sortedSkills[1]}
  •${sortedSkills[2]}
  •${sortedSkills[3]}
  •${sortedSkills[4]}
#goTrybe`;

console.log(paragraph);