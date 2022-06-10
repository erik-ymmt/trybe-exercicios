async function convertToReal() {
  const response = await fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest//currencies/usd.min.json');
  const data = await response.json();
  return data.usd.brl;
}

async function appendAndFormatCrypto(cryptoCurrency) {
  const conversionRatio = await convertToReal();

  const cryptoContainer = document.getElementById('crypto');
  const newP = document.createElement('p');
  cryptoContainer.appendChild(newP);
  newP.innerText = `${cryptoCurrency.name} (${cryptoCurrency.symbol}): R$ ${(cryptoCurrency.priceUsd) * conversionRatio}`
}

async function getCrypto() {
  const response = await fetch(`https://api.coincap.io/v2/assets`);
  const data = await response.json();
  data.data.forEach((element, index) => {
    if(index < 10) appendAndFormatCrypto(element); 
  });
}

window.onload = getCrypto;
