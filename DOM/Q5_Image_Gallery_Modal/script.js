// Q5 – Image gallery modal preview.
const gallery = document.getElementById("gallery");
const imageModal = document.getElementById("image-modal");
const modalContent = document.getElementById("modal-content");
const previewImage = document.getElementById("preview-image");
const closeModalButton = document.getElementById("close-modal");

gallery.addEventListener("click", event => {
    if (event.target.tagName !== "IMG") return;

    previewImage.src = event.target.src;
    previewImage.alt = event.target.alt;
    imageModal.classList.add("open");
    imageModal.setAttribute("aria-hidden", "false");
});

function closeModal() {
    imageModal.classList.remove("open");
    imageModal.setAttribute("aria-hidden", "true");
    previewImage.src = "";
}

// Clicking the dark backdrop closes the modal.
imageModal.addEventListener("click", closeModal);

// stopPropagation prevents clicks on the image/content from reaching the backdrop.
modalContent.addEventListener("click", event => {
    event.stopPropagation();
});

closeModalButton.addEventListener("click", closeModal);

document.addEventListener("keydown", event => {
    if (event.key === "Escape" && imageModal.classList.contains("open")) {
        closeModal();
    }
});
