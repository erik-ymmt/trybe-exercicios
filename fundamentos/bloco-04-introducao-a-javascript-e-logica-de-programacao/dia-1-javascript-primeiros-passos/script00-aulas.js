//Aula 1
console.log("-- Aula 1 --");

const myName = "Erik";
const birthCity = "Belo Horizonte";
let birthYear = "1994";

console.log(myName);
console.log(birthCity);
console.log(birthYear);

//altera o valor de birthYear
birthYear = 2030;
console.log(birthYear);

/*tenta alterar o valor de birthCity, porém sem sucesso, pois é uma constante
birthCity = Floripa;
console.log(birthCity);
*/

//Aula 2
console.log("-- Aula 2 --");

let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof patientId);
console.log(typeof isEnrolled);
console.log(typeof patientInfo);
console.log(typeof patientEmail);

console.log(typeof patientAge);

patientId = '50';
console.log(typeof patientId);

//parte 2 - Aula 2
const base = 5;
const height = 8;
const area = base * height;
console.log(area);

const perimeter = (base * 2) + (height * 2);
console.log(perimeter);

//Aula 3
console.log("-- Aula 3 --");

const grade = 100;

if (grade >= 80 && grade <= 100) {
    console.log("Parabéns, você foi aprovada(o)!")
}
else if (grade < 80 && grade >= 60) {
    console.log("Você está na lista de espera.")
}
else if (grade >= 0 && grade < 60) {
    console.log("Você foi reprovada(o).")
}
else {
    console.log("Valor de nota inválido - deve ser de 0-100")
}

//Aula 4
console.log("-- Aula 4 --");
const conditionOne = true;
const conditionTwo = false;

console.log(conditionOne && conditionTwo);

const currentHour = 22;
let message = '';

if (currentHour >= 22) {
    message = "Não deveríamos comer nada, é hora de dormir";
} else if (currentHour >= 18 && currentHour < 22) {
    message = "Rango da noite, vamos jantar :D";
} else if (currentHour >= 14 && currentHour < 18) {
    message = "Vamos fazer um bolo pro café da tarde?"
} else if (currentHour >= 11 && currentHour < 14) {
    message = "Hora do almoço!!!";
} else {
    message = "Hmmm, cheiro de café recém passado";
}

console.log(message);

let weekday = "quarta-feira";

if (weekday == "segunda-feira" || 
    weekday == "terça-feira" ||
    weekday == "quarta-feira" ||
    weekday == "quinta-feira" ||
    weekday == "sexta-feira") {
    console.log("Oba, mais um dia de aprendizado na Trybe >:D");
    } else {
        console.log("FINALMENTE, descanso merecido UwU");
    }

//Aula 5
console.log("-- Aula 5 --");

let status1 = 'aprovada';

switch (status1) {
    case 'aprovada': 
        console.log("Parabéns, você foi aprovada(o)!");
        break
    case 'lista':
        console.log("Você está na lista de espera.");
        break
    case 'reprovada':
        console.log("Você foi reprovada(o).");
        break
    default: console.log('Não se Aplica');
}