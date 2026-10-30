// Q5: Inheritance using constructor functions and prototypes

function Person(name) {
    this.name = name;
}

Person.prototype.showName = function () {
    console.log(`Name: ${this.name}`);
};

function Student(name, branch) {
    // Call Person constructor so the Student gets the name property.
    Person.call(this, name);
    this.branch = branch;
}

// Student.prototype inherits from Person.prototype.
Student.prototype = Object.create(Person.prototype);

// Restore the constructor property after replacing the prototype.
Student.prototype.constructor = Student;

Student.prototype.showBranch = function () {
    console.log(`Branch: ${this.branch}`);
};

const student1 = new Student("Aamir", "Computer Science");

student1.showName();   // Inherited from Person.prototype.
student1.showBranch(); // Defined on Student.prototype.

console.log(
    "Student prototype links to Person:",
    Object.getPrototypeOf(Student.prototype) === Person.prototype
);
