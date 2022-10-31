import * as Exercise from './exercises';

console.log(Exercise.greeter('Maria'));
console.log(Exercise.personAge('Maria', 40));
console.log(`A soma do array é igual a ${Exercise.sumArray([3, 6, 9])}`);

console.log(`Triângulo de base 10cm e altura 25cm: ${Exercise.triangle(10, 25)}cm²`);
console.log(`Triângulo de base 5cm e altura 30cm: ${Exercise.triangle(5, 30)}cm²`);
console.log(`Triângulo de base 100cm e altura 200cm: ${Exercise.triangle(100, 200)}cm²`);

console.log(`Quadrado de lado 10cm: ${Exercise.square(10)}cm²`);
console.log(`Quadrado de lado 5cm: ${Exercise.square(5)}cm²`);
console.log(`Quadrado de lado 100cm: ${Exercise.square(100)}cm²`);

console.log(`Retângulo de base 10cm e altura 25cm: ${Exercise.rectangle(10, 25)}cm²`);
console.log(`Retângulo de base 5cm e altura 30cm: ${Exercise.rectangle(5, 30)}cm²`);
console.log(`Retângulo de base 100cm e altura 200cm: ${Exercise.rectangle(100, 200)}cm²`);

console.log(`Área do losango é de ${Exercise.calculateDiamondArea(32, 18)} cm²`);
console.log(`Área do losango é de ${Exercise.calculateDiamondArea(200, 50)} cm²`);
console.log(`Área do losango é de ${Exercise.calculateDiamondArea(75, 25)} cm²`);

console.log(`Área do trapézio é de ${Exercise.calculateTrapezeArea(100, 70, 50)} cm²`);
console.log(`Área do trapézio é de ${Exercise.calculateTrapezeArea(75, 50, 35)} cm²`);
console.log(`Área do trapézio é de ${Exercise.calculateTrapezeArea(150, 120, 80)} cm²`);

console.log(`Área do círculo é de ${Exercise.calculateCircleArea(25)} cm²`);
console.log(`Área do círculo é de ${Exercise.calculateCircleArea(100)} cm²`);
console.log(`Área do círculo é de ${Exercise.calculateCircleArea(12.5)} cm²`);

console.log(`${Exercise.weekDays[1]} is before ${Exercise.weekDays[4]}`);

console.log(`${Exercise.rainbowColors[0]} deve ser a primeira cor do arco-íris, ou seria ${Exercise.rainbowColors[4]}?`);

