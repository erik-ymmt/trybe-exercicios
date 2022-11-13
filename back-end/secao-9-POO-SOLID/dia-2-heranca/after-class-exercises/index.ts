import Evaluation from "./Evaluation";
import EvaluationResult from "./EvaluationResult";
import Exam from "./Exam";
// import Person from "./Person";
import Student from "./Student";
import Subject from "./Subject";
import Teacher from "./Teacher";

const birth = new Date('1994-10-26');

// const erik = new Person('Erik', birth);
// console.log(erik);

// const examGrades = [10, 7, 8, 9];
// const projectGrades = [10, 7];

// const nico = new Student('nico', birth, examGrades, projectGrades);
// console.log(nico);

const math = new Subject('Math');
const history = new Subject('History');

console.log(math);
console.log(history.name);

const tainha = new Teacher('Rodrigo', birth, 3500, 'bio');
console.log(tainha);

// const evaluation1 = new Evaluation(10, 'bob', 'prova');
// const grade1 = new EvaluationResult(evaluation1, 9);
// const grades = [grade1];
// const student = new Student('firmino', birth, grades);
// console.log(student);

const exam1 = new Exam(22, tainha);

console.log(exam1.score);



