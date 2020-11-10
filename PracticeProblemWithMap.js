// Die rolling
{
    let dieRollMap = new Map();
    for (let index = 1; index <= 6; index++)
        dieRollMap.set(index, 0);
    let counter = 0;
    while (counter != 10) {
        let dieNo = Math.floor((Math.random() * 6) + 1);
        dieRollMap.set(dieNo, dieRollMap.get(dieNo) + 1);
        counter = dieRollMap.get(dieNo);
    }
    console.log(dieRollMap);
    let dieRollArray = Array.from(dieRollMap.entries());
    let maxValue = dieRollArray.reduce((max, current) => Math.max(max, current[1]), dieRollArray[0][1])
    let minValue = dieRollArray.reduce((min, current) => Math.min(min, current[1]), dieRollArray[0][1])
    console.log("Minimum number ");
    console.log(dieRollArray.filter(current => current[1] == minValue));
    console.log("Maximum number ");
    console.log(dieRollArray.filter(current => current[1] == maxValue));
}

// To generate a birth month of 50 individuals between the year 92 & 93. Find all the individuals having birthdays in the same month
{
    let birthMonthMap = new Map();
    for (let index = 1; index <= 12; index++)
        birthMonthMap.set(index, 0);
    for (let index = 1; index <= 50; index++) {
        let birthMonth = Math.floor((Math.random() * 12) + 1);
        birthMonthMap.set(birthMonth, birthMonthMap.get(birthMonth) + 1);
    }
    console.log("Birth month map is ");
    console.log(birthMonthMap);
}