function makeCalculus(a, b, c) {
  const promise = new Promise((resolve, reject) => {
    if(typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') reject("informe apenas números");
    const result = (a + b) * c;
    if (result < 50) reject("valor muito baixo")
    resolve(result);
  })
  return promise;
}

makeCalculus(10, 20, 5).then((result) => console.log(result));
