const prompt = require('prompt-sync')();
// To take a command-line argument n and prints a table of the powers of 2 that are less than or equal to 2^n
{
    let number = Number(prompt("Enter a number "));
    for (let index = 0; index <= number; index++) {
        console.log(`${index} - ${Math.pow(2, index)}`);
    }
}

// To  take a command-line argument n and print the nth harmonic number
{
    let number = Number(prompt("Enter a number "));
    let harmonicNumber = 0;
    for (let index = 1; index <= number; index++) {
        harmonicNumber += 1 / index;
    }
    console.log("Harmonic Number is " + harmonicNumber);
}

// To take a input and determine if the number is a prime
{
    let number = Number(prompt("Enter a number "));
    if (number >= 2) {
        let flag = 0;
        for (let index = 2; index <= number / 2; index++) {
            if (number % index == 0) {
                flag = 1;
                break;
            }
        }
        if (flag == 1)
            console.log("Not a prime number");
        else
            console.log("Prime number");
    }
    else
        console.log("Invalid!!");
}

// To take a range of number as input and output the Prime Numbers in that range
{
    let startNumber = Number(prompt("Enter starting number "));
    let endNumber = Number(prompt("Enter ending number "));
    if (startNumber >= 0 && startNumber < endNumber) {
        for (let number = startNumber; number <= endNumber; number++) {
            let flag = 0;
            for (let index = 2; index <= number / 2; index++) {
                if (number % index == 0) {
                    flag = 1;
                    break;
                }
            }
            if (flag == 0 && number != 1)
                console.log(number);
        }
    }
    else
        console.log("Invalid!!");
}

// To compute a factorial of a number taken as input
{
    let number = Number(prompt("Enter a number "));
    let factorial = 1;
    for (let index = 1; index <= number; index++) {
        factorial = factorial * index;
    }
    console.log(`Factorial of ${number} is ${factorial}`);
}

// To compute Factors of a number N using prime factorization method
{
    let number = Number(prompt("Enter a number "));
    console.log("Prime factors are ");
    for (let factor = 2; factor * factor <= number; factor++) {
        let count = 0;
        for (let index = 2; index < factor; index++) {
            if (factor % index == 0)
                count++;
        }
        if (count == 0 && number % factor == 0)
            console.log(factor);
    }
}