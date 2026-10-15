// Q7: Smart Guessing Game
// A random secret number is generated from 1 through 50.
const secretNumber = Math.floor(Math.random() * 50) + 1;

// Test value: change userGuess to try different guesses.
const userGuess = 24;

console.log(`Your guess: ${userGuess}`);
console.log(`Secret number (for testing): ${secretNumber}`);

if (userGuess === secretNumber) {
    console.log("Correct guess!");
} else {
    // Check whether the guess is no more than 3 away from the secret number.
    if (Math.abs(userGuess - secretNumber) <= 3 && userGuess >= 1 && userGuess <= 50) {
        console.log("Very close!");
    } else if (userGuess > secretNumber) {
        console.log("Too high");
    } else {
        console.log("Too low");
    }
}
