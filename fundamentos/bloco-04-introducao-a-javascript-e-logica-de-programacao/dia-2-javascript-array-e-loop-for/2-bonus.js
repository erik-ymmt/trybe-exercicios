//1. Ordene o array numbers em ordem crescente e imprima seus valores;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/* versão1
for (let i = 0; i < numbers.length; i += 1) {
    for (let j = 1 ; j < numbers.length; j += 1) {
                if (numbers[i] > numbers[j] && i < j) {
                let temporary = numbers[j];
                numbers[j] = numbers[i];
                numbers[i] = temporary;
            }
        }
}

 console.log(numbers);
*/

//versão 2, melhorando a condição que 'j' tem que ser sempre menor que 'i' da linha 7.
for (let i = 0; i < numbers.length; i += 1) {
    for (let j = numbers.length - 1; j > i; j -= 1) {
                if (numbers[i] > numbers[j]) {
                let temporary = numbers[j];
                numbers[j] = numbers[i];
                numbers[i] = temporary;
            }
        }
}

console.log(numbers);

//2. Ordene o array numbers em ordem decrescente e imprima seus valores;
let numbers2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 0; i < numbers2.length; i += 1) {
    for (let j = numbers2.length - 1; j > i; j -= 1) {
        if (numbers2[i] < numbers2[j]) {
            let temp = numbers2[i];
            numbers2[i] = numbers2[j];
            numbers2[j] = temp;
        }
    }
}

console.log(numbers2);

//Agora crie um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push . O resultado deve ser o array abaixo:
// [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]

let numbers3 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbers4 = [];

for (let i = 0; i < numbers3.length; i += 1) {
    
    if (i < numbers3.length - 1) {
        let newNum = numbers3[i] * numbers3[i + 1];
        numbers4.push(newNum);
    } else {
        numbers4.push(numbers3[i] * 2);
    }
}

console.log(numbers4);