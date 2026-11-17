// Q1. Student Result Processing (reduce + Classes)

class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    calculateAverage() {
        if (this.marks.length === 0) {
            throw new Error("Marks list cannot be empty.");
        }

        const total = this.marks.reduce((sum, mark) => sum + mark, 0);
        return total / this.marks.length;
    }

    getGrade() {
        const average = this.calculateAverage();

        if (average >= 90) return "A";
        if (average >= 75) return "B";
        if (average >= 50) return "C";
        return "F";
    }
}

const students = [
    new Student("Aamir", [85, 90, 88, 92, 80]),
    new Student("Rahul", [70, 75, 78, 72, 80]),
    new Student("Sara", [35, 45, 40, 50, 42])
];

students.forEach((student) => {
    console.log(`Name: ${student.name}`);
    console.log(`Average: ${student.calculateAverage().toFixed(2)}`);
    console.log(`Grade: ${student.getGrade()}`);
    console.log("--------------------");
});
