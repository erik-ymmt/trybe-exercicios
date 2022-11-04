export class Car {
  brand: string;
  color: string;
  doors: number;
  isOn: boolean = false;
  speed: number = 0;

  constructor(brand: string, color: string, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  }

  honk():void {
    console.log(`${this.brand} says honk honk!`);
  }

  turnOn():void {
    this.isOn = true;
    console.log(this.isOn);
  }

  turnOff():void {
    this.isOn = false;
    console.log(this.isOn);
  }

  speedUp():void {
    this.speed += 1;
    console.log(`speed up to ${this.speed}`);
  }

  speedDown():void {
    this.speed -= 1;
    console.log(`speed down to ${this.speed}`);
  }

  stop():void {
    this.speed = 0;
    console.log(`stopped, speed: ${this.speed}`);
  }

  turn(direction: string):void {
    console.log(`turn ${direction}`);
  }
}
