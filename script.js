const container = document.querySelector(".container")
const sqDiv = document.createElement("div");
sqDiv.classList.add("sqDiv")

let i = 0
let j = prompt("Size of the grid (Enter number from 2-16)")

for (i = 0; i < (j*j); i++) {
    sqDivCreate.style.cssText = `width: ${(100/j)}%; height: ${100/j}%`;
    container.append(sqDivCreate.cloneNode(true));
}
const sqDivAtt = document.querySelectorAll(".sqDiv");
sqDivAtt.forEach(sq => {
    sq.style.background = "none"
    sq.addEventListener('mouseenter', () => sq.style.background = "blue");
});
