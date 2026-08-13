// Target HTML elements
const bgCanvas = document.getElementById("bg-canvas");
const hexText = document.getElementById("hex-text");
const randomBtn = document.getElementById("random-btn");

// HTML inline onclick
window.changeBg = changeBg;

// Function to update screen text and canvas color
function changeBg(newColor) {
    bgCanvas.style.backgroundColor = newColor;
    hexText.textContent = newColor;
}

// Function to generate a random hex color code
function getRandomHex() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Trigger random color on button click
randomBtn.addEventListener("click", function() {
    const randomColor = getRandomHex();
    changeBg(randomColor);
});