function appendAndFormatCrypto(cryptoCurrency) {
  const cryptoContainer = document.getElementById('crypto');
  const newP = document.createElement('p');
  cryptoContainer.appendChild(newP);
  newP.innerText = `${cryptoCurrency.name} (${cryptoCurrency.symbol}): $ ${cryptoCurrency.priceUsd}`
}

async function getCrypto() {
  const response = await fetch(`https://api.coincap.io/v2/assets`);
  const data = await response.json();
  data.data.forEach((element, index) => {
    if(index < 10) appendAndFormatCrypto(element); 
  });
  console.log(data.data);
}

window.onload = getCrypto;
