const num1 = 11;
const num2 = 18;
const num3 = 7;

//the result is set to false, unless it matches the condition
let result = false;

//check if any of the 3 numbers is even, if so, result is now true
if ((num1 % 2) == 0 || (num2 % 2) == 0 || (num3 % 2) == 0) {
    result = true;
}
//prints the result
console.log(result);