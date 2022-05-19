// 1. Dada uma matriz, transforme em um array.

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

// usando for:
function flattenWithFor(arr) {
  let flattedArray = [];
  for (array of arr) {
    for (item of array) {
      flattedArray.push(item);
    }
  }
  return flattedArray
}

console.log(flattenWithFor(arrays));

// usando reduce 1
const flatten = (arr) => arr.reduce((flattedArray, currentArray) => {
  for (item of currentArray) {
    flattedArray.push(item);
  }
  return flattedArray;
}, []);

console.log(flatten(arrays));

// usando reduce + concat

const flatten2 = (arr) => arr.reduce((flattedArray, currentArray) => flattedArray.concat(currentArray), []);

console.log(flatten2(arrays));