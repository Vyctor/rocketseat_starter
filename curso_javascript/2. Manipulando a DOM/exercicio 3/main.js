// EXERCÍCIO 3

let userDatabase = ["Diego", "Gabriel", "Lucas"];

var listElement = document.querySelector("#users ul");

console.log(listElement);

function renderTodos() {
  for (user of userDatabase) {
    let userElement = document.createElement("li");
    let userElementText = document.createTextNode(user);

    userElement.appendChild(userElementText);
    listElement.appendChild(userElement);
  }
}

renderTodos();
