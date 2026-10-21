"use strict";

// Q6 – Pyramid Pattern Generator
// Set a breakpoint on the inner loop and watch row, column, and pattern.
// `var` is function-scoped and reuses one binding; `let` is block-scoped.
// For this simple synchronous loop, both versions print the same pattern.

const promptLimit = process.argv[2];
let limit = promptLimit === undefined ? 5 : Number(promptLimit);

if (!Number.isInteger(limit) || limit < 1 || limit > 50) {
    console.log("Please provide a whole-number limit from 1 to 50. Using default 5.");
    limit = 5;
}

console.log(`=== Pyramid Pattern (limit: ${limit}) ===`);
for (let row = 1; row <= limit; row++) {
    let pattern = "";
    for (let column = 1; column <= row; column++) {
        pattern += "* ";
    }
    console.log(pattern.trimEnd());
}

// var comparison: same visible output for this loop.
console.log("\n=== Same Pattern Using var ===");
for (var varRow = 1; varRow <= limit; varRow++) {
    var varPattern = "";
    for (var varColumn = 1; varColumn <= varRow; varColumn++) {
        varPattern += "* ";
    }
    console.log(varPattern.trimEnd());
}

// Strict-mode check: uncommenting `loopCounter = 0;` would throw ReferenceError,
// because loopCounter is undeclared. Always use let, const, or var.
