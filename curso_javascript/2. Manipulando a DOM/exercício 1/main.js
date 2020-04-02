// Exercício 1

let divElement = document.getElementById("squares");
let buttonElement = document.querySelector("#app button");

console.log(divElement);
console.log(buttonElement);

function createSquare() {
  let squareElement = document.createElement("div");
  squareElement.setAttribute("id", "newDiv");

  squareElement.style.width = "100px";
  squareElement.style.height = "100px";
  squareElement.style.backgroundColor = "#ff3f50";

  divElement.appendChild(squareElement);
}

function addSquare() {
  buttonElement.onclick = createSquare;
}

addSquare();
