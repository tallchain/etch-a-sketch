const container = document.querySelector(".container");
const h1 = document.querySelector("h1")
const sqDivCreate = document.createElement("div");
const btn = document.querySelector("button")
sqDivCreate.classList.add("sqDiv");
let i = 0
//Create grid
createGrid()
function createGrid() {
let j = prompt("Size of the grid (Enter number from 2-16)")
for (i = 0; i < (j*j); i++) {
    sqDivCreate.style.cssText = `width: ${(100/j)}%; height: ${100/j}%`;
    container.append(sqDivCreate.cloneNode(true));
}
//Color squares from hover
const sqDivAtt = document.querySelectorAll(".sqDiv");
sqDivAtt.forEach(sq => {
    sq.style.background = "none"
    sq.addEventListener('mouseenter', () => sq.style.background = "blue");
});
//Restart
btn.addEventListener("click", () => {
    sqDivAtt.forEach(sq => {container.removeChild(sq)});
    createGrid();
})}
