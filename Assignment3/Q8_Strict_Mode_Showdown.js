"use strict";

// Q8 – Strict Mode Showdown
// This file is the strict-mode version. Duplicate parameter names are a SyntaxError
// in strict mode, so the invalid original function is kept as a comment below.
//
// function demo(a, a) { // SyntaxError in strict mode
//     total = 10;        // ReferenceError: undeclared assignment
//     delete total;      // strict mode forbids deleting an unqualified identifier
// }
// demo(5, 10);
//
// To compare without strict mode, run Q8_NonStrict_Comparison.js separately.
// Correct ES6 version:
function demo(first, second) {
    let total = 10;
    console.log(`first=${first}, second=${second}, total=${total}`);
    total = first + second;
    console.log(`Updated total=${total}`);
    return total;
}
demo(5, 10);

// Strict mode makes mistakes explicit: no implicit globals, no duplicate formal
// parameters, and no deleting plain variable bindings.
