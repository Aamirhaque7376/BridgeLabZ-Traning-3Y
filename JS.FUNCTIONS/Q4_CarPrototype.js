// Q4: Constructor function and prototype method

function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

// This method is stored once on Car.prototype and shared by all Car objects.
Car.prototype.getDetails = function () {
    console.log(`Brand: ${this.brand}, Model: ${this.model}`);
};

const car1 = new Car("Toyota", "Fortuner");
const car2 = new Car("Honda", "City");

car1.getDetails();
car2.getDetails();

// Both objects use the exact same shared prototype method.
console.log(
    "Method shared:",
    car1.getDetails === car2.getDetails
);
