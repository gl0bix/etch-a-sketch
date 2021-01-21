const gridContainer = document.querySelector('.grid-container');
const colors = ['blue', 'red', 'green', 'yellow', 'purple', 'pink', 'black', 'cyan'];
const resetButton = document.createElement('button');
const newGridButton = document.createElement('button');
const randomColorButton = document.createElement('button');

let gridSize = 16;
let color = 'black'

buildGrid = (gridSize, color) => {
    gridContainer.style.setProperty('--grid-rows', gridSize);
    gridContainer.style.setProperty('--grid-cols', gridSize);

    for (let i = 0; i < (gridSize * gridSize); i++) {
        let cell = document.createElement('div');
        cell.className = 'grid-item';
        cell.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = color;
        });
        gridContainer.appendChild(cell);
    }
}

deleteGrid = () => {
    while (gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

resetButton.textContent = 'Reset';
document.body.appendChild(resetButton);
resetButton.addEventListener('click', () => {
    deleteGrid();
    buildGrid(gridSize, color);
});

newGridButton.textContent = 'new Grid';
document.body.appendChild(newGridButton);
newGridButton.addEventListener('click', () => {
    gridSize = Number(prompt("Enter new Grid size (max. 300)"));
    if (gridSize <= 300) {
        deleteGrid();
        buildGrid(gridSize, color);
    } else alert("Grid size too high!")
})

randomColorButton.textContent = 'random Color';
document.body.appendChild(randomColorButton);
randomColorButton.addEventListener('click', () => {
    color = colors[Math.floor((Math.random()*colors.length))];
    cells = gridContainer.children;
    deleteGrid();
    buildGrid(gridSize, color);
})

buildGrid(gridSize, color);
