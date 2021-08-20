let weather = 75;
if(weather < 70){
    console.log('wear a jacket');
} else {
    console.log('No jacket necessary');
}

// you can blend complex conditionals and if-else statements based upon your need:
if(weather > 70 && typeof weather === 'number') {
    console.log('this weather is amazing')
} else {
    console.log('Either the temperature is cool, the variable is not a string, or both')
}

let age = 17;
if(age >= 18) {
    console.log('You can vote!');
} else {
    console.log('You can\'t vote');
}

let elevatorUp = true;
let elevatorDown = true;
let elevatorBroken = true;
let elevatorStuckWhileWeAreOnIt = true;
let elevatorNumber = 13;
if(elevatorUp === true) {
    console.log('Going up');
} else {
    console.log('Going down');
}

if(elevatorBroken) {
    console.log('Bummer. Let\'s take the stairs.')
}  else{
    console.log('Which floor?');
}

if(elevatorStuckWhileWeAreOnIt) {
    console.log('Oh no! We\'re stuck!');
}  else {
    console.log('This elevator is fast.')
}

if(elevatorBroken && elevatorDown) {
    console.log('I hope this thing doesn\'t start flying down!');
} else {
    console.log('How long are you in town for?');
}

if(elevatorBroken || elevatorStuckWhileWeAreOnIt) {
    console.log('Hi Bob, this is Bob with maintenance. How can I help?');
}

if(elevatorNumber === 13 && elevatorStuckWhileWeAreOnIt) {
    console.log('This is not our lucky day!')
}

let health = 450;
let strength = 1000;
let stamina = 4000;
let hasWeapon = true;
let hasHealthPotion = false;

if(health >= 2000 || hasWeapon || strength >= 2000) {
    console.log('Prepare to fight!');
} else {
    console.log('Run away!');
}

if(health <= 2000 && hasHealthPotion) {
    console.log('Quick! Heal yourself!');
} else {
    console.log('Run away!');
}

if(stamina >= 2000) {
    console.log('You successfully evaded the monsters!');
} else {
    console.log('The monsters caught you! Game over!');
}

let bankAccount = 8000;
let debt = 4200;
let difference = bankAccount - debt;

console.log('I have \$' + bankAccount + ' in my bank account, and I am \$' + debt + ' in debt.');

if(bankAccount - debt > 700) {
    console.log('I have some extra money. I should pay off my debt. I\'ll have \$' + difference + ' leftover.');
} else {
    console.log('It probably isn\'t a good time to pay off my debt.');
}