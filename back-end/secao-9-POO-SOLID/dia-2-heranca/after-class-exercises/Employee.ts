import Person from "./Person";
import crypto from 'node:crypto';
import IEnrollable from "./IEnrollable";

export default class Employee extends Person implements IEnrollable {
  private _admissionDate: Date;
  private _id: string;

  constructor(
    name: string,
    birthDate: Date,
    private _salary: number,
    ) {
      super(name, birthDate);
      this.salary = _salary;
      this._admissionDate = new Date();
      this._id = this.generateId();
    }

    get salary() {
      return this._salary;
    }
  
    set salary(subject: number) {
      this._salary = subject;
    }

    get id() {
      return this._id;
    }
  
    set id(value: string) {
      this.verifyId(value);
      this._id = value;
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
  
    generateEnrollment(): string {
      return `${this._name} registrado com o id ${this._admissionDate} e salário ${this._salary}`
    }
}
