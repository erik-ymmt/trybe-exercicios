export default class Student {
  private _id: number;
  private _name: string;
  private _examGrades: number[];
  private _projectGrades: number[];

  constructor (id: number, name: string, examGrades: number[], projectGrades: number[]) {
    this._id = id;
    this._name = name;
    this._examGrades = examGrades;
    this._projectGrades = projectGrades;
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
}
