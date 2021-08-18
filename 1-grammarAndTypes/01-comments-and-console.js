/* 
COMMENTS

1-grammarAndTypes
    01-comments-and-console.js
*/

// value of a comment: 
// communicates to anyone reading our code

// types of comments:
// 1) single line comment

/*
2) multi-line comments
*/

// console.log
// outputs some message to the console
console.log('this is a console.log message');

console.log('you can separate parts of a console message with commas,', 'just like this!');

console.log(13,15,17,18);

// console log and debugging
// we can debug with console logs in 2 big ways:
// 1) we can check the status of some JS 'thing'
// 2) we can check a process we've built with repeated console.log messages

// ex. 1:
var sampleName = 'Gabrielle';
console.log(sampleName);

// ex. 2:
var sampleNum = 1;
console.log(sampleNum);
sampleNum++;
console.log(sampleNum);
sampleNum++; 
console.log(sampleNum);