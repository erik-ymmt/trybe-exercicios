// exercise 1
class Tv {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo?: string;

  constructor(brand:string, size: number, resolution: string, connections: string[]) {
    this._brand = brand;
    this._size = size;
    this._resolution = resolution;
    this._connections = connections;
  }

  set connectedTo(connection: string | undefined) {
    if (connection && this._connections.includes(connection)) {
      this._connectedTo = connection;
    } else {
      console.log("Sorry, connection unavailable!");
    }
  }

  get connectedTo(): string | undefined {
    return this._connectedTo;
  }

  turnOn(): void {
    console.log(this._brand, this._size, this._resolution, this._connections);
  }
}

const tvSamsung = new Tv('samsumg', 32, '4k', ['hdmi', 'USB']);

tvSamsung.turnOn();
tvSamsung.connectedTo = 'USB';
console.log(tvSamsung.connectedTo);
tvSamsung.connectedTo = 'USB 3.0';
console.log(tvSamsung.connectedTo);

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







