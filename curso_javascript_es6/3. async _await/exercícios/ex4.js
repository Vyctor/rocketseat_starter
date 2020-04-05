import axios from "axios";

// Exercício 4

const buscaUsuario = async (user) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${user}`);
    console.log(response.data);
  } catch (error) {
    console.log("Erro: " + error.message);
  }
};

buscaUsuario("diego3g");
