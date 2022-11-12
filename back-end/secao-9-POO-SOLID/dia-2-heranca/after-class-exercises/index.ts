import Person from "./Person";
import Student from "./Student";

const birth = new Date('1994-10-26')
const erik = new Person('Erik', birth);
console.log(erik);

const examGrades = [10, 7, 8, 9];
const projectGrades = [10, 7];

const nico = new Student('nico', birth, examGrades, projectGrades);
console.log(nico);


