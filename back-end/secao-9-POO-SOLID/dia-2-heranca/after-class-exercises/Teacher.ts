import Employee from "./Employee";

export default class Teacher extends Employee {
  constructor(
    name: string,
    birthDate: Date,
    salary: number,
    private _subject: string) {
    super(name, birthDate, salary);
    this.subject = _subject;
  }

  get subject() {
    return this._subject;
  }

  set subject(subject: string) {
    this._subject = subject;
  }
}