"use strict";

const sketchContainer = document.getElementById("sketch-container");
const button = document.querySelector(".button");
const slider = document.querySelector(".slider");
let slideText = document.querySelector(".slide-text");
const colorPicker = document.getElementById("colorpicker");
const rainbowButton = document.querySelector(".rainbow-button");

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
////////////////////////////////////////////////
function changeColor(e) {}

colorPicker.addEventListener("input", function(e) {
    color = e.target.value;
    colorPicker.style.backgroundColor = color;
});

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

////rainbow mode

/*function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

function getRandomRBG() {
    let r = getRandomInt(255);
    let b = getRandomInt(255);
    let g = getRandomInt(255);
    return `rgb(${r}, ${b}, ${g})`;
}

let randomRBGColorCode = getRandomRBG();

rainbowButton.addEventListener("click", () => {
    gridSquare.style.backgroundColor = randomRBGColorCode;
});*/