// Q1: Personalized Login Greeting
// Change the userName value to test with another name.
const userName = "Aamir";
const currentHour = new Date().getHours();

// Choose a greeting based on the current hour.
if (currentHour < 12) {
    console.log(`Good Morning ${userName}!`);
} else if (currentHour <= 17) {
    console.log(`Good Afternoon ${userName}!`);
} else {
    console.log(`Good Evening ${userName}!`);
}
