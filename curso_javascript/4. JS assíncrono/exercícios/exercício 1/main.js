let inputElement = document.querySelector("#app input");
let buttomElement = document.querySelector("#app button");
let answerDivElement = document.querySelector("#answer");
console.log(inputElement, buttomElement, answerDivElement);

function verifyAge(age) {
  return new Promise(function(resolve, reject) {
    if (age >= 18) {
      resolve("Maior de idade, pode entrar.");
    } else {
      reject("Menor de idade, vá para casa!");
    }
  }).catch(error => error);
}

async function answer() {
  let age = parseInt(inputElement.value);
  let answer = await verifyAge(age);
  let answerElement = document.createElement("p");
  let answerElementText = document.createTextNode(
    "Age: " + age + ". Result: " + answer
  );

  answerElement.appendChild(answerElementText);
  answerDivElement.appendChild(answerElement);
}
