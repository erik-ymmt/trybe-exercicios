"use strict";
exports.__esModule = true;
var car_1 = require("./car");
var car = new car_1.Car("volkswagen gol", "prata", 4);
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
