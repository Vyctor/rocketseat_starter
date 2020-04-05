// EXERCÍCIO 4

let listElement = document.querySelector("#users ul");
let inputElement = document.querySelector("#app input");
let userDatabase = [];

console.log(inputElement);

function renderTodos() {
  listElement.innerHTML = "";
  for (user of userDatabase) {
    let userElement = document.createElement("li");
    let userElementText = document.createTextNode(user);

    userElement.appendChild(userElementText);
    listElement.appendChild(userElement);
  }
}

function adicionar() {
  var todoText = inputElement.value;

  userDatabase.push(todoText);

  inputElement.value = "";

  renderTodos();
}
