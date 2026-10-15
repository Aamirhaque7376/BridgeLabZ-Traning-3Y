// Q5: Weather Activity Planner
// Sample weather values; change them to test other conditions.
const temperature = 24;
const isRaining = false;
const windSpeed = 12; // km/h

// Rain takes priority, followed by extreme heat and cold/wind.
if (isRaining) {
    console.log("Stay indoors with hot coffee.");
} else if (temperature > 35 || (temperature > 35 && windSpeed > 20)) {
    console.log("Go swimming.");
} else if (temperature < 15 && windSpeed > 20) {
    console.log("Too cold and windy — stay home.");
} else {
    console.log("Perfect day for a walk.");
}
