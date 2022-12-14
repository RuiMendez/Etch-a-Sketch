"use strict";

const sketchContainer = document.getElementById("sketch-container");
const button = document.querySelector(".button");
const slider = document.querySelector(".slider");
let slideText = document.querySelector(".slide-text");
const colorPicker = document.getElementById("colorpicker");
const gridSquare = document.querySelector("grid-box");

let size = 16;
let color = "black";

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
                gridBox.style.backgroundColor = color;
            });
            row.appendChild(gridBox);
        }
        outterBox.appendChild(row);
    }
    sketchContainer.appendChild(outterBox);
}

createGrid(size);

colorPicker.addEventListener("input", function(e) {
    color = e.target.value;
    colorPicker.style.backgroundColor = color;
});

slider.addEventListener("input", function(e) {
    size = e.target.value;
    slideText.textContent = `${size} x ${size}`;
    reset();
});

/*function reset() {
    let outterBox = document.querySelector(".outterBox");
    outterBox.remove();
    createGrid(size);
}*/