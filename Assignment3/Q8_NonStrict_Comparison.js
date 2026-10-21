// Q8 – Non-strict comparison (run this file separately).
// Do not add "use strict" to this file.
// Duplicate parameter names and assignment to an undeclared variable are allowed
// in classic non-strict scripts. `delete total` returns false for a global var-like
// binding in many classic-script contexts; behavior can vary by execution environment.

function demo(a, a) {
    total = 10; // Creates/sets a global in a classic non-strict script.
    console.log(`Second parameter a=${a}; total=${total}`);
    // Avoid relying on `delete total` behavior in Node.js or module environments.
}
demo(5, 10);
console.log("After call, global total =", total);
