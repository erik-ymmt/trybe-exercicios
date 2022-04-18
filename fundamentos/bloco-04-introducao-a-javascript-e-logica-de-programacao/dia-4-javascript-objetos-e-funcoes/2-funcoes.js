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
let listaContagem = {};

function retornaOqMaisRepete (array) {
    for (numbers of array) {
        let contagem = 0;
        for (numbers2 of array) {
            if (numbers == numbers2) {
                contagem += 1;
            }
        }
        listaContagem[numbers] = contagem
    }
    console.log(listaContagem);

    let maisRepetido;
    let contagemDoMaisRep = 0;

    for (let keys in listaContagem) {
        if (parseInt(listaContagem[keys]) > contagemDoMaisRep) {
            contagemDoMaisRep = listaContagem[keys];
            maisRepetido = keys;
        }
    }
    console.log(`O mais repetido é o ${maisRepetido}, ele se repete ${contagemDoMaisRep} vezes`);
}
retornaOqMaisRepete([2, 3, 2, 5, 8, 2, 3, 3, 3]);

// 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
function somatorio(numNatural) {
    let soma = 0;
    for (let i = 1; i <= numNatural; i += 1) {
        soma += i;
    }
    return soma;
}

console.log(somatorio(5));

// 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word.

function checagem(word, ending) {
    const splitWord = word.split('');
    const splitEnding = ending.split('');
    const diferenca = word.length - ending.length

    let contagem = 0
    for (i = ending.length - 1; i >= 0; i -= 1) {
        if (splitWord[(i + diferenca)] === splitEnding[i]) {
            contagem += 1;
        }
    }
    if (contagem === ending.length) {
        console.log(true);
    } else {
        console.log(false);
    }
}

checagem('trybe', 'br');
