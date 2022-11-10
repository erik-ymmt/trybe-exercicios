export default class Students {
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
}
