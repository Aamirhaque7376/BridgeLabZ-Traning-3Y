// Q1: Scope Conflict Resolver

// Global variable: available throughout this file.
let bonus = 5000;

function calculateSalary(isPermanent) {
    // Local variable: available only inside this function.
    let salary = 40000;

    // Add the global bonus only when the employee is permanent.
    let totalSalary = salary;

    if (isPermanent === true) {
        totalSalary += bonus;
    }

    console.log(`Permanent employee: ${isPermanent}`);
    console.log(`Base salary: ₹${salary}`);
    console.log(`Bonus: ₹${isPermanent ? bonus : 0}`);
    console.log(`Total salary: ₹${totalSalary}`);
    console.log("------------------------------");
}

// Test both cases.
calculateSalary(true);
calculateSalary(false);

// Changing the local parameter does not change the global bonus.
console.log(`Global bonus remains: ₹${bonus}`);
