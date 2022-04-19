function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();
  
// Exercício 1:
// Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . 
// Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day .
// Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday .
// Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday .

function createDays() {
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const daysElement = document.getElementById('days');

for (let i = 0; i < dezDaysList.length; i += 1) {
    const createLi = document.createElement('li');
    createLi.innerText = dezDaysList[i];
    createLi.className = 'day';
    if (dezDaysList[i] == 24 || dezDaysList[i] == 25 || dezDaysList[i] == 31) {
        createLi.className = 'holiday';
    }
    if (dezDaysList[i] == 4 || dezDaysList[i] == 11 || dezDaysList[i] == 18 || dezDaysList[i] == 25) {
        createLi.classList.add('day-friday');
    }
    daysElement.appendChild(createLi);
}
}

createDays();

  
// Exercício 2:
// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function createButton(string, newId) {
    const newButton = document.createElement('button');
    newButton.innerText = string;
    newButton.id = newId;
    document.querySelector('.buttons-container').appendChild(newButton);
}

createButton('Feriado', 'btn-holiday');

// Exercício 3:
// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .

function clickHoliday() {

    document.getElementById('btn-holiday').addEventListener('click', function() {
        const holidays = document.querySelectorAll('.holiday');
        for (let i = 0; i < holidays.length; i += 1) {
            if (holidays[i].style.backgroundColor === 'green') {
                holidays[i].style.backgroundColor = '#eee';
                holidays[i].style.color = '#777';
            } else {
                holidays[i].style.backgroundColor = 'green';
                holidays[i].style.color = 'white';
            }
        }
    })
}

clickHoliday()

createButton('Sexta-Feira', 'btn-friday');
