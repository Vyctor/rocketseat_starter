import axios from "axios";

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
