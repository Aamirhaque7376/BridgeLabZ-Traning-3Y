// Q8 – Custom dropdown built without a <select> element.
const dropdown = document.getElementById("custom-dropdown");
const dropdownToggle = document.getElementById("dropdown-toggle");
const dropdownOptions = document.getElementById("dropdown-options");
const selectedValue = document.getElementById("selected-value");

function closeDropdown() {
    dropdownOptions.hidden = true;
    dropdownToggle.setAttribute("aria-expanded", "false");
}

// Capture phase: this document listener runs before bubbling listeners.
// It closes the menu when the click occurs outside the dropdown.
document.addEventListener("click", event => {
    if (!dropdown.contains(event.target)) {
        closeDropdown();
    }
}, true);

dropdownToggle.addEventListener("click", () => {
    const shouldOpen = dropdownOptions.hidden;
    dropdownOptions.hidden = !shouldOpen;
    dropdownToggle.setAttribute("aria-expanded", String(shouldOpen));
});

dropdownOptions.addEventListener("click", event => {
    const optionButton = event.target.closest("button[data-value]");
    if (!optionButton) return;

    dropdownToggle.textContent = optionButton.dataset.value;
    selectedValue.textContent = `Selected course: ${optionButton.dataset.value}`;
    closeDropdown();
});
