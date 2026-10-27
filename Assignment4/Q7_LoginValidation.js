// Q7: Login Form Validation using RegExp
"use strict";

document.getElementById("loginForm").addEventListener("submit", event => {
  event.preventDefault();
  const usernameField = document.getElementById("loginUsername");
  const passwordField = document.getElementById("loginPassword");
  const username = usernameField.value.trim();
  const password = passwordField.value;

  const usernameError = username.length >= 5 ? "" : "Username must be at least 5 characters long.";
  const passwordErrors = [];
  if (password.length < 8) passwordErrors.push("at least 8 characters");
  if (!/[A-Z]/.test(password)) passwordErrors.push("one uppercase letter");
  if (!/[a-z]/.test(password)) passwordErrors.push("one lowercase letter");
  if (!/\d/.test(password)) passwordErrors.push("one number");
  if (!/[^A-Za-z0-9]/.test(password)) passwordErrors.push("one special character");
  const passwordError = passwordErrors.length
    ? "Password must contain " + passwordErrors.join(", ") + "."
    : "";

  function showFieldState(field, errorId, message) {
    field.classList.toggle("invalid", Boolean(message));
    field.classList.toggle("valid", !message);
    const errorElement = document.getElementById(errorId);
    errorElement.textContent = message || "Looks good.";
    errorElement.className = message ? "error" : "success";
  }
  showFieldState(usernameField, "loginUsernameError", usernameError);
  showFieldState(passwordField, "loginPasswordError", passwordError);

  document.getElementById("loginResult").textContent =
    usernameError || passwordError ? "Validation failed. Fix the errors above." : "Success! Username and password meet the requirements.";
});
