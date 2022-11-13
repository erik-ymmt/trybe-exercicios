import crypto from 'node:crypto';
import IEnrollable from './IEnrollable';
import Person from "./Person";


export default class Student extends Person implements IEnrollable {
  private _id: string;

  constructor (
    name: string,
    birthDate: Date,
    private _examGrades: number[],
    private _projectGrades: number[] 
    ) {
    super(name, birthDate);
    this._id = this.generateEnrollment();
    this.examGrades = _examGrades;
    this.projectGrades = _projectGrades;
  }

  generateEnrollment(): string {
    const id = crypto.randomUUID();
    this.verifyId(id);
    return id;
  }

  verifyId(id: string) {
    if (id.length < 16) throw Error('ID inválido.')
  }

  verifyNumOfExamGrades(examGrades: number[]) {
    if (examGrades.length > 4) throw Error('No máximo 4 notas de prova.')
  }

  verifyNumOfProjectGrades(grades: number[]) {
    if (grades.length > 2) throw Error('No máximo 2 notas de trabalhos.')
  }

  calculateGradesSum() {
    const examGradesSum = this._examGrades.reduce((acc, cur) => acc + cur);
    const projectGradesSum = this._projectGrades.reduce((acc, cur) => acc + cur);
    return examGradesSum + projectGradesSum;
  }

  calculateGradesAvg() {
    const totalSum = this.calculateGradesSum();
    const totalGrades = this._examGrades.length + this._projectGrades.length;
    return totalSum / totalGrades;
  }

  get id() {
    return this._id;
  }

  get examGrades() {
    return this._examGrades;
  }

  get projectGrades() {
    return this._projectGrades;
  }

  set id(id: string) {
    this.verifyId(id);
    this._id = id;
  }

  set examGrades(grades: number[]) {
    this.verifyNumOfExamGrades(grades);
    this._examGrades = grades;
  }

  set projectGrades(grades: number[]) {
    this.verifyNumOfProjectGrades(grades);
    this._projectGrades = grades;
  }
}
