// Q6: Event-Based Counter Simulation

let count = 0;

function increment() {
    count++;
    console.log(`Increment click: count = ${count}`);

    // Nested function can access and update count from the outer scope.
    function addOneMore() {
        count++;
        console.log(`Nested function update: count = ${count}`);
    }

    addOneMore();
}

function decrement() {
    count--;
    console.log(`Decrement click: count = ${count}`);
}

// Simulate button clicks by calling the functions.
increment();
increment();
decrement();

console.log(`Final count: ${count}`);
