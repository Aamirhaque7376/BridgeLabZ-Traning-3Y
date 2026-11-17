// Q5. Ride-Sharing Application

class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

class Driver extends User {
    constructor(name, rating, vehicle, vehicleNumber) {
        super(name, rating);
        this.vehicle = vehicle;
        this.vehicleNumber = vehicleNumber;
    }
}

class Trip {
    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }

    calculateFare() {
        if (this.distance === undefined || this.distance === null || this.distance === "") {
            throw new Error("Trip distance must be provided.");
        }

        if (typeof this.distance !== "number" || !Number.isFinite(this.distance) || this.distance < 0) {
            throw new Error("Trip distance must be a valid non-negative number.");
        }

        const ratePerKm = 12;
        const baseFare = 30;
        return baseFare + (this.distance * ratePerKm);
    }
}

const passenger = new User("Aamir", 4.8);
const driver = new Driver("Rahul", 4.9, "Car", "UP85 AB 1234");

console.log(`Passenger: ${passenger.name} (Rating: ${passenger.rating})`);
console.log(`Driver: ${driver.name}, ${driver.vehicle}, ${driver.vehicleNumber}`);

try {
    const trip = new Trip("GLA University", "Mathura Junction", 12);
    console.log(`Route: ${trip.fromLocation} to ${trip.toLocation}`);
    console.log(`Fare: Rs. ${trip.calculateFare()}`);
} catch (error) {
    console.log(`Unable to calculate fare: ${error.message}`);
}

try {
    const invalidTrip = new Trip("Hostel", "Market", -5);
    console.log(`Fare: Rs. ${invalidTrip.calculateFare()}`);
} catch (error) {
    console.log(`Unable to calculate fare: ${error.message}`);
}
