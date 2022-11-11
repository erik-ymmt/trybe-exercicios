interface MyInterface {
  myNumber: number;
  myFunc(myParam: number): string;
}

class MyClass implements MyInterface {
  constructor(public myNumber: number) {

  }

  myFunc(myParam: number): string {
    const sum = this.myNumber + myParam;
    return `result = ${sum}`;
  }
}

const obj = new MyClass(1);

console.log(obj.myFunc(1));
