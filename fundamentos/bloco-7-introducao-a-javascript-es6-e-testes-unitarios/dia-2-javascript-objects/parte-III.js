const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const addNewKey = (lesson, key, value) => {
  lesson[key] = value;
}

addNewKey(lesson2, 'turno', 'noite');
console.log(lesson2);

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const listKeys = (object) => Object.keys(object);
console.log(listKeys(lesson2));

// Crie uma função para mostrar o tamanho de um objeto.
const objectLength = (object) => listKeys(object).length;
console.log(objectLength(lesson2));

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const listValues = (object) => Object.values(object);
console.log(listValues(lesson2));

// Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:
const newObject = { lesson1, lesson2, lesson3 }
const allLessons = Object.assign({}, newObject);
console.log(allLessons);

// Usando o objeto criado no exercício anterior, crie uma função que retorne o número total de estudantes em todas as aulas.
const numberOfStudents = () => {
  return allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes;
}
console.log(numberOfStudents());

// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.
const getKeyByIndex = (object, index) => Object.keys(object)[index];
console.log(getKeyByIndex(lesson1, 1));

// Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.
const verifyKeyValue = (object, key, value) => {
  // const arrayKeyValue = Object.entries(object);
  // Não deu:
  // if (arrayKeyValue.includes([ key, value ])) {
  //   return true;
  // }
  // return false;
  if (key in object) {
    if (object[key] === value) {
      return true;
    }
  }
  return false;
  }

console.log(verifyKeyValue(lesson1, 'materia', 'Matemática'));
console.log(verifyKeyValue(lesson1, 'materia', 'Física'));

// Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto allLessons.
const mathStudents = () => {
  return allLessons.lesson1['numeroEstudantes'] + allLessons.lesson3['numeroEstudantes']
}
console.log(mathStudents());

// Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto allLessons.
const createReport = (object, professor) => {
  const objectKeys = Object.keys(object);
  const report = {
    professor: undefined,
    aulas: [],
    estudantes: 0,
  };
  for (let lesson of objectKeys) {
    if((Object.values(object[lesson])).includes(professor)) {
      report.professor = professor;
      report.aulas.push(object[lesson]['materia']);
      report.estudantes += object[lesson].numeroEstudantes;
    };
  }
  return report;
}

console.log(createReport(allLessons, 'Maria Clara'));
