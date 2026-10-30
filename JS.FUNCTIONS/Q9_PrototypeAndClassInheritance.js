// Q9: Person -> Student inheritance using prototypes and ES6 classes

// -------------------- Version 1: Constructor functions --------------------

function Person(name) {
    this.name = name;
}

Person.prototype.showName = function () {
    console.log(`Name: ${this.name}`);
};

function Student(name, branch) {
    Person.call(this, name); // Similar purpose to super(name).
    this.branch = branch;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.showBranch = function () {
    console.log(`Branch: ${this.branch}`);
};

const prototypeStudent = new Student("Aamir", "Computer Science");

console.log("Prototype-based version:");
prototypeStudent.showName();
prototypeStudent.showBranch();

// -------------------- Version 2: ES6 classes --------------------

class PersonClass {
    constructor(name) {
        this.name = name;
    }

    showName() {
        console.log(`Name: ${this.name}`);
    }
}

class StudentClass extends PersonClass {
    constructor(name, branch) {
        super(name); // Calls the parent class constructor.
        this.branch = branch;
    }

    showBranch() {
        console.log(`Branch: ${this.branch}`);
    }
}

const classStudent = new StudentClass("Aamir", "Computer Science");

console.log("\\nES6 class-based version:");
classStudent.showName();
classStudent.showBranch();

// Both approaches provide the same observable behavior.
console.log(
    "\\nBoth versions have the same name:",
    prototypeStudent.name === classStudent.name
);
console.log(
    "Both versions have the same branch:",
    prototypeStudent.branch === classStudent.branch
);

// JavaScript classes also use prototypes internally.
console.log(
    "Class Student inherits from PersonClass:",
    Object.getPrototypeOf(StudentClass.prototype) === PersonClass.prototype
);
