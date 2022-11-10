import Student from "./Students";

const luke = new Student(1, 'Luke', [10, 9, 8, 10], [9, 8]);

const sum = luke.calculateGradesSum();
const avg = luke.calculateGradesAvg();

console.log(sum, avg);
