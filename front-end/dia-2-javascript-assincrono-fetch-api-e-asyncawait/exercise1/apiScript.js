// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const appendP = (text) => {
  const jokeConteiner = document.getElementById('jokeContainer');
  const newElement = document.createElement('p');
  jokeConteiner.appendChild(newElement);
  newElement.innerText = text;
}

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => appendP(data.joke));
};

window.onload = () => fetchJoke();
