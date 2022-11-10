class Superclass {
  isSuper: boolean
  constructor() { this.isSuper = true }

  sayHello() {
    console.log('Olá Mundo!');
  }
}

class Subclass extends Superclass {
  constructor() {
    super();
    this.isSuper = false;
  }
}

const myFunc = (param: Superclass) => {
  param.sayHello();
  param.isSuper ? console.log('Super') : console.log('Sub');
}

const mySuperClass = new Superclass();
const mySubClass = new Subclass();

myFunc(mySuperClass);
myFunc(mySubClass);
