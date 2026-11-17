// Q7. Banking Application (private field + error handling)

class BankAccount {
    #balance;

    constructor(initialBalance = 0) {
        if (initialBalance < 0) {
            throw new Error("Initial balance cannot be negative.");
        }
        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (typeof amount !== "number" || !Number.isFinite(amount) || amount <= 0) {
            throw new Error("Deposit amount must be a positive number.");
        }

        this.#balance += amount;
        return this.#balance;
    }

    withdraw(amount) {
        if (typeof amount !== "number" || !Number.isFinite(amount) || amount <= 0) {
            throw new Error("Withdrawal amount must be a positive number.");
        }

        if (amount > this.#balance) {
            throw new Error("Insufficient balance. Withdrawal cannot be completed.");
        }

        this.#balance -= amount;
        return this.#balance;
    }

    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount(1000);

console.log(`Opening balance: Rs. ${account.getBalance()}`);
console.log(`After deposit: Rs. ${account.deposit(500)}`);

try {
    console.log(`After withdrawal: Rs. ${account.withdraw(300)}`);
} catch (error) {
    console.log(`Transaction failed: ${error.message}`);
}

try {
    account.withdraw(5000); // Invalid: more than the available balance.
} catch (error) {
    console.log(`Transaction failed: ${error.message}`);
}

console.log(`Final balance: Rs. ${account.getBalance()}`);

// console.log(account.#balance); // SyntaxError: private field cannot be accessed here.
