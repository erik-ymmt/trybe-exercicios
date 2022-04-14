//1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function verificaPalindromo(palavra) {
    let palindromo = '';

    for (let index = palavra.length - 1; index >= 0; index -= 1 ) {
        palindromo += palavra[index];
    }

    if (palavra === palindromo) {
        return true;
    } else {
        return false;
    }
}

console.log(verificaPalindromo('arara'));
console.log(verificaPalindromo('desenvolvimento'));

//2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
let arrayTeste = [2, 3, 6, 7, 10, 1];


function maiorValor (array) {
    let maiorNumero = array[0];
    let maiorNumeroIndex = 0;

    for (number in array) {
        if (array[number] > maiorNumero) {
            maiorNumero = array[number]
            maiorNumeroIndex = number;
        }
    }
    return maiorNumeroIndex; 
}

console.log(maiorValor(arrayTeste));

/* alternativa:
function maiorValor (array) {
    
    let maiorNumeroIndex = 0;
    for (let i = 0; i < array.length; i += 1) {
        if (array[i] > array[maiorNumeroIndex]) {
             maiorNumeroIndex = i;
        } 
    }
    return maiorNumeroIndex;
}
*/

//3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

let arrayTeste2 = [2, 4, 6, 7, 10, 0, -3]

function menorValor (array) {
    let menorNumero = array[0];
    let menorNumeroIndex = 0;

    for (number in array) {
        if (array[number] < array[menorNumeroIndex]) {
            menorNumeroIndex = number;
        }
    }
    return menorNumeroIndex; 
}

console.log(menorValor(arrayTeste2));

//4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
let arrayDeNomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; 

function maiorN (array) {
    let maiorNome = array[0]
    for (names of arrayDeNomes) {
        if (maiorNome.length < names.length) {
            maiorNome = names;
        }
    }
    return maiorNome;
}

console.log(maiorN(arrayDeNomes));

//5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
let arrayRepete = [2, 3, 2, 5, 8, 2, 3];

let contagem = {};

function addContagem (numeroDoArray) {
    let repeticao = 0;
    let numeroRepetido;
    
    
    if (numeroDoArray === numeroRepetido) {
            repeticao += 1;
        }
    }    

arrayRepete.forEach(addContagem);
console.log(contagem);