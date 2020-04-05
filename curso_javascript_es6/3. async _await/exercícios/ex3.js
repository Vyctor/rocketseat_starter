import axios from "axios";

//Exercício 3

class Github {
  static async getRepositories(repository) {
    try {
      const repositories = await axios.get(
        `https://api.github.com/repos/${repository}`
      );
      console.log(repositories);
    } catch (error) {
      console.log("Erro: " + error.message);
    }
  }
}

Github.getRepositories("rocketseat/rocketseat.com.br");
Github.getRepositories("rocketseat/dslkvmskv");
