// EXERCÍCIO 4

// 4.1
const empresa = {
  nome: "Rocketseat",
  endereco: {
    cidade: "Rio do Sul",
    estado: "SC",
  },
};

let {
  nome,
  endereco: { cidade, estado },
} = empresa;

console.log(nome, cidade, estado);

// 4.2

function mostraInfo({ nome, idade } = usuario) {
  return console.log(`${nome} tem ${idade} anos.`);
}

mostraInfo({ nome: "Diego", idade: 23, sexo: "M" });
