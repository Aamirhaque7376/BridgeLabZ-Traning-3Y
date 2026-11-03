// Q2 – Task Scheduler: Micro vs Macro Challenge

console.log("Start");

setTimeout(() => {
    console.log("setTimeout callback (macrotask)");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise callback (microtask)");
});

console.log("Synchronous log");
console.log("End");

// Expected order:
// Start
// Synchronous log
// End
// Promise callback (microtask)
// setTimeout callback (macrotask)
//
// JavaScript first completes all synchronous code. After the current call stack
// becomes empty, it drains the microtask queue (Promise.then callbacks).
// Only after microtasks are finished does it run the next macrotask
// (the setTimeout callback).
