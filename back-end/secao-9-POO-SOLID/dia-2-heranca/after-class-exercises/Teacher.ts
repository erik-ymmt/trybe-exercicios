import IEmployee from "./IEmployee";
import Person from "./Person";

export default class Teacher extends Person implements IEmployee {
  private _subject: string;

  constructor(name: string, birthDate: Date, salary:number, subject:string) {
    super(name, birthDate);
    this._subject = subject
  }

  get subject() {
    return this._subject;
  }

  set subject(subject: string) {
    this._subject = subject;
  }

  validateRegister(register: string) {
    if (register.length < 16) throw Error('Registro deve ter no mínimo 16 caracteres.');
  }
}