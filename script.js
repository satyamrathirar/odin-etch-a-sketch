const row = 50;
const columns = 80;

const gridContainer = document.querySelector("#MyGrid");

for(let i = 0; i < row; i++){
    for(let j = 0; j < columns; j++){
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';

        gridContainer.appendChild(gridItem);
    }
}

let mouseDown = false;

document.body.addEventListener('mousedown', () => mouseDown = true);
document.body.addEventListener('mouseup', () => mouseDown = false);

function changeColor(event) {
    if (mouseDown) {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        event.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }
}

const gridItems = document.querySelectorAll('.grid-item');
gridItems.forEach(item => {
    item.addEventListener("mouseover", changeColor);
});