// To generate a single digit number using random function
let number = Math.floor(Math.random() * 10);
console.log("The single digit number is " + number);

//Use Random to get Dice Number between 1 to 6
let diceNumber = Math.floor(((Math.random() * 10) % 6) + 1);
console.log("The dice number is " + diceNumber);

//Add two Random Dice Number and Print the Result
let diceNumber1 = Math.floor(((Math.random() * 10) % 6) + 1);
let diceNumber2 = Math.floor(((Math.random() * 10) % 6) + 1);
let diceSum = diceNumber1 + diceNumber2;
console.log("The sum of dice numbers is " + diceSum);

// To read 5 Random 2 Digit values then find their sum and the average
let number1 = Math.floor((Math.random() * (99 - 10 + 1)) + 10);
let number2 = Math.floor((Math.random() * (99 - 10 + 1)) + 10);
let number3 = Math.floor((Math.random() * (99 - 10 + 1)) + 10);
let number4 = Math.floor((Math.random() * (99 - 10 + 1)) + 10);
let number5 = Math.floor((Math.random() * (99 - 10 + 1)) + 10);
let sum = number1 + number2 + number3 + number4 + number5;
let average = sum / 5;
console.log("Sum is " + sum + " Average is " + average);

// Unit conversion
let inch = 42;
let feet = inch / 12;
console.log("42 inch = " + feet + " feet");

let lengthInFeet = 60;
let breadthInFeet = 40;
let lengthInMeters = lengthInFeet * 0.3048; 
let breadthInMeters = breadthInFeet * 0.3048;
console.log("Plot size is " + lengthInMeters + " meters x " + breadthInMeters + " meters");

let numberOfPlots = 25;
let area = numberOfPlots * lengthInMeters * breadthInMeters;
console.log("Area of " + numberOfPlots + " plots is " + area);
