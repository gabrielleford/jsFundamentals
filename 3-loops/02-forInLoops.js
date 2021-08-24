/*
FOR IN LOOPS

3-loops
    02-forInLoops.js
 */

let student = {name: 'Peter', awesome: true, degree: 'javascript', week: 1};

for (item in student) {
    console.log(item);
    console.log(student[item]);
}

let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll']

for (cat in catArray) {
    console.log(cat);
    console.log(catArray[cat]);
}

// let's write a for-in loop that capitalizes the first letter of a name
let myName = 'gAbrIElle';
let capName;
for (n in myName) {
    if (n == 0) {
        capName = myName[n].toUpperCase();
    } else {
        capName += myName[n].toLocaleLowerCase();
    }
}
console.log(capName);

