// Q9 – Prevent form submission until every field passes validation.
const accountForm = document.getElementById("account-form");
const formFields = {
    name: document.getElementById("name"),
    email: document.getElementById("email"),
    password: document.getElementById("password")
};
const successMessage = document.getElementById("success-message");

function validateField(fieldName) {
    const field = formFields[fieldName];
    const value = field.value.trim();
    let errorMessage = "";

    if (fieldName === "name" && value === "") {
        errorMessage = "Name is required.";
    } else if (fieldName === "email") {
        if (value === "") {
            errorMessage = "Email is required.";
        } else if (!value.includes("@")) {
            errorMessage = "Email must contain @.";
        }
    } else if (fieldName === "password" && value.length < 6) {
        errorMessage = "Password must be at least 6 characters.";
    }

    document.getElementById(`${fieldName}-error`).textContent = errorMessage;
    field.classList.toggle("invalid", errorMessage !== "");
    return errorMessage === "";
}

// Validate live as the user corrects a field; its error disappears when valid.
Object.keys(formFields).forEach(fieldName => {
    formFields[fieldName].addEventListener("input", () => {
        validateField(fieldName);
        successMessage.hidden = true;
    });
});

accountForm.addEventListener("submit", event => {
    // Always stop the browser's default page reload/submission.
    event.preventDefault();

    const allFieldsValid = Object.keys(formFields)
        .map(validateField)
        .every(isValid => isValid);

    if (!allFieldsValid) {
        successMessage.hidden = true;
        return;
    }

    successMessage.hidden = false;
    accountForm.reset();
    Object.values(formFields).forEach(field => field.classList.remove("invalid"));
});
