// Q1 – The Startup Morning: Async Coffee Maker
// Each step returns a Promise and takes a random 1–2 seconds.

function waitRandomTime() {
    const delay = 1000 + Math.floor(Math.random() * 1001);
    return new Promise(resolve => setTimeout(resolve, delay));
}

function boilWater() {
    return waitRandomTime().then(() => {
        if (Math.random() < 0.15) throw new Error("Water could not be boiled.");
        console.log("Water boiled.");
        return "Boiled water";
    });
}

function brewCoffee() {
    return waitRandomTime().then(() => {
        if (Math.random() < 0.15) throw new Error("Coffee brewing failed.");
        console.log("Coffee brewed.");
        return "Brewed coffee";
    });
}

function pourIntoCup() {
    return waitRandomTime().then(() => {
        if (Math.random() < 0.15) throw new Error("Could not pour coffee.");
        console.log("Coffee poured into the cup.");
        return "Coffee in cup";
    });
}

boilWater()
    .then(result => {
        console.log(result);
        return brewCoffee();
    })
    .then(result => {
        console.log(result);
        return pourIntoCup();
    })
    .then(() => console.log("Coffee ready for the team!"))
    .catch(error => console.error("Coffee process failed:", error.message));
