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

function handleTouch(event) {
    event.preventDefault(); // Prevent scrolling
    for (let i = 0; i < event.touches.length; i++) {
        const touch = event.touches[i];
        const elem = document.elementFromPoint(touch.clientX, touch.clientY);
        if (elem && elem.classList.contains('grid-item')) {
            // Color the grid item
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            elem.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        }
    }
}

gridContainer.addEventListener('touchstart', handleTouch, { passive: false });
gridContainer.addEventListener('touchmove', handleTouch, { passive: false });

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