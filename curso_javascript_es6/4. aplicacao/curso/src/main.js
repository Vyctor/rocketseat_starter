import api from "./api";

class App {
  constructor() {
    this.repositories = [];

    this.formElement = document.getElementById("repo-form");
    this.inputElement = document.querySelector("input[name=repository]");
    this.listElement = document.getElementById("repo-list");

    this.registerHandlers();
  }

  registerHandlers() {
    this.formElement.onsubmit = event => this.addRepository(event);
  }

  setLoading(loading = true) {
    if (loading === true) {
      let loadingElment = document.createElement("span");
      loadingElment.appendChild(document.createTextNode("Carregando..."));
      loadingElment.setAttribute("id", "loading");

      this.formElement.appendChild(loadingElment);
    } else {
      document.getElementById("loading").remove();
    }
  }

  async addRepository(event) {
    event.preventDefault();

    const repoInput = this.inputElement.value;

    if (repoInput.length === 0) {
      return;
    }

    this.setLoading();

    try {
      const response = await api.get(`/repos/${repoInput}`);

      const {
        name,
        description,
        html_url,
        owner: { avatar_url }
      } = response.data;

      this.repositories.push({
        name,
        description,
        html_url,
        avatar_url
      });

      this.inputElement.value = "";
      this.render();
    } catch (error) {
      alert("O repositório não existe");
    }
    this.setLoading(false);
  }

  render() {
    this.listElement.innerHTML = "";
    this.repositories.forEach(repository => {
      let imgEl = document.createElement("img");
      imgEl.setAttribute("src", repository.avatar_url);

      let titleEl = document.createElement("strong");
      titleEl.appendChild(document.createTextNode(repository.name));

      let descriptionEl = document.createElement("p");
      descriptionEl.appendChild(
        document.createTextNode(repository.description)
      );

      let linkEl = document.createElement("a");
      linkEl.setAttribute("target", "_blank");
      linkEl.setAttribute("href", repository.html_url);
      linkEl.appendChild(document.createTextNode("Acessar"));

      let listItemEl = document.createElement("li");
      listItemEl.appendChild(imgEl);
      listItemEl.appendChild(titleEl);
      listItemEl.appendChild(descriptionEl);
      listItemEl.appendChild(linkEl);

      this.listElement.appendChild(listItemEl);
    });
  }
}

new App();
