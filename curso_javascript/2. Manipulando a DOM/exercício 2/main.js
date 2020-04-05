// Exercício 2

let divElement = document.getElementById("squares");
let buttonElement = document.querySelector("#app button");

function createSquare() {
  let newColor = getRandomColor();

  let squareElement = document.createElement("div");
  squareElement.setAttribute("onmouseover", "changeColor(this)");

  squareElement.style.width = "100px";
  squareElement.style.height = "100px";
  squareElement.style.backgroundColor = newColor;

  divElement.appendChild(squareElement);
}

function addSquare() {
  buttonElement.onclick = createSquare;
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeColor(squareElement) {
  squareElement.style.backgroundColor = getRandomColor();
}

addSquare();
