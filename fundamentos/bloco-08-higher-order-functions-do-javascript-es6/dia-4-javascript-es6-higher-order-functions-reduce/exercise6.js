// 6 - Agora vamos criar um novo array de objetos a partir das informações abaixo, onde cada objeto terá o formato { name: nome do aluno, average: media das notas }.

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function avgGrade(arr) {
  const sum = arr.reduce((sum, current) => {
    return sum + current
  }, 0);
  return sum / arr.length;
}

function studentAverage(arr1, arr2) {
  return arr1.map((element, index) => {
    return {
      name: element,
      average: avgGrade(arr2[index])
    };
  });
}

console.log(studentAverage(students, grades));
