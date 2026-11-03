// Q1 – Dynamic Product List Manager using event delegation.
const productForm = document.getElementById("product-form");
const productInput = document.getElementById("product-input");
const productList = document.getElementById("product-list");

function saveEditedItem(item) {
    const editInput = item.querySelector(".edit-input");
    if (!editInput) return;

    const updatedName = editInput.value.trim();
    const nameElement = document.createElement("span");
    nameElement.className = "product-name";
    nameElement.textContent = updatedName || item.dataset.previousName;
    editInput.replaceWith(nameElement);
    item.dataset.previousName = nameElement.textContent;
    item.classList.remove("is-editing");
}

function startEditing(item) {
    if (item.classList.contains("is-editing")) return;

    const nameElement = item.querySelector(".product-name");
    const editInput = document.createElement("input");
    editInput.type = "text";
    editInput.className = "edit-input";
    editInput.value = nameElement.textContent;
    item.dataset.previousName = nameElement.textContent;

    nameElement.replaceWith(editInput);
    item.classList.add("is-editing");
    editInput.focus();
    editInput.select();
}

function addProduct(productName) {
    const item = document.createElement("li");
    item.className = "product-item";
    item.dataset.previousName = productName;

    const name = document.createElement("span");
    name.className = "product-name";
    name.textContent = productName;

    const editButton = document.createElement("button");
    editButton.type = "button";
    editButton.className = "edit-button";
    editButton.dataset.action = "edit";
    editButton.textContent = "Edit";

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "delete-button";
    deleteButton.dataset.action = "delete";
    deleteButton.textContent = "Delete";

    item.append(name, editButton, deleteButton);
    productList.appendChild(item);
}

productForm.addEventListener("submit", event => {
    event.preventDefault();
    const productName = productInput.value.trim();
    if (!productName) {
        productInput.focus();
        return;
    }

    const emptyMessage = productList.querySelector(".empty-message");
    if (emptyMessage) emptyMessage.remove();

    addProduct(productName);
    productInput.value = "";
    productInput.focus();
});

// One listener on the parent UL handles clicks for all current and future buttons.
productList.addEventListener("click", event => {
    const actionButton = event.target.closest("button[data-action]");
    if (!actionButton) return;

    const item = actionButton.closest(".product-item");
    if (!item) return;

    if (actionButton.dataset.action === "edit") {
        startEditing(item);
    } else if (actionButton.dataset.action === "delete") {
        item.remove();
        if (!productList.querySelector(".product-item")) {
            const emptyMessage = document.createElement("li");
            emptyMessage.className = "empty-message";
            emptyMessage.textContent = "No products added yet.";
            productList.appendChild(emptyMessage);
        }
    }
});

// Clicking outside the currently edited product saves its edited text.
document.addEventListener("click", event => {
    const editingItem = productList.querySelector(".is-editing");
    if (editingItem && !editingItem.contains(event.target)) {
        saveEditedItem(editingItem);
    }
});

// Enter saves; Escape restores the previous product name.
productList.addEventListener("keydown", event => {
    if (!event.target.matches(".edit-input")) return;
    const item = event.target.closest(".product-item");

    if (event.key === "Enter") saveEditedItem(item);
    if (event.key === "Escape") {
        event.target.value = item.dataset.previousName;
        saveEditedItem(item);
    }
});
