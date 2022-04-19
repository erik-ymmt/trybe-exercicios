const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
// R: Pois foi feita essa configuração no CSS (na classe .tech).

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
const techElements = document.getElementsByClassName('tech');

function addClassTech(elemento) {
    for (let i = 0; i < techElements.length; i += 1) {
        techElements[i].classList.remove('tech');
    }
    elemento.target.className = 'tech';
}

firstLi.addEventListener('click', addClassTech);
secondLi.addEventListener('click', addClassTech);
thirdLi.addEventListener('click', addClassTech);

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
let inputDaCaixinha = 
input.addEventListener('input', function (event) {
    for (let i = 0; i < techElements.length; i += 1) {
        techElements[0].innerText = event.target.value;
    }
});

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele redirecione para alguma página; 4.1. Que tal redirecionar para seu portfólio?
myWebpage.addEventListener('dblclick', function () {
    window.location.replace('https://erik-ymmt.github.io/');
});

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere a cor do mesmo;
myWebpage.addEventListener('mouseenter', function (event) {
    event.target.style.color = '#2fc18c';
    console.log(event);
});

myWebpage.addEventListener('mouseout', function(event) {
    event.target.style.color = 'white';
  });