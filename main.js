function onHover(event) {
    event.target.style.backgroundColor = 'black';
}

function generateGrid(dimensions) {
    let container = document.querySelector('#container');
    let rows = [];
    for (let i = 0; i < dimensions; i++) {
        let row = [];
        const flexRow = document.createElement('div');
        flexRow.setAttribute('class', 'row');
        for (let j = 0; j < dimensions; j++) {
            const gridSquare = document.createElement('div');
            gridSquare.setAttribute('class', 'grid');
            gridSquare.addEventListener('mouseover', (e) => onHover(e));
            row.push(gridSquare);
            flexRow.appendChild(gridSquare);
        }
        rows.push(row);
        container.appendChild(flexRow);
    }    
}

function resetGrid() {
    let dimensions = Number(prompt('How many squares should there be for side?'));

    generateGrid(dimensions);
}

let resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', () => resetGrid());
resetGrid();