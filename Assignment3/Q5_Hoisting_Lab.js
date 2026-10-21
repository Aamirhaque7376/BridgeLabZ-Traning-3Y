"use strict";

// Q5 – Hoisting Lab: The Sequence Trap
// Original sequence is intentionally shown as comments because `console.log(status)`
// throws ReferenceError: status is in the temporal dead zone until its let declaration.
// Earlier statements would print `undefined` and `Game started` before the error.
//
// console.log(score);                 // undefined: var is hoisted and initialized to undefined
// announce();                         // Game started: function declaration is hoisted
// var score = 50;
// function announce() { console.log("Game started"); }
// let status = "ready";
// startGame();
// function startGame() { console.log(status); }
//
// Fixed version: declarations are initialized before they are used.
const score = 50;
const status = "ready";

function announce() {
    console.log("Game started");
}
function startGame() {
    console.log(status);
}

console.log(score);
announce();
startGame();

// Arrow-function comparison:
// Arrow functions are expressions, not hoisted function declarations.
// They must be assigned before the variable is called.
const announceArrow = () => console.log("Game started (arrow)");
const startGameArrow = () => console.log(status);
announceArrow();
startGameArrow();

// Hoisting summary:
// - var declaration is hoisted and initialized as undefined.
// - Function declarations are hoisted with their function body.
// - let/const bindings are hoisted but inaccessible in the temporal dead zone.
// - A const/let variable holding an arrow function cannot be called before initialization.
