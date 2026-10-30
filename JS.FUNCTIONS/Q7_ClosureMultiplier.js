// Q7: Closure

function makeMultiplier(multiplier) {
    // The returned function remembers the multiplier variable
    // from the outer function, even after makeMultiplier has finished.
    return function (number) {
        return number * multiplier;
    };
}

const triple = makeMultiplier(3);
const double = makeMultiplier(2);

console.log(triple(5)); // 15
console.log(double(5)); // 10

// Closure: the inner function keeps access to variables in its
// outer function's lexical scope. Here, it remembers multiplier.
