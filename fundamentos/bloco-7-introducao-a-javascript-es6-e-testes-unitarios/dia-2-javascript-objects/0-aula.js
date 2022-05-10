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
  Git: 'Bom',
};

getStudentsSkills(student1);
getStudentsSkills(student2);

const países = {
  França: 'Paris',
  Brasil: 'Brasília',
  Espanha: 'Madrid',
  Portugal: 'Lisboa',
};
const pairKeyValue = Object.entries(países);
console.log(pairKeyValue);

// Object.assign
const person = {
  name: 'Roberto',
};

const lastName = {
  lastName: 'Silva',
};

const clone = Object.assign(person, lastName);

console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
console.log(person); // { name: 'Roberto', lastName: 'Silva' }

clone.name = 'Maria';

console.log('Mudando a propriedade name através do objeto clone')
console.log(clone); // Output: { name: 'Maria', lastName: 'Silva' }
console.log(person); // Output: { name: 'Maria', lastName: 'Silva' }
console.log('--------------');

person.lastName = 'Ferreira';

console.log('Mudando a propriedade lastName através do objeto person');
console.log(clone); // Output: { name: 'Maria', lastName: 'Ferreira' }
console.log(person); // Output: { name: 'Maria', lastName: 'Ferreira' }