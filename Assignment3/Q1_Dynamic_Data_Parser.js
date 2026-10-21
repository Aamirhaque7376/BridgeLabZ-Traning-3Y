"use strict";

// Q1 – Dynamic Data Parser
// Number() is explicit conversion. Invalid numeric conversions produce NaN.
// Boolean("false") is true because every non-empty string is truthy.

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];
const validNumericData = [];
const invalidNumericData = [];

console.log("=== Dynamic Data Parser Report ===");

for (let index = 0; index < apiData.length; index++) {
    const original = apiData[index];
    const numberValue = Number(original);
    const booleanValue = Boolean(original);
    const stringValue = String(original);
    const isValidNumber = original !== undefined &&
        !(typeof original === "string" && original.trim() === "") &&
        Number.isFinite(numberValue) &&
        !(typeof original === "string" && original.trim() === "NaN");

    console.log(`\nItem ${index + 1}`);
    console.log(`Original: ${String(original)} (type: ${typeof original})`);
    console.log(`Number: ${numberValue}; Boolean: ${booleanValue}; String: "${stringValue}"`);

    if (isValidNumber) {
        validNumericData.push({ original, numberValue });
        console.log("Status: VALID numeric value");
    } else {
        invalidNumericData.push({ index: index + 1, original, numberValue });
        console.log("Status: INVALID numeric value");
    }
}

console.log("\n=== Valid Numeric Data ===");
console.log(validNumericData);
console.log("\n=== Invalid Numeric Data ===");
console.log(invalidNumericData);
console.log(`Valid count: ${validNumericData.length}`);
console.log(`Invalid count: ${invalidNumericData.length}`);

// Note: Number(null) is 0, so null is considered a valid numeric conversion.
// The string "true" and "false" are invalid numbers, despite being meaningful Boolean text.
