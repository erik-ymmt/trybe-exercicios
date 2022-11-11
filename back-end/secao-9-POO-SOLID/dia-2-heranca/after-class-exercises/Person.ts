export default class Person {
  private _name: string;
  private _birthDate: Date;
  
  constructor(name: string, birthDate: Date) {
    this.name = name;
    // to do - date verification
    birthDate = this._birthDate;
  }

  private validateName(name: string) {
    if (name.length < 3) throw new Error('Nome deve ter pelo menos 3 caracteres');
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(name: string) {
    this.validateName(name);
    
  }

  get birthDate() {
    return this._birthDate;
  }
}
