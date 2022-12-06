"use strict";

const sketchContainer = document.getElementById("sketch-container");
const button = document.querySelector(".button");

const size = 16;

function createGrid(amountOfGrids) {
    let outterBox = document.createElement("div");
    outterBox.classList.add("outterBox");
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
        outterBox.appendChild(row);
    }
    sketchContainer.appendChild(outterBox);
}

createGrid(size);

function resetEtch() {
    button.addEventListener("click", () => {
        let sizeChoice = Number(prompt("Type the desired size between 1 and 100"));
        while (sizeChoice > 100) {
            sizeChoice = Number(
                prompt("You can only choose a number between 1 and 100")
            );
        }
        let outterBox = document.querySelector(".outterBox");
        outterBox.remove();
        createGrid(sizeChoice);
    });
}

resetEtch();