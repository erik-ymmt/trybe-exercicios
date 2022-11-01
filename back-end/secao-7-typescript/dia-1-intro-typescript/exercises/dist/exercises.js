"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rainbowColors = exports.weekDays = exports.calculateCircleArea = exports.calculateTrapezeArea = exports.calculateDiamondArea = exports.rectangle = exports.square = exports.triangle = exports.sumArray = exports.add = exports.personAge = exports.greeter = void 0;
function greeter(name) {
    return `Olá ${name}`;
}
exports.greeter = greeter;
function personAge(name, age) {
    return `${name} tem ${age} anos`;
}
exports.personAge = personAge;
function add(x, y) {
    return x + y;
}
exports.add = add;
function sumArray(numbers) {
    return numbers.reduce(add, 0);
}
exports.sumArray = sumArray;
function triangle(base, height) {
    return (base * height) / 2;
}
exports.triangle = triangle;
function square(side) {
    return side ** 2;
}
exports.square = square;
function rectangle(base, height) {
    return base * height;
}
exports.rectangle = rectangle;
function calculateDiamondArea(diagonal1, diagonal2) {
    return (diagonal1 * diagonal2) / 2;
}
exports.calculateDiamondArea = calculateDiamondArea;
function calculateTrapezeArea(base1, base2, height) {
    return ((base1 + base2) * height) / 2;
}
exports.calculateTrapezeArea = calculateTrapezeArea;
function calculateCircleArea(radius) {
    const pi = 3.14;
    return pi * (radius ** 2);
}
exports.calculateCircleArea = calculateCircleArea;
var weekDays;
(function (weekDays) {
    weekDays[weekDays["sunday"] = 0] = "sunday";
    weekDays[weekDays["monday"] = 1] = "monday";
    weekDays[weekDays["tuesday"] = 2] = "tuesday";
    weekDays[weekDays["wednesday"] = 3] = "wednesday";
    weekDays[weekDays["thursday"] = 4] = "thursday";
    weekDays[weekDays["friday"] = 5] = "friday";
    weekDays[weekDays["saturday"] = 6] = "saturday";
})(weekDays = exports.weekDays || (exports.weekDays = {}));
var rainbowColors;
(function (rainbowColors) {
    rainbowColors[rainbowColors["vermelho"] = 0] = "vermelho";
    rainbowColors[rainbowColors["laranja"] = 1] = "laranja";
    rainbowColors[rainbowColors["amarelo"] = 2] = "amarelo";
    rainbowColors[rainbowColors["azul"] = 3] = "azul";
    rainbowColors[rainbowColors["verde"] = 4] = "verde";
})(rainbowColors = exports.rainbowColors || (exports.rainbowColors = {}));
