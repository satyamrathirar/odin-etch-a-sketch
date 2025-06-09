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

function changeColor(event){
    event.target.style.backgroundColor = "black";
}

const gridItems = document.querySelectorAll('.grid-item');
gridItems.forEach(item => {
    item.addEventListener("mouseover", changeColor);
});