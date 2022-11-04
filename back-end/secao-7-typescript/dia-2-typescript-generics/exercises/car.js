"use strict";
exports.__esModule = true;
exports.Car = void 0;
var Car = /** @class */ (function () {
    function Car(brand, color, doors) {
        this.isOn = false;
        this.speed = 0;
        this.brand = brand;
        this.color = color;
        this.doors = doors;
    }
    Car.prototype.honk = function () {
        console.log("".concat(this.brand, " says honk honk!"));
    };
    Car.prototype.turnOn = function () {
        this.isOn = true;
        console.log(this.isOn);
    };
    Car.prototype.turnOff = function () {
        this.isOn = false;
        console.log(this.isOn);
    };
    Car.prototype.speedUp = function () {
        this.speed += 1;
        console.log("speed up to ".concat(this.speed));
    };
    Car.prototype.speedDown = function () {
        this.speed -= 1;
        console.log("speed down to ".concat(this.speed));
    };
    Car.prototype.stop = function () {
        this.speed = 0;
        console.log("stopped, speed: ".concat(this.speed));
    };
    Car.prototype.turn = function (direction) {
        console.log("turn ".concat(direction));
    };
    return Car;
}());
exports.Car = Car;
