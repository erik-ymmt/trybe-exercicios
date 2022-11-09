// exercise 1
class Tv {
  brand: string;
  size: number;
  resolution: string;
  connections: string[];
  connectedTo?: string;

  constructor(brand:string, size: number, resolution: string, connections: string[]) {
    this.brand = brand;
    this.size = size;
    this.resolution = resolution;
    this.connections = connections;
  }

  turnOn(): void {
    console.log(this.brand, this.size, this.resolution, this.connections);
  }
}

const tvSamsung = new Tv('samsumg', 32, '4k', ['hdmi']);

tvSamsung.turnOn();

// exercise 2
class Person {
  name: string;
  private _weight: number;
  private _age: number;
  readonly height: number;

  constructor(name: string, height: number, weight: number, age: number) {
    this.name = name;
    this._weight = weight;
    this._age = age;
    this.height = height;
  }

  getWeight() {
    return this._weight;
  }

  get age() {
    return this._age;
  }

  set age(newValue: number) {
    if (newValue >= 0 && newValue < 200) {
      this._age = newValue;
    }
  }

  birthday() {
    this._age += 1;
  }

}

const p1 = new Person('Maria', 171, 58, 19);
const p2 = new Person('João', 175, 66, 18);

p1.name = 'Erik';
console.log(p1.name);
console.log(p1.getWeight());
console.log(p2.age);
p2.birthday();
console.log(p2.age);
p1.age = 28;
console.log(p1.age);
console.log(p1.height);







