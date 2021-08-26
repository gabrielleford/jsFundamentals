/*
HOISTING

1-grammarAndTypes
    04-hoisting.js
*/


// ex. 1
console.log(scissors);
var scissors = 'blue';

// ex. 1 breakdown:
var scissors;
console.log(scissors);
scissors = 'blue';

// ex. 2
function hoistTest() {
    console.log(testVar);
    var testVar = 10;
    console.log(testVar);
}

hoistTest();

// ex. 2 breakdown:
function hoistTest() {
    var testVar;
    console.log(testVar);
    testVar = 10;
    console.log(testVar);
}

hoistTest();