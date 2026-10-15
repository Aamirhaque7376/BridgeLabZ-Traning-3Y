// Q3: Monthly Expense Tracker
// Sample monthly expenses in rupees; edit these values as needed.
const expenses = {
    food: 4500,
    travel: 1200,
    rent: 7000,
    bills: 1500,
    leisure: 1000
};

let total = 0;

// Add each category expense to the running total.
for (const category in expenses) {
    total += expenses[category];
}

const average = total / Object.keys(expenses).length;
const taxRate = 0.10;
const tax = total * taxRate;
total += tax; // Assignment operator adds the 10% tax.

console.log(`Subtotal: ₹${(total - tax).toFixed(2)}`);
console.log(`Average expense per category: ₹${average.toFixed(2)}`);
console.log(`Tax (10%): ₹${tax.toFixed(2)}`);
console.log(`Final amount after tax: ₹${total.toFixed(2)}`);
