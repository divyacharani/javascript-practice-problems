//To read a single digit number and write the number in word 
const prompt = require('prompt-sync')();
let number = prompt("Enter a single digit number ");
let word;
if (number >= 0 && number <= 9) {
    if (number == 0)
        word = "Zero";
    else if (number == 1)
        word = "One";
    else if (number == 2)
        word = "Two";
    else if (number == 3)
        word = "Three";
    else if (number == 4)
        word = "Four";
    else if (number == 5)
        word = "Five";
    else if (number == 6)
        word = "Six";
    else if (number == 7)
        word = "Seven";
    else if (number == 8)
        word = "Eight";
    else if (number == 9)
        word = "Nine";
    console.log(`Number is ${number} and word is ${word}`);
}
else
    console.log("Invalid!!");

// To read a Number and Display the week day
let weekNumber = prompt("Enter Weekday Number ");
let weekDay;
if (weekNumber >= 1 && weekNumber <= 7) {
    if (weekNumber == 1)
        weekDay = "Sunday";
    else if (weekNumber == 2)
        weekDay = "Monday";
    else if (weekNumber == 3)
        weekDay = "Tuesday";
    else if (weekNumber == 4)
        weekDay = "Wednesady";
    else if (weekNumber == 5)
        weekDay = "Thursday";
    else if (weekNumber == 6)
        weekDay = "Friday";
    else if (weekNumber == 7)
        weekDay = "Saturday";
    console.log(`Weekday number ${weekNumber} weekday ${weekDay} `);
}
else
    console.log("Invalid!!");

// To read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred etc
let num = prompt("Enter a number ");
if (num == 1)
    console.log("unit");
else if (num == 10)
    console.log("Ten");
else if (num == 100)
    console.log("Hundred");
else if (num == 1000)
    console.log("Thousand");
else if (num == 10000)
    console.log("Ten thousand");
else
    console.log("Invalid!!");

// To do arithmetic operations and find max, min
let number1 = prompt("Enter first number ");
let number2 = prompt("Enter second number ");
let number3 = prompt("Enter third number ");

let operation1 = number1 + number2 * number3;
let operation2 = number1 % number2 + number3;
let operation3 = number3 + number1 / number2;
let operation4 = number1 * number2 + number3;

let maximum = Math.max(operation1, operation2, operation3, operation4);
let minimum = Math.min(operation1, operation2, operation3, operation4);

console.log("Maximum is " + maximum);
console.log("Minimum is " + minimum);