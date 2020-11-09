// To read a single digit number and write the number in word using Case
const prompt = require('prompt-sync')();
let number = Number(prompt("Enter a single digit number "));
switch (number) {
    case 0: console.log("Zero");
        break;
    case 1: console.log("One");
        break;
    case 2: console.log("Two");
        break;
    case 3: console.log("Three");
        break;
    case 4: console.log("Four");
        break;
    case 5: console.log("Five");
        break;
    case 6: console.log("Six");
        break;
    case 7: console.log("Seven");
        break;
    case 8: console.log("Eight");
        break;
    case 9: console.log("Nine");
        break;
    default: console.log("Invalid!!");
}

// To read a number and display the week day
let weekDayNumber = Number(prompt("Enter number "));
switch (weekDayNumber) {
    case 1: console.log("Sunday");
        break;
    case 2: console.log("Monday");
        break;
    case 3: console.log("Wednesday");
        break;
    case 4: console.log("Thursday");
        break;
    case 5: console.log("Friday");
        break;
    case 6: console.log("Saturday");
        break;
    case 7: console.log("Sunday");
        break;
    default: console.log("Invalid!!");
}

//To read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred etc
let num = Number(prompt("Enter a number "));
switch (num) {
    case 1: console.log("Unit");
        break;
    case 10: console.log("Ten");
        break;
    case 100: console.log("Hundred");
        break;
    case 1000: console.log("Thousand");
        break;
    case 10000: console.log("Ten thousand");
        break;
    default: console.log("Invalid!!");
}

// To take user inputs and does unit conversion of different length units
console.log("Enter your choice\n1. Feet to Inch\n2. Inch to Feet \n3. Feet to Meter\n4. Meter to Feet");
let choice = Number(prompt("Enter your choice : "));
let input = Number(prompt("Enter your input "));
switch (choice) {
    case 1: console.log(input + " feet = " + (input * 12) + " inch");
        break;
    case 2: console.log(input + " inch = " + (input / 12) + " feet");
        break;
    case 3: console.log(input + " feet = " + (input * 0.3048) + " meter");
        break;
    case 4: console.log(input + " meter = " + (input * 3.281) + " feet");
        break;
    default: console.log("Invalid!!");
}