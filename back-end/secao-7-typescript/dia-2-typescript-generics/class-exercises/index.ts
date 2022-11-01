// Type Aliases
type Bird = {
  habitat: string;
  avgWeight: number;
  avgHeight: number;
};

type Sum = (x: number, y: number) => number;

type Address = {
  street: string;
  number: number;
  district: string;
  zipCode: number;
};

// Type Unions
type StatesOfMatter = "solid" | "liquid" | "gaseous";

type IdNumber = string | number;

type OperationalSystem = "linux" | "mac" | "windows";

type Vowels = "A" | "E" | "I" | "O" | "U";

// Classes
class Dog {
  _name: string;
  _specie: string;
  _age: number;

  constructor(name: string, specie: string, age: number) {
    this._name = name;
    this._specie = specie;
    this._age = age;
  }

  bark(): void {
    console.log("woff wooofff!");
  }
}

const poodle = new Dog("teddy", "poodle", 3);
poodle.bark();
console.log(poodle);

class House {
  _rooms: number;
  _address: string;

  constructor(rooms: number, address: string) {
    this._rooms = rooms;
    this._address = address;
  }
}

const home = new House(10, "rua brasil");
console.log(home);

// Interfaces
interface Car {
  brand: string,
  year: number,
}

interface Cat {
  name: string,
  age: number,
}

