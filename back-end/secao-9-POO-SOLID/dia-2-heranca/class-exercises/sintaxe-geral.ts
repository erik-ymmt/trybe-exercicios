class Superclass {
  constructor(public isSuper?: boolean) { }

  sayHello() {
    console.log('Olá Mundo!');
  }
}

class Subclass extends Superclass {

}

const myFunc = (param: Superclass) => {
  param.sayHello();
}

const mySuperClass = new Superclass(true);
const mySubClass = new Subclass(true);

myFunc(mySuperClass);
myFunc(mySubClass);
