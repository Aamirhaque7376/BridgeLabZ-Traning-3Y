// Q7 – Track pointer coordinates and place a marker on double-click.
const trackingBox = document.getElementById("tracking-box");
const coordinatesDisplay = document.getElementById("coordinates");

trackingBox.addEventListener("mousemove", event => {
    coordinatesDisplay.textContent =
        `clientX: ${event.clientX} | clientY: ${event.clientY}`;
});

trackingBox.addEventListener("dblclick", event => {
    const boxRectangle = trackingBox.getBoundingClientRect();

    // Convert viewport coordinates to coordinates relative to the tracking box.
    const positionX = event.clientX - boxRectangle.left;
    const positionY = event.clientY - boxRectangle.top;

    const redDot = document.createElement("span");
    redDot.className = "red-dot";
    redDot.style.left = `${positionX}px`;
    redDot.style.top = `${positionY}px`;

    trackingBox.appendChild(redDot);
});
