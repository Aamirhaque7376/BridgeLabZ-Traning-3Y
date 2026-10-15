// Q2: Multi-Type Data Summary
// Create sample values representing different JavaScript data types.
const userName = "Aamir";
const userAge = 21;
const isStudent = true;
const subjects = ["JavaScript", "Java", "DBMS"];
const user = { name: "Aamir", course: "B.Tech CSE" };
const middleName = null;
let optionalValue;

// Build one report and display it with a single console.table() statement.
// typeof null is "object" in JavaScript, so the report labels it as null explicitly.
const report = [
    { Label: "userName", Value: userName, Type: typeof userName },
    { Label: "userAge", Value: userAge, Type: typeof userAge },
    { Label: "isStudent", Value: isStudent, Type: typeof isStudent },
    { Label: "subjects", Value: JSON.stringify(subjects), Type: Array.isArray(subjects) ? "array" : typeof subjects },
    { Label: "user", Value: JSON.stringify(user), Type: typeof user },
    { Label: "middleName", Value: middleName, Type: middleName === null ? "null" : typeof middleName },
    { Label: "optionalValue", Value: String(optionalValue), Type: typeof optionalValue }
];

console.table(report);
