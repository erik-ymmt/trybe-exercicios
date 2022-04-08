let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//percorra o array imprimindo todos os valores nele contidos com a função console.log()
for (let number of numbers) {
    console.log(number);
}

//some todos os valores contidos no array e imprima o resultado;
let sum = 0;
for (let number of numbers) {
    sum += number;
}
console.log('A soma de todos os números do array é', sum);

//calcule e imprima a média aritmética dos valores contidos no array;
let media = sum / numbers.length;
console.log('A média aritmética do array é', media);

//Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20"
if (media > 20) {
    console.log('valor maior que 20');
} else {
    console.log('valor menor ou igual a 20');
}

//Utilizando for , descubra qual o maior valor contido no array e imprima-o
let maiorNum = numbers[0];

for (let number of numbers) {
    if (number > maiorNum) {
        maiorNum = number;
    };
}
console.log('O maior valor no array é', maiorNum);

//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let valoresImpares = 0;

for (let number of numbers) {
    if (number % 2 != 0) {
        valoresImpares += 1;
    };
}

if (valoresImpares > 0) {
    console.log('Há', valoresImpares, 'valores ímpares');
} else {
    console.log('nenhum valor ímpar encontrado')
}

//Utilizando for , descubra qual o menor valor contido no array e imprima-o;
let menorNum = numbers[0];

for (let number of numbers) {
    if (number < menorNum) {
        menorNum = number;
    };
}
console.log('O menor valor no array é', menorNum);

//Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
let array25 = [];

for (let index = 1; index < 26; index += 1) {
    array25.push(index);
}
console.log(array25);

//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.
for (number of array25) {
    console.log(number / 2);
}