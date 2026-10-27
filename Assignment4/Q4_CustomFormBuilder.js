// Q4: Custom Form Builder — Forms + Classes
"use strict";

class FormBuilder {
  constructor(fields, containerId) {
    this.fields = fields;
    this.container = document.getElementById(containerId);
    this.render();
  }

  render() {
    // Build HTML from trusted field configuration supplied below.
    const fieldMarkup = this.fields.map((field, index) => {
      const id = `customField${index}`;
      const type = field.type === "select" ? "select" : field.type;
      if (type === "select") {
        const options = field.options.map(option =>
          `<option value="${option}">${option}</option>`).join("");
        return `<label for="${id}">${field.label}</label><select id="${id}" name="${field.name}" required>${options}</select>`;
      }
      return `<label for="${id}">${field.label}</label><input id="${id}" name="${field.name}" type="${type}" required>`;
    }).join("");

    this.container.innerHTML = `<form id="generatedForm">${fieldMarkup}<button type="submit">Submit</button></form>`;
    document.getElementById("generatedForm").addEventListener("submit", event => {
      event.preventDefault();
      document.getElementById("formDataOutput").textContent =
        JSON.stringify(this.getFormData(), null, 2);
    });
  }

  getFormData() {
    const form = document.getElementById("generatedForm");
    return Object.fromEntries(new FormData(form).entries());
  }
}

const formFields = [
  { type: "text", label: "Username", name: "username" },
  { type: "email", label: "Email", name: "email" },
  { type: "password", label: "Password", name: "password" },
  { type: "select", label: "Account type", name: "accountType", options: ["Student", "Teacher", "Admin"] }
];
new FormBuilder(formFields, "dynamicFormContainer");
