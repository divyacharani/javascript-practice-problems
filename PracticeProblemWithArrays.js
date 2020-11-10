const prompt = require('prompt-sync')();
// Find the 2nd largest and the 2nd smallest element without sorting the array
{
    let numArray = new Array();
    for (index = 1; index < 10; index++) {
        let num = Math.floor((Math.random() * (999 - 100 + 1)) + 100);
        numArray.push(num);
    }
    console.log("Array is " + numArray);
    let firstMax = numArray[0];
    let secondMax = numArray[0];
    let firstMin = numArray[0];
    let secondMin = numArray[0];
    for (let number of numArray) {
        if (number > firstMax) {
            secondMax = firstMax;
            firstMax = number;
        }
        else if (number > secondMax) {
            secondMax = number;
        }
        if (number < firstMin) {
            secondMin = firstMin;
            firstMin = number;
        }
        else if (number < secondMin) {
            secondMin = number;
        }
    }
    console.log("Second Maximum : " + secondMax + "  Second Minimum : " + secondMin);

    // Extend the above program to sort the array and then find the 2nd largest and the 2nd smallest element
    let secondMinimum = numArray.sort()[1];
    let secondMaximum = numArray.sort()[numArray.length - 2];
    console.log("With Sorting ");
    console.log("Second Maximum : " + secondMaximum + "  Second Minimum : " + secondMinimum);
}

// Prime Factorization Program to store all the Prime Factors of a number n into an array
{
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
        }
        return false;
    }

    let input = Number(prompt("Enter a number "));
    let primeFactors = new Array();
    for (let index = 2; index <= input; index++) {
        if (input % index == 0 && isPrime(index))
            primeFactors.push(index);
    }
    console.log("Prime factors are " + primeFactors);
}

// To show Sum of three Integer such that they adds to ZERO
{
    let numArr = new Array();
    let numOne = Number(prompt("Enter first number "));
    let numTwo = Number(prompt("Enter second number "));
    numArr.push(numOne);
    numArr.push(numTwo);
    function sum(total, num) {
        return total + num;
    }
    let numThree = 0 - numArr.reduce(sum, 0);
    console.log("The third number to make sum zero is " + numThree);
}

// Range from 0 – 100, find the digits that are repeated twice like 33, 77, etc and store them in an array
{
    function isRepeating(number) {
        let remainder = number % 10;
        number = Math.floor(number / 10);
        if (remainder == number && number != 0)
            return true;
        return false;
    }
    let start = Number(prompt("Enter a start number "));
    let end = Number(prompt("Enter a end number "));
    repeatedArray = new Array();
    for (index = start; index < end; index++) {
        if (isRepeating(index))
            repeatedArray.push(index);
    }
    console.log("Numbers that has repeating digits are " + repeatedArray);
}