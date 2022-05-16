// Para fixar .forEach
// 1 - Use o método forEach chamando a callback showEmailList para apresentar os emails

const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

emailListInData.forEach(showEmailList);

// Para fixar .find
// 1 - Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5, caso ele exista:

const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = numbers.find((num) => num % 3 === 0 && num % 5 === 0 ? true : false);

console.log(findDivisibleBy3And5);

// 2 - Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (array) => {
  return array.find((element) => element.length === 5);
}

console.log(findNameWithFiveLetters(names));

// 3 - Utilize o find para encontrar a música com id igual a 31031685, caso ela exista:
const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(serchedId, array) {
  const musicInfo = array.find((element) => element.id === serchedId);
  return musicInfo.title;
}

console.log(findMusic('31031685', musicas));