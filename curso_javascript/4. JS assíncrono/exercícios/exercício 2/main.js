// EXERCÍCIO 2

var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");
var repositoryListElement = document.querySelector("#repositories ul");

const apiLink = "https://api.github.com/users/";

function getGithubUserData() {
  repositoryListElement.innerHTML = "";
  axios
    .get(`${apiLink}${inputElement.value}/repos`)
    .then((response) => {
      let repositories = response.data;

      for (repository of repositories) {
        let repositoryElement = document.createElement("li");
        let repositoryName = document.createTextNode(repository.name);

        repositoryElement.appendChild(repositoryName);
        repositoryListElement.appendChild(repositoryElement);
      }
      inputElement.value = "";
    })
    .catch((e) => e);
}

buttonElement.onclick = getGithubUserData;

/**
 *        

        repositoryElement.appendChild(repositoryName);
        repoListElement.appendChild(repoElement);
 */
