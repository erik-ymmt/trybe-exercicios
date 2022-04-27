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
        createLi.classList.add('holiday');
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

// Exercício 4:
// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

// A função já havia criado, só chamei ela com outro parâmentro para a ID:
createButton('Sexta-Feira', 'btn-friday');

// Exercício 5:
// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

function clickFriday() {

    document.getElementById('btn-friday').addEventListener('click', function () {
        const holidays = document.querySelectorAll('.day-friday');
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

clickFriday()

// Exercício 6:
// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.


const day = document.querySelectorAll('.day');

function dayZoomIn() {
    for (let i = 0; i < day.length; i += 1) {
        day[i].addEventListener('mouseover', function (event) {
            // Passei a usar o transform conforme referência do código do Arthur Vianna, 
            // pois o font size estava movendo toda a linha, não somente dando zoom.
            event.target.style.transform = 'scale(1.5)';
        });
    }
}

function dayZoomOut() {
    for (let i = 0; i < day.length; i += 1) {
        day[i].addEventListener('mouseleave', function (event) {
            event.target.style.transform = 'scale(1.0)';
        });
    }     
}

dayZoomIn();
dayZoomOut();

// Exercício 7:
// Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

const myTasks = document.querySelector('.my-tasks')

function newTask(taskName) {
    const createNewTask = document.createElement('span');
    createNewTask.innerHTML = taskName; // + '<br>';
    myTasks.appendChild(createNewTask);
}

newTask('estudar')

// Exercício 8:
// Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

function legenda(corDaLegenda) {
    const criaLegenda = document.createElement('div'); //
    criaLegenda.style.backgroundColor = corDaLegenda;
    criaLegenda.style.opacity = 0.5;
    criaLegenda.className = 'task';
    document.querySelector('.my-tasks').appendChild(criaLegenda);
}

legenda('red');

// Exercício 9:
// Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected , ela estará selecionada.
// Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.

const buttonLegenda = document.querySelector('.my-tasks div');

function selectTask() {
    buttonLegenda.addEventListener('click', function () {
        if (buttonLegenda.className == 'task selected') {
            buttonLegenda.className = 'task';
            buttonLegenda.style.opacity = 0.5;
            
        } else {
            buttonLegenda.className = 'task selected';
            buttonLegenda.style.opacity = 1;
            //sessionStorage.setItem('task-color', document.querySelectorAll('.task selected')[0].style.backgroundColor)
            
        }
    })
}

selectTask()

// Exercício 10:
// Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
// Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .

function setDayColor() {
    let selectedTask = document.getElementsByClassName('task selected');//
    let days = document.querySelector('#days');//
    let taskDiv = document.querySelector('.task');
    let taskColor = taskDiv.style.backgroundColor;
    
    days.addEventListener('click', function(event){
      let eventTargetColor = event.target.style.color;
      if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
        let color = selectedTask[0].style.backgroundColor;
        event.target.style.color = color;
      } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
        event.target.style.color = 'rgb(119,119,119)';
      }
    });
  };
  
  setDayColor();


/*

function taskDay() {
    let selectedColor = document.querySelectorAll('.task-selected');
        
        document.querySelector('#days').addEventListener('click', function (event) {
            if (selectedColor.length > 0) { //não consegui fazer isso true
                event.target.style.color = sessionStorage.getItem('task-color');
                console.log('teste TRUE') 
            }
            console.log(event.target.style.color = sessionStorage.getItem('task-color'))
        });
}

taskDay();
*/

// function taskDay() {
//     const selectedColor = document.querySelectorAll('.task-selected');
//     if (selectedColor.length > 0) {
//         for (let i = 0; i < day.length; i += 1) {
//             day[i].addEventListener('click', function (event) {
//                 event.target.style.color = selectedColor[0].style.backgroundColor;
//                 console.log(event.target)
//             });
//         }
//     }
// }

// taskDay();
