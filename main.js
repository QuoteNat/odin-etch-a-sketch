let container = document.querySelector('#container');
let rows = [];
for (let i = 0; i < 16; i++) {
    let row = [];
    const flexRow = document.createElement('div');
    flexRow.setAttribute('class', 'row');
    for (let j = 0; j < 16; j++) {
        const gridSquare = document.createElement('div');
        gridSquare.setAttribute('class', 'grid');
        row.push(gridSquare);
        flexRow.appendChild(gridSquare);
    }
    rows.push(row);
    container.appendChild(flexRow);
}