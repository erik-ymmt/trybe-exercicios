import { Car } from "./car";

const car = new Car("volkswagen gol", "prata", 4);

function main() {
  car.turnOn();
  car.speedUp();
  car.speedUp();
  car.speedDown();
  car.turn("left");
  car.speedUp();
  car.turn("right");
  car.speedUp();
  car.speedUp();
  car.turn("right");
  car.speedDown();
  car.stop();
}

main();
