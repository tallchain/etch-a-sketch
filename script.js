const container = document.querySelector(".container")
const sqDivCreate = document.createElement("div")
const btn = document.querySelector("button")
sqDivCreate.classList.add("sqDiv")
let i = 0

//Create grid

createGrid(10)
function createGrid(j) {
    for (i = 0; i < (j*j); i++) {
        sqDivCreate.style.cssText = `width: ${(100/j)}%; height: ${100/j}%`
        container.append(sqDivCreate.cloneNode(true))
        }
    
    //Color squares from hover
const sqDivAtt = document.querySelectorAll(".sqDiv")
function randomNum() {
    return Math.floor(Math.random() * 255)
    }
function getRandomRGB() {
    return `rgb(${randomNum()} 
                ${randomNum()} 
                ${randomNum()}`
    }
sqDivAtt.forEach(sq => {
    let rgb = getRandomRGB();
    let opacity = 0
    function addOpacity() {
        return opacity += 0.2
        }
    sq.addEventListener('mouseenter', () => {
        sq.style.background = `${rgb} / ${addOpacity()})`;
        })
        })
    //Restart
    btn.addEventListener("click", () => {
        sqDivAtt.forEach(sq => {
            container.removeChild(sq)});
        prompted = prompt("Size of the grid (Enter number from 2-100)");
        createGrid(prompted);})
}
        


