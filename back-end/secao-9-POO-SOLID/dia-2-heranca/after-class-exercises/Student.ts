import crypto from 'node:crypto';
import EvaluationResult from './EvaluationResult';
import IEnrollable from './IEnrollable';
import Person from "./Person";


export default class Student extends Person implements IEnrollable {
  private _id: string;

  constructor (
    name: string,
    birthDate: Date,
    public evaluationsResults: EvaluationResult[],
    ) {
    super(name, birthDate);
    this._id = this.generateEnrollment();
  }

  generateEnrollment(): string {
    const id = crypto.randomUUID();
    this.verifyId(id);
    return id;
  }

  verifyId(id: string) {
    if (id.length < 16) throw Error('ID inválido.')
  }

  calculateGradesSum() {
    const gradesSum = this.evaluationsResults.reduce((acc, cur) => acc + cur.score, 0);
    return gradesSum;
  }

  calculateGradesAvg() {
    const totalSum = this.calculateGradesSum();
    const totalGrades = this.evaluationsResults.length;
    return totalSum / totalGrades;
  }

  get id() {
    return this._id;
  }

  set id(id: string) {
    this.verifyId(id);
    this._id = id;
  }

  // set evaluationsResults(grades: EvaluationResult[]) {
  //   this.verifyNumOfExamGrades(grades);
  //   this._evaluationsResults = grades;
  // }
}
