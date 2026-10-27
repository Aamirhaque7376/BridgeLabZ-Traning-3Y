// Q2: Student Form Validator — Forms + RegExp
"use strict";

const studentRules = {
  studentName: { regex: /^[A-Za-z]+(?:\s+[A-Za-z]+)*$/, message: "Name must contain alphabets only (spaces between names are allowed)." },
  studentEmail: { regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email, e.g. example@domain.com." },
  studentPhone: { regex: /^\d{10}$/, message: "Phone number must contain exactly 10 digits." },
  studentPassword: { regex: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/, message: "Password needs at least one uppercase letter, one number, and one special character." }
};

function validateStudentField(id) {
  const field = document.getElementById(id);
  const error = document.getElementById(id + "Error");
  const rule = studentRules[id];
  const valid = rule.regex.test(field.value.trim());
  field.classList.toggle("valid", valid);
  field.classList.toggle("invalid", !valid);
  error.textContent = valid ? "Looks good." : rule.message;
  error.className = valid ? "success" : "error";
  return valid;
}

document.getElementById("studentForm").addEventListener("submit", event => {
  event.preventDefault();
  const valid = Object.keys(studentRules).map(validateStudentField).every(Boolean);
  document.getElementById("studentResult").textContent = valid
    ? "Registration form is valid!"
    : "Please correct the fields marked in red.";
});
