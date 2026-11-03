// Q2 – Live character counter with a 100-character limit.
const messageInput = document.getElementById("message");
const counter = document.getElementById("counter");
const resetButton = document.getElementById("reset-button");
const maximumCharacters = 100;

function updateCounter() {
    const remainingCharacters = maximumCharacters - messageInput.value.length;
    counter.textContent = `${remainingCharacters} characters remaining`;
    counter.classList.toggle("warning", remainingCharacters <= 20 && remainingCharacters > 0);
    counter.classList.toggle("danger", remainingCharacters === 0);
}

messageInput.addEventListener("keydown", event => {
    const isEditingKey = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Tab", "Home", "End"].includes(event.key);
    const isShortcut = event.ctrlKey || event.metaKey;

    // At the limit, preventDefault blocks additional printable characters.
    // Editing keys and keyboard shortcuts remain available.
    if (messageInput.value.length >= maximumCharacters &&
        event.key.length === 1 && !isShortcut && !event.altKey && !isEditingKey) {
        event.preventDefault();
    }
});

messageInput.addEventListener("input", updateCounter);

resetButton.addEventListener("click", () => {
    messageInput.value = "";
    updateCounter();
    messageInput.focus();
});

updateCounter();
