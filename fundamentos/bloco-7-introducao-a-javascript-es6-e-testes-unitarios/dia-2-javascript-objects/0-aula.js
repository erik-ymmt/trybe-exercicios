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

var an_obj = { 100: 'a', 2: 'b', 7: 'c' };
for (keys in an_obj) {
  console.log(keys);
}
console.log(Object.keys(an_obj));

// criar uma função que exiba as habilidades do objeto student. Cada habilidade deve ser exibida no formato "Nome da habilidade, Nível: valor da chave referente à habilidade"

const getStudentsSkills = (studentObject) => {
  const objectKeys = Object.keys(studentObject);
  for (key of objectKeys) {
    console.log(`${key}, Nível: ${studentObject[key]}`);
  }
}

const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

getStudentsSkills(student1);
getStudentsSkills(student2);

