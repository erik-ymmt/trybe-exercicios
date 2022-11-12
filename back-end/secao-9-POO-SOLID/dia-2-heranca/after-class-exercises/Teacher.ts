import IEmployee from "./IEmployee";
import Person from "./Person";
import crypto from 'node:crypto';

export default class Teacher extends Person implements IEmployee {
  registration: string;
  admissionDate: Date;

  constructor(
    name: string,
    birthDate: Date,
    private _salary: number,
    private _subject: string) {
    super(name, birthDate);
    this.salary = _salary;
    this.subject = _subject;
    this.registration = this.generateId();
    this.admissionDate = new Date();
  }

  get salary() {
    return this._salary;
  }

  set salary(subject: number) {
    this._salary = subject;
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

  generateId(): string {
    const id = crypto.randomUUID();
    this.verifyId(id);
    return id;
  }

  verifyId(id: string) {
    if (id.length < 16) throw Error('ID inválido.')
  }

  generateRegistration(): string {
    return `${this.name} registrado com o id ${this.admissionDate} e salário ${this.salary}`
  }
}