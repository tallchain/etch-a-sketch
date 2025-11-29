const container = document.querySelector(".container")
const sqDiv = document.createElement("div");
sqDiv.classList.add("sqDiv")

let i = 0
let j = prompt("tiles")
for (i = 0; i < (j*j); i++) {
sqDiv.style.cssText = `width: ${(100/j)}%; height: ${100/j}%`;

container.append(sqDiv.cloneNode(true))
console.log(sqDiv.style.cssText = `width: ${j}%; height: ${j}%`)

}
