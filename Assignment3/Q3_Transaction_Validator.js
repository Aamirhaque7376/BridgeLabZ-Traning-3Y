"use strict";

// Q3 – Transaction Validator
// Debug tip: set a breakpoint on `if (transaction === null)` and watch
// transaction, index, validTransactions, and invalidTransactions.

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const validTransactions = [];
const invalidTransactions = [];

class TransactionValidationError extends Error {
    constructor(category, message) {
        super(message);
        this.name = "TransactionValidationError";
        this.category = category;
    }
}

for (let index = 0; index < transactions.length; index++) {
    const transaction = transactions[index];

    try {
        if (transaction === null) {
            throw new TransactionValidationError("null", "Transaction entry is null.");
        }
        if (transaction.id === undefined || transaction.amount === undefined) {
            throw new TransactionValidationError("missing", "Transaction is missing id or amount.");
        }
        if (transaction.amount < 0) {
            throw new TransactionValidationError("negative", "Transaction amount cannot be negative.");
        }

        validTransactions.push(transaction);
        console.log(`Transaction ${transaction.id}: VALID`);
    } catch (error) {
        invalidTransactions.push({
            index: index + 1,
            category: error.category || "unexpected",
            message: error.message,
            transaction
        });
        console.log(`Transaction at position ${index + 1}: INVALID [${error.category || error.name}] ${error.message}`);
    }
}

console.log("\n=== Final Transaction Report ===");
console.log("Valid transactions:", validTransactions);
console.log("Invalid transactions:", invalidTransactions);
console.log(`Successful: ${validTransactions.length}`);
console.log(`Failed: ${invalidTransactions.length}`);
