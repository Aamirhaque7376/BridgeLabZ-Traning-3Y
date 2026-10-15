// Q8: Employee Salary Projection
// Sample current salary and annual increment rate.
let currentSalary = 30000;
const annualIncrementRate = 8; // percent
const salaryReport = [];

for (let year = 1; year <= 5; year++) {
    currentSalary *= 1 + annualIncrementRate / 100; // Apply yearly increment.
    currentSalary = Math.round(currentSalary); // Round to the nearest rupee.

    salaryReport.push({
        Year: year,
        "Projected Salary (₹)": currentSalary
    });
}

console.table(salaryReport);
