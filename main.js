"use strict";

const sketchContainer = document.getElementById("sketch-container");

const size = 16;

function createGrid(amountOfGrids) {
    for (let i = 0; i < amountOfGrids; i++) {
        const row = document.createElement("div");
        row.classList.add("grid-row");

        for (let j = 0; j < amountOfGrids; j++) {
            const columnBox = document.createElement("div");
            columnBox.classList.add("grid-box");
            row.appendChild(columnBox);
            columnBox.addEventListener("mouseenter", () => {
                columnBox.style.backgroundColor = "white";
            });
        }
        sketchContainer.appendChild(row);
    }
}

createGrid(size);