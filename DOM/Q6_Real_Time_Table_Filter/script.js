// Q6 – Filter student table rows as the user types.
const searchInput = document.getElementById("search-input");
const studentRows = [...document.querySelectorAll("#student-rows tr")];
const noResultsMessage = document.getElementById("no-results");

searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.trim().toLowerCase();
    let visibleRows = 0;

    studentRows.forEach(row => {
        const rowText = row.textContent.toLowerCase();
        const matchesSearch = rowText.includes(searchTerm);

        row.hidden = !matchesSearch;
        if (matchesSearch) visibleRows++;
    });

    noResultsMessage.hidden = visibleRows !== 0;
});
