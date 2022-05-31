const getPlanet = () => {
  const mars = {
    name: "Mars",
    distanceFromSun: {
      value: 227900000,
      measurementUnit: "kilometers",
    },
  };
  console.log("Returned planet: ", mars);
};

setTimeout(() => getPlanet(), 4000);
setTimeout(() => console.log('Marte'), 4000);

// O Curiosity envia para a Terra a temperatura atual em Marte, gastando um tempo variável de até 5 segundos para que termine o envio. Crie a função sendMarsTemperature, que imprime a temperatura em Marte.

// Adicione na função sendMarsTemperature uma callback que contenha as ações a serem tomadas em cima da temperatura.

// Adicione na função sendMarsTemperature uma outra callback que contenha as ações a serem tomadas em caso de falha.

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const handleError = (errorReason) =>
console.log(`Error getting temperature: ${errorReason}`);

const sendMarsTemperature = (callback) => {
  if (Math.random() > 0.4) {
    setTimeout(() => callback(getMarsTemperature()), messageDelay());
  } else {
    setTimeout(() => handleError('Robot is busy'), messageDelay());
  }
}

sendMarsTemperature(temperatureInFahrenheit);
sendMarsTemperature(greet);