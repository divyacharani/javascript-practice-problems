const prompt = require('prompt-sync')();
// To find degF or degC based on their Conversion Selection
function getDegC(degF) {
    return (degF - 32) * (5 / 9);
}
function getDegF(degC) {
    return (degC * (9 / 5)) + 32;
}

console.log("Enter\n1. Convert to degC\n2. Convert to degF");
let choice = Number(prompt("Enter your choice : "));
let input = 0;
switch (choice) {
    case 1: input = Number(prompt("Enter input between 32deF and 212degF "));
        console.log(getDegC(input));
        break;
    case 2: input = Number(prompt("Enter input between 0degC and 100degC "));
        console.log(getDegF(input));
        break;
    default: console.log("Invalid!!");

}

// function to check if the two numbers are Palindromes
function isPalindrome(number1, number2) {
    let reversedNumber = 0;
    while (number1 > 0) {
        let remainder = number1 % 10;
        reversedNumber = reversedNumber * 10 + remainder;
        number1 = Math.floor(number1 / 10);
    }
    if (reversedNumber == number2)
        return true;
    else
        return false;
}
let numberOne = Number(prompt("Enter first number "));
let numberTwo = Number(prompt("Enter second number "));
if (isPalindrome(numberOne, numberTwo))
    console.log("Two numbers are Palindromes");
else
    console.log("Two numbers are not Palindromes");

// To Take a number from user and check if the number is a Prime then show that its palindrome is also prime
function isPrime(number) {
    if (number >= 2) {
        let flag = 0;
        for (let index = 2; index <= number / 2; index++) {
            if (number % index == 0) {
                flag = 1;
                break;
            }
        }
        if (flag == 0)
            return true;
        else
            return false;
    }
    else
        return false;
}

function getPalindrome(number) {
    let reversedNumber = 0;
    while (number > 0) {
        let remainder = number % 10;
        reversedNumber = reversedNumber * 10 + remainder;
        number = Math.floor(number / 10);
    }
    return reversedNumber;
}

let userInput = prompt("Enter a number ");
if (isPrime(userInput)) {
    console.log("It is a prime number");
    let palindrome = getPalindrome(userInput);
    console.log("Palindrome number is " + palindrome);
    if (isPrime(palindrome))
        console.log("Palindrome number is also a prime number");
}
else
    console.log("It is not a prime number");