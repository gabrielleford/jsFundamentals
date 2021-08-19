/* 
TYPES

1-grammarAndTypes
    05-types.js
*/

// Boolean
var on = true;
console.log(on);

let off = false;
console.log(off);

// boolean can represent: true/false, yes/no, on/off, 0/1

// Undefined
/*
Undefined usually means a variable has been declared, but it's not been assigned a value
*/
let grass;
console.log(grass);

var undef = undefined;
console.log(undef);

// Null
/*
Null means a variable has been declared and assigned a value of null
*/
var empty = null;
console.log(empty);

/*
Null and undefined both represent variables with no value inside. Think of it this way -- null values are for gag gifts that are boxes intentionally given with nothing inside (because that's the gag). Undefined values are gifts given when the person giving the gift has forgotten to put the gift inside (oops!).
*/

// Numbers
let myLiteralAge = 28
console.log(myLiteralAge);

let precise = 999999999999999;
console.log(precise);

let rounded = 9999999999999999;
console.log(rounded);

let notQuite = 0.2 + 0.1;
console.log(notQuite);

let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard);

// Strings
/*
String is any value within quotes; JS spits out the value within the quotes
*/
let stringOne = "double quotes";
let stringTwo = 'single quotes';
console.log(stringOne, stringTwo);

// string concatenation vs addition
let first = 1050 + 100;
let second = '1050' + '100';
console.log(first);
console.log(second);

let third = 1050 + 'abcde'; // type coercion
console.log(third);
console.log(typeof third);

// Interpolation
// lets you use strings with dynamic content (they require backticks)
// Ex. 1:
let age = 28;
let string = `my age is: ${age}`;
console.log(string);