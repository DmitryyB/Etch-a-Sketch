
const container = document.querySelector('.container');
const num = parseInt(prompt('Enter a number(1-100)', 16));
const cells = document.querySelectorAll('.grid');
const clear = document.querySelector('.clear');
const dark = document.querySelector('.dark');
const defaultColor = document.querySelector('.default');
const randomColor = document.querySelector('.random');



function createGrid(num) {
    container.style.gridTemplateRows = `repeat(${num}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
for (let i = 0; i < num * num; i++) {
    let cell = document.createElement('div');
    cell.style.backgroundColor = '#ffffff';
    container.appendChild(cell);
    cell.addEventListener('click', paintBlack);
    defaultColor.addEventListener('click', () => {
        cell.removeEventListener("mouseover", bgChangeRandom);
        cell.addEventListener('click', paintBlack);
})
    randomColor.addEventListener('click', () => {
        cell.removeEventListener('click', paintBlack);
        cell.addEventListener("mouseover", bgChangeRandom);
    })
    clear.addEventListener('click', () => {
        cell.style.backgroundColor = 'white';
        cell.style.filter = 'brightness(100%)'
    })
        dark.addEventListener('click', () => {
        let brightness = 100;
        cell.removeEventListener('click', paintBlack);
        cell.removeEventListener("mouseover", bgChangeRandom);
        cell.addEventListener("click", (e) => {
        brightness -= 10;
        e.target.style.filter = `brightness(${brightness}%)`;
    })
    })

}
}

function paintBlack (e) {
    e.target.style.backgroundColor = 'black';
}

function random (number) {
    return Math.floor(Math.random() * (number + 1));
}

function bgChangeRandom (e) {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    e.target.style.backgroundColor = rndCol;
}

createGrid (num);