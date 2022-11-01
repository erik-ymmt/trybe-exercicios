const readlineSync = require('readline-sync');
import { convertMass } from "./mass";
import { convertLength } from "./length";

const options = ['mass', 'length'];
const massUnits = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];
const lengthUnits = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];

const massOrLength = readlineSync.keyInSelect(options, 'Do you wanna convert mass or length? ');

if (massOrLength === 0) {
  const massUnitFrom = readlineSync.keyInSelect(massUnits, 'What unit you want to convert from? ');
  const massUnitTo = readlineSync.keyInSelect(massUnits, 'What unit you want to convert to? ');
  const value = readlineSync.question(`How many ${massUnits[massUnitFrom]}?`);
  
  const result = convertMass(Number(value), massUnits[massUnitFrom], massUnits[massUnitTo]);
  console.log(result);
} else if (massOrLength === 1) {
  const lengthUnitFrom = readlineSync.keyInSelect(lengthUnits, 'What unit you want to convert from? ');
  const lengthUnitTo = readlineSync.keyInSelect(lengthUnits, 'What unit you want to convert to? ');
  const value = readlineSync.question(`How many ${lengthUnits[lengthUnitFrom]}?`);
  
  const result = convertLength(Number(value), lengthUnits[lengthUnitFrom], lengthUnits[lengthUnitTo]);
  console.log(result);
} else {
  console.log('ok, bye!');
}


