//angles os a triangle
let a = 60;
let b = 60;
let c = 60;
//sum of the angles
let sumAngles = a + b + c;

//check wheter the angles form a triangle
    //check for positive values
if (a < 0 || b < 0 || c < 0) {
    console.log('Error - invalid angle. It must be a positive value.')
    //check for numbers different han 180
} else if (sumAngles > 180 || sumAngles < 180) {
    console.log('false')
    //check for a total of 180 degrees
} else if (sumAngles == 180) {
    console.log('true')
    //check if all inputs are numbers
} else {
    console.log('Error - invalid input. It must be a positive number.')
}