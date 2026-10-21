"use strict";

// Q4 – Debugging Mystery
// Original line `greeting = "Welcome"` throws ReferenceError in strict mode,
// because greeting was never declared. Strict mode disallows accidental globals.

function showMessage() {
    const greeting = "Welcome"; // Fixed: declare the variable in local function scope.
    console.log(greeting);
}

showMessage();

// VS Code debugger:
// 1. Click beside the `const greeting` line to set a breakpoint.
// 2. Run > Start Debugging (F5), choose Node.js if asked.
// 3. Add `greeting` under WATCH; inspect it after execution pauses.
// 4. Check CALL STACK: showMessage is the active frame; after return, it disappears.
// Scope note: const creates a block-scoped binding available inside this function block.
