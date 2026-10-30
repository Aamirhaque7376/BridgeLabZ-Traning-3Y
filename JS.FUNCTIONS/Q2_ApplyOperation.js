// Q2: Passing a callback function as an operation

function applyOperation(numbers, operation) {
    // map() calls operation once for every number and returns a new array.
    return numbers.map(operation);
}

const numbers = [1, 2, 3, 4];

// Double each number.
const doubledNumbers = applyOperation(numbers, function (number) {
    return number * 2;
});

// Square each number.
const squaredNumbers = applyOperation(numbers, function (number) {
    return number * number;
});

console.log("Original numbers:", numbers);
console.log("Doubled numbers:", doubledNumbers);
console.log("Squared numbers:", squaredNumbers);
