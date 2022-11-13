export default abstract class Person {

  constructor(protected _name: string, private _birthDate: Date) {
    this.name = _name;
    this.birthDate = _birthDate;
  }

  private validateName(name: string) {
    if (name.length < 3) throw new Error('Nome deve ter pelo menos 3 caracteres');
  }

  private validateBirthDate(date: Date) {
    const today = new Date().getTime();
    const birthDate = date.getTime();
    const yearInMs = 31_536_000_000;
    const age = Math.floor((today - birthDate) / yearInMs)
    if (age > 120) throw Error('A pessoa deve ter menos de 120 anos.');
    if (birthDate > today) throw Error('Digite uma data de nascimento válida.')
  }

  get name() {
    return this._name;
  }

  set name(value: string) {
    this.validateName(value);
    this._name = value;
  }

  get birthDate() {
    return this._birthDate;
  }

  set birthDate(value: Date) {
    this.validateBirthDate(value);
    this._birthDate = value;
  }
}
