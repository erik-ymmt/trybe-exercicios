// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id. A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com.

const registerNewEmployee = (fullName) => {
  const fullNameEmailFormat = fullName.split(' ').join('_').toLowerCase();
  // foi visto em aula que poderia ser feito com o .replace(' ', '_');
  let employeeEmail = `${fullNameEmailFormat}@trybe.com`;
  return {
    nomeCompleto: fullName,
    email: employeeEmail,
  }
}

const newEmployees = (func) => {
  const employees = {
    id1: func('Pedro Guerra'),
    id2: func('Luiza Drumond'),
    id3: func('Carla Paiva'),
  }
  return employees;
};

console.log(newEmployees(registerNewEmployee));

// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const loteriaResult = (number1, number2) => number1 === number2 ? `Número apostado:${number1}
Número sorteado:${number2}
Parabéns você ganhou!` : `Número apostado:${number1}
Número sorteado:${number2}
Tente novamente...`;

const miniLoteria = (numberGuessed, func) => {
  const luckyNumber = Math.floor(Math.random() * 5) + 1;
  return func(numberGuessed, luckyNumber);
}

console.log(miniLoteria(5, loteriaResult));

// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAnswers = (correctAnswers, userAnswers) => {
  let points = 0;
  let correct = 0;
  for (let index in correctAnswers) {
    if (correctAnswers[index] === userAnswers[index]) {
      points += 1;
      correct += 1;
    } 
    if (userAnswers[index] !== 'N.A' && correctAnswers[index] !== userAnswers[index]) {
      points -= 0.5;
    }
  }
  return {
    'nota': points,
    'respostasCorretas': correct
  };
}

const printGrade = (correctAnswers2, userAnswers2, func) => {
  console.log(`A nota da pessoa estudante foi: ${func(correctAnswers2, userAnswers2)['nota']}.
Foram respondidas corretamente ${func(correctAnswers2, userAnswers2)['respostasCorretas']} questões.`);
}

printGrade(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswers);
