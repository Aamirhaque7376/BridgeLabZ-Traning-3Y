// Q6: Employee Management System — Classes + Object Methods
"use strict";

class Employee {
  constructor(id, name, department, salary) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.salary = salary; // monthly salary
  }
  getAnnualSalary() {
    return this.salary * 12;
  }
  applyBonus(percent) {
    if (percent < 0) throw new Error("Bonus percentage cannot be negative.");
    this.salary = Number((this.salary * (1 + percent / 100)).toFixed(2));
  }
}

const employees = [
  new Employee(1, "Riya Sharma", "Engineering", 65000),
  new Employee(2, "Arjun Verma", "Marketing", 48000),
  new Employee(3, "Neha Singh", "HR", 42000),
  new Employee(4, "Kabir Khan", "Finance", 55000),
  new Employee(5, "Meera Patel", "Engineering", 72000)
];

document.getElementById("calculatePayroll").addEventListener("click", () => {
  // Example: give employee 2 a 5% monthly salary bonus.
  employees[1].applyBonus(5);
  const totalAnnualPayout = employees.reduce((total, employee) => total + employee.getAnnualSalary(), 0);
  const details = employees.map(employee =>
    `${employee.name} (${employee.department}) — Annual salary: ₹${employee.getAnnualSalary().toLocaleString("en-IN")}`
  );
  details.push(`\nTotal annual company payout: ₹${totalAnnualPayout.toLocaleString("en-IN")}`);
  document.getElementById("payrollOutput").textContent = details.join("\n");
  console.table(employees.map(employee => ({
    id: employee.id, name: employee.name, department: employee.department,
    monthlySalary: employee.salary, annualSalary: employee.getAnnualSalary()
  })));
});
