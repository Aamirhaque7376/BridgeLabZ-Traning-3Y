// Q5: Boolean Logic Access System

let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

function checkSecurity() {
    // All required conditions must be true for the system to be secure.
    const isSecure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;

    // Demonstrate OR and NOT logic as additional checks.
    const anyOpeningUnlocked = !isDoorLocked || !isWindowClosed;

    console.log(`Door locked: ${isDoorLocked}`);
    console.log(`Window closed: ${isWindowClosed}`);
    console.log(`Alarm on: ${isAlarmOn}`);
    console.log(`Owner inside: ${isOwnerInside}`);
    console.log(`Any door/window unsecured: ${anyOpeningUnlocked}`);
    console.log(isSecure ? "Secure" : "Unsafe");
    console.log("------------------------------");
}

checkSecurity();

// Change values and test different outcomes.
isDoorLocked = false;
checkSecurity();

isDoorLocked = true;
isAlarmOn = false;
checkSecurity();
