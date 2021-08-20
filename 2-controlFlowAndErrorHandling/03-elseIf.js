/*
ELSE IF

2-controlFlowAndErrorHandling
    03-elseIf.js
*/

// if-elseif statements can be chained
let age = 23;
if (age >= 25) {
    console.log('Yay! You can rent a car');
} else if (age >= 21) {
    console.log('Yay! You can drink!');
} else if (age >= 18) {
    console.log('Yay! you can vote!');
} else {
    console.log('Sorry, you are too young to do anything fun');
}