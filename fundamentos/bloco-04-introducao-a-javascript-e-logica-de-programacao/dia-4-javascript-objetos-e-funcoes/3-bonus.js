// 1 - (Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.
function conversorRomano(stringRomanos) {
  const romanos = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }

let resultado = 0;

for (let i = 0; i < stringRomanos.length; i += 1) {
  if (romanos[stringRomanos[i]] < romanos[stringRomanos[i + 1]]) {
    resultado -= parseInt(romanos[stringRomanos[i]])
  } else {
    resultado += parseInt(romanos[stringRomanos[i]])
  }
}
console.log(romanos[stringRomanos[2]]);
console.log(resultado);
}

// testes:
conversorRomano('IX');
conversorRomano('XI');
conversorRomano('CM');
conversorRomano('XC');
conversorRomano('M');


// 2 - Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro. Através de um loop for , percorra essa variável, busque os números pares e os adicione a um novo array que deverá ser retornado ao final pela pela função.

function arrayOfNumbers(vector) {
    let numerosPares = [];
    for (let i = 0; i < vector.length; i += 1) {
        for (let j = 0; j < vector[i].length; j += 1) {
            if (vector[i][j] % 2 === 0) {
                numerosPares.push(vector[i][j]);
            }
        }
    }
    return numerosPares;
}

let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];
console.log(arrayOfNumbers(vector));

// 3 - A partir do array de frutas basket , retorne um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece no array como valor. Por exemplo, o array ['Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva'], deverá retornar { Melancia: 3, Abacate: 1, Uva: 1 } quando passado como argumento para a função.
// Em seguida, imprima esse resultado na tela com uma mensagem no seguinte formato: Sua cesta possui: x Melancias, x Abacates...

const basket = [
    'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
    'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
    'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
    'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
    'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
    'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
    'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
    'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
    'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
    'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
    'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
    'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
    'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
    'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
    'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
    'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
    'Banana', 'Pera', 'Abacate', 'Uva',
  ];

let basketList = {};

for (let i = 0; i < basket.length; i += 1) {
    if (basketList[basket[i]] != undefined) {
        basketList[basket[i]] += 1;
    } else {
        basketList[basket[i]] = 1;
    }   
}

  let result = 'Sua cesta possui: ';
  
    for (fruits in basketList) {
      if (basketList[fruits] > 1) {
        result += `${basketList[fruits]} ${fruits}s, ` 
      } else {
        result += `${basketList[fruits]} ${fruits}, `
      }
    }
    result += 'fim da lista.'
    console.log(result);


// 4 - Acesse as chaves nome , sobrenome , andar e apartamento do último morador do blocoDois e faça um console.log no seguinte formato: "O morador do bloco 2 de nome Zoey Brooks mora no 1° andar, apartamento 101".

let moradores = {
    blocoUm: [
      {
        nome: 'Luiza',
        sobrenome: 'Guimarães',
        andar: 10,
        apartamento: 1005,
      },
      {
        nome: 'William',
        sobrenome: 'Albuquerque',
        andar: 5,
        apartamento: 502,
      },
    ],
    blocoDois: [
      {
        nome: 'Murilo',
        sobrenome: 'Ferraz',
        andar: 8,
        apartamento: 804,
      },
      {
        nome: 'Zoey',
        sobrenome: 'Brooks',
        andar: 1,
        apartamento: 101,
      },
    ],
  };

  let name1  = moradores['blocoDois'][1]['nome'];
  let lastName = moradores['blocoDois'][1]['sobrenome'];
  let floor = moradores['blocoDois'][1]['andar'];
  let apt = moradores['blocoDois'][1]['apartamento'];
  console.log(`O(A) morador(a) do Bloco 2 de nome ${name1} ${lastName} mora no ${floor}° andar, apartamento ${apt}.`);

// 5 - Utilize o for para imprimir o nome completo de todos os moradores do bloco 1, acessando suas chaves nome e sobrenome , depois faça o mesmo para os moradores do bloco 2.

let moradores1 = "Moradores Bloco 1: "

for (let i = 0; i < moradores['blocoUm'].length; i += 1) {
  if (i == (moradores['blocoUm'].length - 1)) {
    moradores1 += moradores['blocoUm'][i]['nome'] + ' ' + moradores['blocoUm'][i]['sobrenome'] + '.';
  } else {
    moradores1 += moradores['blocoUm'][i]['nome'] + ' ' + moradores['blocoUm'][i]['sobrenome'] + ', ';
  }
}
console.log(moradores1);

let moradores2 = "Moradores Bloco 2: "

for (let i = 0; i < moradores['blocoDois'].length; i += 1) {
  if (i == (moradores['blocoDois'].length - 1)) {
    moradores2 += moradores['blocoDois'][i]['nome'] + ' ' + moradores['blocoDois'][i]['sobrenome'] + '.';
  } else {
    moradores2 += moradores['blocoDois'][i]['nome'] + ' ' + moradores['blocoDois'][i]['sobrenome'] + ', ';
  }
}
console.log(moradores2);
