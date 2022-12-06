"use strict";

const sketchContainer = document.getElementById("sketch-container");
const button = document.querySelector(".button");

const size = 16;

function createGrid(amountOfGrids) {
    for (let i = 0; i < amountOfGrids; i++) {
        const row = document.createElement("div");
        row.classList.add("grid-row");

        for (let j = 0; j < amountOfGrids; j++) {
            const gridBox = document.createElement("div");

            gridBox.classList.add("grid-box");
            const heightAndWidth = 960 / size;

            gridBox.style.height = `${heightAndWidth}px`;

            gridBox.style.width = `${heightAndWidth}px`;

            gridBox.addEventListener("mouseenter", () => {
                gridBox.style.backgroundColor = "white";
            });
            row.appendChild(gridBox);
        }
        sketchContainer.appendChild(row);
    }
}

createGrid(size);