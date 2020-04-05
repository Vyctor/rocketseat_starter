// EXERCÍCIO 3

let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");
let repositoryListElement = document.querySelector("#repositories ul");
let loadingDiv = document.querySelector("#repositories #loading");

const apiLink = "https://api.github.com/users/";

async function search() {
  userData = await getGithubUserData();
}

function getGithubUserData() {
  loading();
  let userName = inputElement.value;
  repositoryListElement.innerHTML = "";
  response = axios
    .get(`${apiLink}${userName}/repos`)
    .then((response) => {
      let repositories = response.data;

      for (repository of repositories) {
        let repositoryElement = document.createElement("li");
        let repositoryName = document.createTextNode(repository.name);

        repositoryElement.appendChild(repositoryName);
        repositoryListElement.appendChild(repositoryElement);
      }
      inputElement.value = "";
      removeLoading();
    })
    .catch((error) => {
      repositoryElement = document.createElement("p");
      repositoryName = document.createTextNode(error);

      repositoryElement.appendChild(repositoryName);
      repositoryListElement.appendChild(repositoryElement);
      removeLoading();
    });
}

function loading() {
  loadingDiv.style.visibility = "visible";
}

function removeLoading() {
  loadingDiv.style.visibility = "hidden";
}

buttonElement.onclick = search;
