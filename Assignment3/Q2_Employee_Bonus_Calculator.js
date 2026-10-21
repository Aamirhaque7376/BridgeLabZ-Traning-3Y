"use strict";

// Q2 – Employee Bonus Calculator
// Strict mode prevents accidental creation of global variables.

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

console.log("=== Employee Bonus Report ===");

for (const employee of employees) {
    try {
        if (!employee || !employee.name || employee.salary === undefined || employee.years === undefined) {
            throw new Error("Employee data is missing a required property.");
        }

        const salary = Number(employee.salary);
        const years = Number(employee.years);

        if (!Number.isFinite(salary) || !Number.isFinite(years)) {
            throw new TypeError("Salary or years could not be converted to a valid number.");
        }

        const bonusRate = years > 3 ? 0.10 : 0.05;
        const bonus = salary * bonusRate;
        const totalPay = salary + bonus;

        console.log(`${employee.name}: Salary ₹${salary.toFixed(2)}, Experience ${years} years, Bonus ${(bonusRate * 100).toFixed(0)}% = ₹${bonus.toFixed(2)}, Total ₹${totalPay.toFixed(2)}`);
    } catch (error) {
        console.log(`Employee processing error: ${error.message}`);
    }
}

// Hoisting/debug note: const and let are block-scoped and cannot be used before declaration.
// No undeclared variables are assigned in this strict-mode program.
