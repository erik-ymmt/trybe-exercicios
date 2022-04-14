//1. Faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n
    /* versão 1
let numero = 5;
let asteriscos = '';

for (let i = 0; i < numero; i += 1) {
    for (j = 0; j < numero; j += 1) {
        asteriscos += '*';
    }
    console.log(asteriscos);
    asteriscos = '';
}
*/
//ou melhorada, sem a necessidade de refazer o loop dos asteriscos
let numero = 5;
let asteriscos = '';

for (let i = 0; i < numero; i += 1) {
    asteriscos += '*';
}
for (let i = 0; i < numero; i += 1) {
    console.log(asteriscos);
}

//2.Faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base
let numero2 = 5;
let asteriscos2 = '';

for (let i = 0; i < numero; i += 1) {
    asteriscos2 += '*';
    console.log(asteriscos2);
}

//3.Agora inverta o lado do triângulo.
let numero3 = 5;

for (let i = 1; i <= numero3; i += 1) {
    
    let espacos = '';
    let asteriscos3 = '';

    for (let j = 1; j <= numero3 - i; j += 1) {
        espacos += ' ';
    }

    for (let k = 1; k <= i; k += 1) {
        asteriscos3 += '*';
    }

    let piramide = espacos + asteriscos3;
    console.log(piramide);
}

//4.Faça uma pirâmide com n asteriscos de base
    //tem que ser número ímpar
let numero4 = 11;

if (numero4 % 2 != 0 && numero4 > 0) {
    for (let j = 0; j <= numero4; j += 2) {

        let espacos2 = '';
        let asteriscos4 = '';

        // for (let i = 0; i < (numero4 - j - 1)/2; i += 1){
        //     espacos2 += ' ';
        for (let i = 0; i < (numero4 - j - 1)/2; i += 1){
            espacos2 += ' ';
        }
        for (let i = 0; i <= j; i += 1) {
            asteriscos4 += '*';
        }

        console.log(espacos2 + asteriscos4 + espacos2);
    }    
} else {
    console.log('Valor inválido. Para formar uma pirâmide é necessário um número ímpar positivo.')
}

//5. Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:
let numero5 = 5;
let espacos3 = '';
let asteriscos5 = '*';

//TODO
// for (let j = 0; j <= numero5; j += 2) {
//     if (j === 0) {
//         repeteEspacos = (numero5 - 1) / 2;
//         console.log(' '.repeat(repeteEspacos) + asteriscos5);
//     }
//     else if (j < numero5 && j != 0) {
//         for (let k = 0; k < j; k += 1) {
//              espacos3 += ' '; 
//         }
//         console.log(asteriscos5 + espacos3 + asteriscos5)
//     } else if (j > numero5 && j != 0) {  //errado aqui, nao é maior j > numero
//         for (let i = 0; i < numero5; i += 1) {
//             asteriscos5 += '*';
//         }
//         console.log(asteriscos5);
//     } else {
//         console.log('Erro')
//     }
// }

//referência: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat