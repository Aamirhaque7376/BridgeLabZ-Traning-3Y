// Q9 – Debugging the Event Loop

// Predicted output:
// Script start
// Script end
// Promise callback
// Timeout callback
//
// Reason: synchronous statements execute first. Once the call stack is empty,
// JavaScript runs queued microtasks (Promise.then) before macrotasks
// (setTimeout callbacks), even when the timeout delay is 0.

console.log("Script start");

setTimeout(() => console.log("Timeout callback"), 0);

Promise.resolve().then(() => console.log("Promise callback"));

console.log("Script end");
