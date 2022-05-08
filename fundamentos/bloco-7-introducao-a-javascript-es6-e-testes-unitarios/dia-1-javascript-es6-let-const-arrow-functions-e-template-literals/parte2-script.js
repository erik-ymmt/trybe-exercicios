const btnClick = document.getElementById('btn');
const counterText = document.getElementById('contador');
let clicks = 0;

const clickCount = () => {
  clicks += 1;
  counterText.innerText = clicks;
  console.log('hi')
}

btnClick.addEventListener('click', clickCount);