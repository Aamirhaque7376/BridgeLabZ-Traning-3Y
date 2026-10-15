// Q9: Odd–Even Number Analyzer

const numbers = [];
const results = [];

// Fill an array with numbers from 1 through 30.
for (let number = 1; number <= 30; number++) {
    numbers.push(number);
}

// Classify every number according to the required rules.
for (const number of numbers) {
    let result;

    if (number % 3 === 0 && number % 5 === 0) {
        result = "FizzBuzz";
    } else if (number % 2 === 0) {
        result = "Even";
    } else {
        result = "Odd";
    }

    results.push(`${number}: ${result}`);
}

console.log("===== Number Analyzer (1–30) =====");
console.log(results.join("\n"));
console.log("==================================");
