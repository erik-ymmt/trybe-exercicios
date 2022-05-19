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

// Faça uma função que some todos os números pares do array:
const numbers2 = [18, 19, 23, 53, 4, 5, 76, 23, 54];
const evenFromNumbers2 = numbers2.filter((number) => number % 2 === 0);
const sumEven = evenFromNumbers2.reduce((result, num) => result += num);
console.log(sumEven);

// Agora crie uma função usando os dados dos estudantes que usamos no conteúdo do dia anterior, para mostrar na tela um relatório que diz em qual matéria o estudante foi melhor. 

const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: 59 },
      { name: 'Português', nota: 80 },
      { name: 'Química', nota: 78 },
      { name: 'Biologia', nota: 92 },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 76 },
      { name: 'Português', nota: 90 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 80 },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 91 },
      { name: 'Português', nota: 85 },
      { name: 'Química', nota: 92 },
      { name: 'Biologia', nota: 90 },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 70 },
      { name: 'Português', nota: 70 },
      { name: 'Química', nota: 60 },
      { name: 'Biologia', nota: 50 },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 80 },
      { name: 'Português', nota: 82 },
      { name: 'Química', nota: 79 },
      { name: 'Biologia', nota: 75 },
    ],
  },
];

const bestSubject = (student) => student.materias.reduce((bestSub, subject) => subject.nota > bestSub.nota ? subject : bestSub);

const studentsAndBestSubjects = estudantes.map((student) => {
  return {
    name: student.nome,
    materia: bestSubject(student).name
  }
});

console.log(studentsAndBestSubjects);
