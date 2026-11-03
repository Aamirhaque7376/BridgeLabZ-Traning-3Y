// Q4 – Theme switcher. setAttribute() is used for both class and data-theme.
const themeButtons = document.querySelectorAll("[data-theme-choice]");
const supportedThemes = ["light", "dark", "blue"];

function applyTheme(themeName) {
    if (!supportedThemes.includes(themeName)) return;

    // Replace the body's class attribute with the matching theme class.
    document.body.setAttribute("class", `${themeName}-theme`);
    document.body.setAttribute("data-theme", themeName);

    document.getElementById("current-theme").textContent =
        `Current theme: ${themeName.charAt(0).toUpperCase()}${themeName.slice(1)}`;
}

themeButtons.forEach(button => {
    button.addEventListener("click", () => {
        applyTheme(button.dataset.themeChoice);
    });
});

applyTheme("light");
