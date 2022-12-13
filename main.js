"use strict";

const sketchContainer = document.getElementById("sketch-container");
const button = document.querySelector(".button");
const slider = document.querySelector(".slider");
let slideText = document.querySelector(".slide-text");

let size = 16;

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

            gridBox.addEventListener("mouseenter", () => {
                gridBox.style.backgroundColor = "black";
            });
            row.appendChild(gridBox);
        }
        outterBox.appendChild(row);
    }
    sketchContainer.appendChild(outterBox);
}

createGrid(size);

slider.addEventListener("input", function(e) {
    size = e.target.value;
    slideText.textContent = `${size} x ${size}`;
});

function reset() {
    let outterBox = document.querySelector(".outterBox");
    outterBox.remove();
    createGrid(size);
}

button.addEventListener("click", () => {
    reset();
});