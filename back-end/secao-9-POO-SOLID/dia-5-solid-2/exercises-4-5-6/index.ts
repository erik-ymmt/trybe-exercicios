import Airplane from "./Airplane";
import Car from "./Car";
import FuturisticCar from "./FuturisticCar"

const futuristicCar = new FuturisticCar();
const regularCar = new Car();
const plane = new Airplane();

futuristicCar.drive();
futuristicCar.fly();
regularCar.drive();
plane.fly();
