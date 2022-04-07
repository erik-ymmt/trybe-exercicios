const num1 = 13;
const num2 = 4;
const num3 = 8;

//check if number is uneven
function uneven (num) {
    if(num % 2 != 0) {
        return true;
    } else {
        return false;
    }
}

//check if any of the 3 numbers is odd/uneven
if (uneven(num1) == true || uneven(num2) == true || uneven(num3) == true ) {
    console.log('true. There is an uneven number.');
} else {
    console.log('false. They are all even.');
}