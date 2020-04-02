import axios from "axios";

// Exercício 1
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

async function umPorSegundo() {
  await delay();
  console.log("1s");
  await delay();
  console.log("2s");
  await delay();
  console.log("1s");
}

umPorSegundo();

//Exercício 2
async function getUser(user) {
  try {
    const response = await axios.get(`https://api.github.com/users/${user}`);

    console.log(response.data);
  } catch (error) {
    console.warn("Erro: " + error.message);
  }
}

getUser("diego3eeeg");

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

//Exercício 4
const buscaUsuario = async user => {
  try {
    const response = await axios.get(`https://api.github.com/users/${user}`);
    console.log(response.data);
  } catch (error) {
    console.log("Erro: " + error.message);
  }
};

buscaUsuario("diego3g");
