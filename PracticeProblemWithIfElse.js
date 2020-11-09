//To read 5 Random 3 Digit values and then outputs the minimum and the maximum value
let number1 = Math.floor((Math.random() * (999 - 100 + 1)) + 100);
let number2 = Math.floor((Math.random() * (999 - 100 + 1)) + 100);
let number3 = Math.floor((Math.random() * (999 - 100 + 1)) + 100);
let number4 = Math.floor((Math.random() * (999 - 100 + 1)) + 100);
let number5 = Math.floor((Math.random() * (999 - 100 + 1)) + 100);
console.log("Numbers are " + number1 + " " + number2 + " " + number3 + " " + number4 + " " + number5);

let maximum = number1;
let minimum = number1;

if (number2 > maximum)
    maximum = number2;
else
    minimum = number2;
if (number3 > maximum)
    maximum = number3;
else
    minimum = number3;
if (number4 > maximum)
    maximum = number4;
else
    minimum = number4;
if (number5 > maximum)
    maximum = number5;
else
    minimum = number5;

console.log("Maximum number is " + maximum + "  Minimum number is " + minimum);

// To take day and month from the command line and prints true if day of month is between March 20 and June 20, false otherwise
const prompt = require('prompt-sync')();
let day = prompt("Enter Day : ");
let month = prompt("Enter Month : ");
if ((month == 3 && day > 20 && day <= 31) || (month == 4 && day >= 1 && day <= 30) || (month == 5 && day >= 1 && day <= 31) || (month == 6 && day >= 1 && day < 20))
    console.log("True");
else
    console.log("False");


//To take a year as input and outputs the Year is a Leap Year or not a Leap Year
let year = prompt("Enter Year : ");
if (year >= 1000 && year <= 9999) {
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0)
                console.log("Leap Year");
            else
                console.log("Not a Leap Year");
        }
        else
            console.log("Leap Year");
    }
    else
        console.log("Not a Leap Year");
}
else
    console.log("Not a four digit year!!");


// To simulate a coin flip and print out "Heads" or "Tails" accordingly
const HEAD = 0;
let toss = Math.floor((Math.random() * 10) % 2);
if (toss == HEAD)
    console.log("Heads");
else
    console.log("Tails");