export default class Subject {
  constructor(private _name: string) {
    this.name = _name;
  }

  get name() {
    return this._name
  }

  set name(name: string) {
    this.validateName(name);
    this._name = name;
  }

  validateName(name: string) {
    if (name.length < 3) throw Error('Nome deve ter pelo menos 3 caracteres.')
  }
}