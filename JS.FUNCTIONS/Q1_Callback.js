// Q1: Callback Function
// A callback is a function passed to another function as an argument.

function showEndMessage() {
    console.log("Welcome to the course!");
}

function greetUser(name, callback) {
    console.log(`Hello ${name}`);
    callback(); // Execute the callback after greeting the user.
}

// Demonstrating callback flow:
greetUser("Aamir", showEndMessage);
