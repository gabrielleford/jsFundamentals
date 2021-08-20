/*
COMPARISON OPERATORS

5-expressionsAndOperators
    02-comparisonOperators.js
*/

// equality comparison operator
console.log('3' == 3);
console.log(4 == 4);
console.log(3 == '4');

// strict equality comparison operator
console.log(3 === 3);
console.log('3' === 3);

// not equal comparison operator
console.log('3' != 4);
console.log('3' != 3);

// strict not equal comparison operator
console.log('3' !== 3);
console.log(3 !== 3);

// greater than
console.log(3 > 2);
console.log(2 > 3);

// less than
console.log(2 < 3);
console.log(3 < 2);

// greater than or equal to
console.log(3 >= 2);
console.log(3 >= 3);

// less than or equal to
console.log(2 <= 3);
console.log(3 <= 2);

// And (both expressions on either side of the operator for 'And' to return true)
console.log(1 < 2 && 3 > 0);
console.log(2 < 1 && 3 > 0);

// Or (either expression on one side of the operator must be true for 'Or' to return true)
console.log(1 < 2 || 3 < 0);
console.log(2 < 1 || 3 < 0);

let obj = {key: 'test'}
console.log(obj == {key: 'test'});
console.log(obj == obj);

let arr = [1, 2, 3, 4];
console.log(arr == [1, 2, 3, 4]);
console.log(arr == arr);

console.log('--------------------------------------');
let num1 = 5;
let num2 = '5';
let num3 = 6;
let num4 = 4;

console.log('Equal Operator:');
console.log(num1 == num2);
console.log(num1 == num3);
console.log(num1 == num4);
console.log(num1 == 5);
console.log('--------------------------------------');

console.log('Not Equal Operator:');
console.log(num1 != num2);
console.log(num1 != num3);
console.log(num1 != num4);
console.log(num1 != 5);
console.log('--------------------------------------');

console.log('Strict Equal Operator:');
console.log(num1 === num2);
console.log(num1 === num3);
console.log(num1 === num4);
console.log(num1 === 5);
console.log('--------------------------------------');

console.log('Strict Not Equal Operator:');
console.log(num1 !== num2);
console.log(num1 !== num3);
console.log(num1 !== num4);
console.log(num1 !== 5);
console.log('--------------------------------------');

console.log('Greater Than Operator:');
console.log(num1 > num2);
console.log(num1 > num3);
console.log(num1 > num4);
console.log(num1 > 5);
console.log('--------------------------------------');

console.log('Greater Than or Equal Operator:');
console.log(num1 >= num2);
console.log(num1 >= num3);
console.log(num1 >= num4);
console.log(num1 >= 5);
console.log('--------------------------------------');

console.log('Less Than Operator:');
console.log(num1 < num2);
console.log(num1 < num3);
console.log(num1 < num4);
console.log(num1 < 5);
console.log('--------------------------------------');

console.log('Less Than or Equal Operator:');
console.log(num1 <= num2);
console.log(num1 <= num3);
console.log(num1 <= num4);
console.log(num1 <= 5);
console.log('--------------------------------------');

console.log('AND Operator:');
console.log(num1 <= num2 && num1 <= num3);
console.log(num1 <= num3 && num1 <= num4);
console.log('--------------------------------------');

console.log('OR Operator:');
console.log(num1 >= num4 || num1 <= num3);
console.log(num1 <= num4 || num1 <= num3);
console.log(num1 <= num4 || num1 >= num3);

