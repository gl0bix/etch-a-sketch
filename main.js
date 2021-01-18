const gridContainer = document.querySelector('.grid-container');
const colors = ['blue', 'red', 'green', 'yellow', 'purple', 'pink', 'black', 'cyan'];
const resetButton = document.createElement('button');
const newGridButton = document.createElement('button');

let gridSize = 16;

function buildGrid(gridSize) {
    gridContainer.style.setProperty('--grid-rows', gridSize);
    gridContainer.style.setProperty('--grid-cols', gridSize);

    for (let i = 0; i < (gridSize * gridSize); i++) {
        let cell = document.createElement('div');
        cell.className = 'grid-item';
        cell.addEventListener('mouseover', function (event) {
            event.target.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        });
        gridContainer.appendChild(cell);
    }
}

function deleteGrid(){
    while (gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

resetButton.textContent = 'Reset';
document.body.appendChild(resetButton);
resetButton.addEventListener('click', () => {
    let cells = gridContainer.children;
    for (let i = 0; i < (gridSize * gridSize); i++) { cells[i].style.backgroundColor = 'white';}
});

newGridButton.textContent = 'new Grid';
document.body.appendChild(newGridButton);
newGridButton.addEventListener('click', () => {
    let gridSize = Number(prompt("Enter new Grid size (max. 300)"));
    if (gridSize <= 300) {
        deleteGrid();
        buildGrid(gridSize);
    } else alert("Grid size too high!")
})

buildGrid(gridSize);
