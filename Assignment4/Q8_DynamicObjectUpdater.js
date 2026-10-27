// Q8: Dynamic Object Updater
"use strict";

const user = { name: "John", email: "john@mail.com", age: 21 };
const userOutput = document.getElementById("userOutput");

function renderUser() {
  userOutput.textContent = JSON.stringify(user, null, 2);
}
renderUser();

document.getElementById("userForm").addEventListener("submit", event => {
  event.preventDefault();
  const name = document.getElementById("userName").value.trim();
  const email = document.getElementById("userEmail").value.trim();
  const age = Number(document.getElementById("userAge").value);

  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      !Number.isInteger(age) || age < 1 || age > 120) {
    userOutput.textContent = "Please enter a name, valid email, and age from 1 to 120.";
    return;
  }

  // Update the existing object in real time after valid form submission.
  user.name = name;
  user.email = email;
  user.age = age;
  renderUser();
  console.log("Updated user:", user);
});
