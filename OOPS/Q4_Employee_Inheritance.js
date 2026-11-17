// Q4. Employee Inheritance + runtime polymorphism

class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    work() {
        return `${this.name} is doing general ${this.department} work.`;
    }
}

class Manager extends Employee {
    constructor(name, department, teamSize) {
        super(name, department);
        this.teamSize = teamSize;
    }

    // Overrides Employee's work() method.
    work() {
        return `${this.name} is managing the ${this.department} team of ${this.teamSize} people.`;
    }
}

const employees = [
    new Employee("Aamir", "Development"),
    new Manager("Sara", "Engineering", 8)
];

// The same method call behaves differently according to the actual object.
employees.forEach((person) => console.log(person.work()));
