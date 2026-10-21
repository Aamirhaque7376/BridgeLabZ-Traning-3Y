"use strict";

// Q7 – Smart Calculator
const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25;
const num2 = 0;

class InvalidOperationError extends Error {
    constructor(operation) {
        super(`Operation "${operation}" is not recognized.`);
        this.name = "InvalidOperationError";
    }
}
class CalculationError extends Error {
    constructor(message) {
        super(message);
        this.name = "CalculationError";
    }
}

function calculate(operation, first, second) {
    switch (operation) {
        case "add": return first + second;
        case "divide":
            if (second === 0) throw new CalculationError("Cannot divide by zero.");
            return first / second;
        case "power": return first ** second;
        case "root":
            if (first < 0) throw new CalculationError("Cannot find the real square root of a negative number.");
            return Math.sqrt(first);
        case "subtract": return first - second;
        default: throw new InvalidOperationError(operation);
    }
}

console.log("=== Smart Calculator Summary ===");
for (const operation of operations) {
    try {
        const result = calculate(operation, num1, num2);
        console.log(`${operation.toUpperCase().padEnd(8)} | ${num1} and ${num2} | Result: ${result}`);
    } catch (error) {
        console.log(`${operation.toUpperCase().padEnd(8)} | ERROR: ${error.name} - ${error.message}`);
    }
}

// Demonstrate custom invalid-operation error:
try {
    calculate("multiply", num1, num2);
} catch (error) {
    console.log(`UNKNOWN  | ERROR: ${error.name} - ${error.message}`);
}
