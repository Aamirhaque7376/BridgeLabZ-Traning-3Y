"use strict";

// Q9 – JSON Audit
// Debug tip: put a breakpoint inside catch and watch lineNumber, rawEntry, and error.message.
// JSON.parse throws SyntaxError for malformed JSON; missing keys are validation errors.

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const cleanData = [];
const auditErrors = [];
const under18Users = [];

for (let index = 0; index < rawData.length; index++) {
    const lineNumber = index + 1;
    const rawEntry = rawData[index];

    try {
        const parsed = JSON.parse(rawEntry);

        if (!Object.prototype.hasOwnProperty.call(parsed, "user")) {
            throw new Error("Missing required key: user");
        }
        if (!Object.prototype.hasOwnProperty.call(parsed, "age")) {
            throw new Error("Missing required key: age");
        }

        const age = Number(parsed.age);
        if (!Number.isFinite(age)) {
            throw new Error("Age must be a valid number.");
        }

        const cleanEntry = { ...parsed, age };
        cleanData.push(cleanEntry);
        if (age < 18) under18Users.push(cleanEntry);
        console.log(`Line ${lineNumber}: VALID`, cleanEntry);
    } catch (error) {
        auditErrors.push({ lineNumber, message: error.message, rawEntry });
        console.log(`Line ${lineNumber}: ERROR - ${error.message}`);
    }
}

console.log("\n=== JSON Audit Summary ===");
console.log("Clean data:", cleanData);
console.log("Errors:", auditErrors);
console.log("Under-18 users:", under18Users);
console.log(`Valid entries: ${cleanData.length}; Failed entries: ${auditErrors.length}`);

// Control flow: JSON.parse/validation errors jump directly to catch; the loop then
// continues with the next line rather than stopping the entire audit.
