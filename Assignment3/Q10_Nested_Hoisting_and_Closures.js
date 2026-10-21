"use strict";

// Q10 – Nested Hoisting and Closures
// Original output: undefined, then undefined.
// The outer `count` is hoisted in outer() and initialized to undefined at first log.
// inner() has its own local `var count`, so its first log sees that local binding as undefined
// only if logged before assignment. Here the inner function logs the outer count? No:
// because `var count = 10` is declared inside inner, it shadows outer count throughout inner.
// Therefore the inner console.log prints undefined? In the given original code, it logs
// before the assignment, so the exact output is `undefined` then `undefined`.

function outer() {
    console.log("outer count before assignment:", count);
    var count = 5;

    function inner() {
        console.log("inner count before assignment:", count);
        var count = 10;
    }

    inner();
    console.log("outer count after inner:", count);
}
outer();

// Arrow conversion:
// Arrow functions do not create their own `this`, `arguments`, or super binding,
// but they still have their own local variables. A local `var count` inside this arrow
// continues to shadow outer count.
function outerWithArrow() {
    var count = 5;
    const innerArrow = () => {
        console.log("arrow inner sees outer count:", count);
    };
    innerArrow();
}
outerWithArrow();

// Debugger/call stack:
// Set a breakpoint on the first console.log and start debugging (F5).
// The stack initially contains outer. When inner() is called, inner appears above outer.
// When inner returns, its frame disappears and execution continues in outer.
// In the arrow example, the debugger shows outerWithArrow and innerArrow's call frame.
