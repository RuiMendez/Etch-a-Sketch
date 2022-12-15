"use strict";

const sketchContainer = document.getElementById("sketch-container");
const button = document.querySelector(".button");
const slider = document.querySelector(".slider");
let slideText = document.querySelector(".slide-text");
const colorPicker = document.getElementById("colorpicker");
const confettiButton = document.querySelector(".confetti-button");
const colorButton = document.querySelector(".color-button");

let currentMode = "color";
let size = 16;
let color = "black";

/////function that creates the grid//////////////////
function createGrid(amountOfGrids) {
    let outterBox = document.createElement("div");
    outterBox.classList.add("outterBox");
    for (let i = 0; i < amountOfGrids; i++) {
        const row = document.createElement("div");
        row.classList.add("grid-row");

        for (let j = 0; j < amountOfGrids; j++) {
            const gridBox = document.createElement("div");

            gridBox.classList.add("grid-box");
            const heightAndWidth = 480 / amountOfGrids;

            gridBox.style.height = `${heightAndWidth}px`;

            gridBox.style.width = `${heightAndWidth}px`;

            gridBox.addEventListener("mouseenter", changeColor);

            row.appendChild(gridBox);
        }
        outterBox.appendChild(row);
    }
    sketchContainer.appendChild(outterBox);
}

createGrid(size);

////Mode Selection/////

function setCurrentMode(newMode) {
    currentMode = newMode;
}

colorButton.onclick = () => setCurrentMode("color");

confettiButton.onclick = () => setCurrentMode("confetti");
////////////////////////
function changeColor(e) {
    if (currentMode === "color") {
        e.target.style.backgroundColor = color;
    } else if (currentMode === "confetti") {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }
}

///////////
colorPicker.addEventListener("input", function(e) {
    color = e.target.value;
    colorPicker.style.backgroundColor = color;
});

////////////slide range event listener

slider.addEventListener("input", function(e) {
    size = e.target.value;
    slideText.textContent = `${size} x ${size}`;
    reset();
});

function reset() {
    let outterBox = document.querySelector(".outterBox");
    outterBox.remove();
    createGrid(size);
}