// EXERCÍCIO 5

var usuarios = [
  {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"],
  },
  {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"],
  },
];

function curriculoDev(devArray) {
  for (let dev of devArray) {
    console.log(
      `O ${dev.nome} possui as habilidades: ${dev.habilidades.join(", ")}.`
    );
  }
}

curriculoDev(usuarios);
