//Testes - Aula Arrays
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.unshift('Fazer exercícios da Trybe');  // adiciona mais uma tarefa no início
console.log(tasksList);

tasksList.shift(tasksList[0]); //remove a primeira tarefa
console.log(tasksList);

//Exercício 1
//Obtenha o valor "Serviços" do array menu :

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

//Exercício 2
//Procure o índice do valor "Portfólio" do array menu :

let menu2 = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu2.indexOf('Portfólio');

console.log(indexOfPortfolio);

//Exercício 3
//Adicione o valor "Contato" no final do array menu :

let menu3 = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu3.push('Contato');

console.log(menu3);

//Aula FOR
//Exercício 1
//Utilize o for para imprimir os elementos da lista groceryList com o console.log() :

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let index = 0; index < groceryList.length; index += 1) {
    console.log(groceryList[index]);
}

//Aula FOR/OF
//Exercício 1
//Utilize o for/of para imprimir os elementos da lista names com o console.log() :

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let name of names) {
    console.log(name);
}