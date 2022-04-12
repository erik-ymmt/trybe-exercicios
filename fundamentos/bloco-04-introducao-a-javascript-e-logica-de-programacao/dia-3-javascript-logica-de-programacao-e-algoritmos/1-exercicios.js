// 1.crie um algoritmo que retorne o fatorial de 10.

const number = 10;
    //declarar variável para calculo do fatorial
    //inicia com o valor 1, pois até zero fatorial = 1;
let fatorial = 1;

for (let i = 1; i <= number; i++) {
    fatorial *= i;
}

console.log('Resultado: ' + fatorial)

// 2. desenvolva um algoritmo que é capaz de inverter uma palavra.

let word = 'banana';
    // variável vazia para armazenar a palavra invertida
let invWord = '';

    //iniciar o loop com a última letra e incluir na string invertida
for (let i = word.length - 1; i >= 0; i -= 1) {
    invWord += word[i];
}

console.log('Palavra invertida: ' + invWord);

// 3.Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor.
let array = ['paralelepipedo', 'java', 'javascript', 'python', 'html', 'css', 'oi'];
//SCRIPT MAIOR PALAVRA:
    //variável que irá armazenar a maior palavra, começa com a primeira palavra
let maiorPalavra = array[0];

    //loop comparando cada posição com a maior palavra armazenada até então
for (let i = 1; i < array.length; i += 1) {
        if (array[i].length > maiorPalavra.length) {
            maiorPalavra = array[i];
        }
    }

console.log('A maior palavra do array é: ' + maiorPalavra);

//SCRIPT MENOR PALAVRA:
    //variável que irá armazenar a menor palavra, começa com a primeira palavra
let menorPalavra = array[0];

    //loop comparando cada posição com a menor palavra armazenada até então
for (let i = 1; i < array.length; i += 1) {
        if (array[i].length < maiorPalavra.length) {
            menorPalavra = array[i];
        }
    }

    console.log('A menor palavra do array é: ' + menorPalavra);

//4. Escreva um algoritmo que retorne o maior número primo entre 0 e 50.
let numPrimo;

    //função que retorna true se o núemro for primo
function primo(x) {
    let divisores = 0;
    for (i = 2; i < x; i +=1) {
        if (x % i == 0) {
            divisores += 1;
        }
    }
    if (divisores == 0) {
        return true;
    } else {
        return false;
    }
}

    //para descobrir qual é o maior número primo, temos que investgar a partir do 50 qual número é primo, para isso o loop
for (let i = 50; i >= 0; i -= 1) {
    if(primo(i) == true) {
        console.log('O maior número primo é: ' + i);
        break;
    }
}