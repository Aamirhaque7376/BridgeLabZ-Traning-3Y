// Q10: Citizen Eligibility Validator
// Sample input values; change them to test other cases.
const age = 22;
const isCitizen = true;

// This interpretation avoids overlapping categories:
// citizens aged 21+ qualify for all services; citizens aged 18–20 qualify to vote only.
if (isCitizen) {
    if (age >= 21 && age >= 18) {
        console.log("Eligible for all services.");
    } else if (age >= 18 && age <= 20) {
        console.log("Eligible to vote only.");
    } else {
        console.log("Not eligible yet.");
    }
} else {
    if (age >= 18 || age === 18) {
        console.log("Only age criteria met.");
    } else {
        console.log("Not eligible yet.");
    }
}
