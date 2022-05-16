const btnClick = document.getElementById('btn');
const counterText = document.getElementById('contador');
let clicks = 0;

const clickCount = () => counterText.innerText = clicks += 1;

btnClick.addEventListener('click', clickCount);