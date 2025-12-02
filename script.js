const container = document.querySelector(".container")
const createSquareDiv = document.createElement("div")
createSquareDiv.classList.add("squareDiv")
const btn = document.querySelector("button")
let i = 0

//Create grid
createGrid(20)
function createGrid(j) {
    for (i = 0; i < (j*j); i++) {
        createSquareDiv.style.cssText = `width: ${(100/j)}%; height: ${100/j}%`
        container.append(createSquareDiv.cloneNode(true))
    }
    //Color squares from hover
    const selectAllSquareDiv = document.querySelectorAll(".squareDiv")
    function randomNum(min, max) {
        return Math.floor(Math.random() * (max-min) + min)
    }
    function getRandomRGB() {
        return `rgb(${randomNum(200,255)} 
                    ${randomNum(100,255)} 
                    ${randomNum(150,255)}`
    }
    selectAllSquareDiv.forEach(sq => {
        let rgb = getRandomRGB();
        let opacity = 0
        const addOpacity = () => opacity += 0.4;
        sq.addEventListener('mouseenter', () => {
            sq.style.background = `${rgb} / ${addOpacity()})`;
        })
    })
        //Restart
    btn.addEventListener("click", () => {
        selectAllSquareDiv.forEach(sq => {
            container.removeChild(sq)});
        tiles = prompt("Size of the grid (Enter number from 2-100)");
        createGrid(tiles);})
}
        


