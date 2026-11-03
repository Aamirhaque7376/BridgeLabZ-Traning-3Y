// Q3 – Three-step form with validation before moving forward.
const formSteps = [...document.querySelectorAll(".form-step")];
const stepIndicator = document.getElementById("step-indicator");
const backButton = document.getElementById("back-button");
const nextButton = document.getElementById("next-button");
const summary = document.getElementById("summary");
let currentStep = 0;

const fields = {
    name: document.getElementById("name"),
    email: document.getElementById("email"),
    password: document.getElementById("password")
};

function validateCurrentStep() {
    const fieldName = ["name", "email", "password"][currentStep];
    const field = fields[fieldName];
    const errorElement = document.getElementById(`${fieldName}-error`);
    const value = field.value.trim();
    let errorMessage = "";

    if (!value) {
        errorMessage = "This field is required.";
    } else if (fieldName === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        errorMessage = "Enter a valid email address.";
    } else if (fieldName === "password" && value.length < 6) {
        errorMessage = "Password must contain at least 6 characters.";
    }

    errorElement.textContent = errorMessage;
    return errorMessage === "";
}

function showStep(stepIndex) {
    currentStep = stepIndex;
    formSteps.forEach((step, index) => {
        step.hidden = index !== currentStep;
        step.classList.toggle("active", index === currentStep);
    });

    stepIndicator.textContent = `Step ${currentStep + 1} of 3`;
    backButton.disabled = currentStep === 0;
    nextButton.textContent = currentStep === 2 ? "Finish" : "Next";
    fields[["name", "email", "password"][currentStep]].focus();
}

nextButton.addEventListener("click", () => {
    if (!validateCurrentStep()) return;

    if (currentStep < 2) {
        showStep(currentStep + 1);
    } else {
        document.getElementById("registration-form").hidden = true;
        stepIndicator.hidden = true;
        summary.hidden = false;
        document.getElementById("summary-name").textContent = `Name: ${fields.name.value.trim()}`;
        document.getElementById("summary-email").textContent = `Email: ${fields.email.value.trim()}`;
    }
});

backButton.addEventListener("click", () => {
    if (currentStep > 0) showStep(currentStep - 1);
});

Object.entries(fields).forEach(([fieldName, field]) => {
    field.addEventListener("input", () => {
        document.getElementById(`${fieldName}-error`).textContent = "";
    });
});

document.getElementById("restart-button").addEventListener("click", () => {
    document.getElementById("registration-form").reset();
    document.getElementById("registration-form").hidden = false;
    stepIndicator.hidden = false;
    summary.hidden = true;
    Object.keys(fields).forEach(name => {
        document.getElementById(`${name}-error`).textContent = "";
    });
    showStep(0);
});

showStep(0);
