const prompt = require('prompt-sync')();
// To take a command-line argument n and prints a table of the powers of 2 that are less than or equal to 2^n till 256 is reached
{
    let number = prompt("Enter a number ");
    let index = 0;
    while (index <= number && Math.pow(2, index) <= 256) {
        console.log(`${index} - ${Math.pow(2, index)}`);
        index++;
    }
}

// To Find the Magic Number
{
    let number = prompt("Enter a number between 1 to 100 :");
    let mid = number / 2;
    let start = 0;
    let end = 100;
    while (mid != number) {
        if (mid == number)
            console.log("Number is: " + mid);
        else if (mid > number) {
            end = mid;
            mid = Math.floor((start + end) / 2);
        }
        else if (mid < number) {
            start = mid;
            mid = Math.floor((start + end) / 2);
        }
    }
    console.log(mid);
}

// Flip Coin problem till either Heads or Tails wins 11 times
{
    const HEAD = 0;
    let headCount = 0;
    let tailCount = 0;
    while (headCount != 11 && tailCount != 11) {
        let toss = Math.floor(Math.random() * 10) % 2;
        if (toss == HEAD)
            headCount++;
        else
            tailCount++;
    }
    console.log("Head Count " + headCount);
    console.log("Tail Count " + tailCount);
}

{
    const BET_LOST = 0;
    let balance = 100;
    let winCount = 0;
    let totalBets = 0;

    while (balance > 0 && balance < 200) {
        let bet = Math.floor(Math.random() * 10) % 2;
        if (bet == BET_LOST)
            balance--;
        else {
            balance++;
            winCount++;
        }
        totalBets++;
    }
    console.log("Total bets = " + totalBets);
    console.log("Total wins = " + winCount);
    console.log("Final balance = " + balance);
}