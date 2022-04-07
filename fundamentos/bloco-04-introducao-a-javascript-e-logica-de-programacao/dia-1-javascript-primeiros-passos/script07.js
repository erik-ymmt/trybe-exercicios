//grade to be converted
let grade = 90;

//checking for valid grades
if (grade > 100 || grade < 0 || typeof(grade) != 'number') {
    console.log('invalid input, please choose a number betwee 0-100.')
//converting the grade
} else if (grade >= 90) {
    console.log('Congrats! Your grade is A!');
} else if (grade >= 80) {
    console.log('Your grade is B.');
} else if (grade >= 70) {
    console.log('Your grade is C.');
} else if (grade >= 60) {
    console.log('Your grade is D.');
} else if (grade >= 50) {
    console.log('Your grade is E.');
} else {
    console.log('Sorry... Your grade is F...');
}