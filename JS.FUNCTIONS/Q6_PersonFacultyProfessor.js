// Q6: Multi-level prototype chain: Person -> Faculty -> Professor

function Person(name) {
    this.name = name;
}

Person.prototype.showPerson = function () {
    console.log(`Person name: ${this.name}`);
};

function Faculty(name, department) {
    Person.call(this, name);
    this.department = department;
}

Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;

Faculty.prototype.showFaculty = function () {
    console.log(`Department: ${this.department}`);
};

function Professor(name, department, subject) {
    Faculty.call(this, name, department);
    this.subject = subject;
}

Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.showProfessor = function () {
    console.log(`Subject: ${this.subject}`);
};

const professor1 = new Professor(
    "Dr. Sharma",
    "Computer Science",
    "JavaScript"
);

// The Professor object can use its own method and methods inherited
// through Faculty.prototype and Person.prototype.
professor1.showProfessor();
professor1.showFaculty();
professor1.showPerson();

console.log(
    "Professor -> Faculty:",
    Object.getPrototypeOf(Professor.prototype) === Faculty.prototype
);
console.log(
    "Faculty -> Person:",
    Object.getPrototypeOf(Faculty.prototype) === Person.prototype
);
