// crie uma função que receba três parâmetros, sendo eles: um objeto, o nome de uma chave e o seu valor. O retorno dessa função deve ser o objeto já com a nova chave adicionada nele.

const addNewKey = (objectToAddKey, newKeyName, newKeyValue) => {
  objectToAddKey[newKeyName] = newKeyValue;
}

const user1 = {
  name: 'Erik',
  lastname: 'Yamamoto'
}

console.log(user1);
addNewKey(user1, 'age', 27);
console.log(user1);