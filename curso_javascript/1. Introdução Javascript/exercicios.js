// Exercícios Introdução ao Javascript

// Exercício 1
var endereco = {
  rua: "Rua dos pinheiros",
  numero: 1293,
  bairro: "Centro",
  cidade: "São Paulo",
  uf: "SP"
};

function enderecoUsuario(endereco) {
  return `O usuário mora em ${endereco.cidade} / ${endereco.uf}, no bairro ${endereco.bairro}, na rua
      "${endereco.rua}" com nº ${endereco.numero}`;
}

console.log(enderecoUsuario(endereco));
/*##############################################################################################*/

// Exercício 2
function pares(x, y) {
  for (i = x + 1; i < y; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}

pares(0, 11);
/*##############################################################################################*/

// Exercício 3
var skills = ["Javascript", "ReactJS", "React Native"];

function hasSkill(skills) {
  return skills.includes("Javascript");
}

console.log(hasSkill(skills));

/*##############################################################################################*/

// Exercício 4
function experiencia(anos) {
  if (anos <= 1) {
    console.log("Iniciante");
  } else if (anos <= 3) {
    console.log("Intermediário");
  } else if (anos <= 6) {
    console.log("Avançado");
  } else {
    console.log("Jedi master");
  }
}

experiencia(0);

/*##############################################################################################*/

// Exercício 5
var usuarios = [
  {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
  },
  {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
  }
];

function curriculoDev(devArray) {
  for (let dev of devArray) {
    console.log(
      `O ${dev.nome} possui as habilidades: ${dev.habilidades.join(", ")}.`
    );
  }
}

curriculoDev(usuarios);
