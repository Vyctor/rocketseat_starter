// Classes
class Matematica {
  // Métodos estáticos são aqueles que utilizados para retornar alguma informação sem depender de outros valores da classe
  static soma(a, b) {
    return a + b;
  }
}

// const e let

// const pode mutar, mas não ser alterada
const usuario = {
  nome: "Diego"
};

// exemplo de mutação
usuario.nome = "Vyctor";

// exemplo de alteração
//usuario = "Vyctor";

let x = 5;
function teste(x) {
  let y = 2;
  if (x >= 5) {
    console.log(x, y);
  }
}

teste(x);

// Operações em arrays
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// percorre o array e realizar operações de acordo com a função callback
const newArray = array.map(value => (value > 5 ? value : 0));

// percorre o array e transforma em um única variável, geralmente um número
const sum = array.reduce((total, next) => {
  return total + next;
});

// filtrar valores no array
const filter = array.filter(value => value % 2 === 0);

// verificar se há alguma informação específica no array
const find = array.find(item => item === 1);

console.log(filter);
console.log(newArray);
console.log(sum);
console.log(find);

// Arrow function => já domino

// Valores padrão para parâmetros de função

const subtracao = (a = 1, b = 1) => a - b;

console.log(subtracao(1));
console.log(subtracao(5, 2));

// Desestruturação
const user = {
  nome: "Diego",
  idade: 23,
  empresa: "Rocketseat",
  endereco: {
    cidade: "Rio do Sul",
    escado: "SC"
  }
};

let {
  nome,
  idade,
  endereco: { cidade }
} = user;

console.log(nome, idade, cidade);

function mostraNome({ nome, idade }) {
  console.log(nome, idade);
}

mostraNome(user);

// Operadores rest/spread

//REST pegar o resto das propriedades
const { empresa, ...resto } = user;

console.log(empresa, resto);

function multiplicacao(...params) {
  return params.reduce((total, next) => total * next);
}

console.log(multiplicacao(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// SPREAD repassa as informações de um objeto ou array para outra estrutura de dados

const vetor1 = [1, 2, 3];
const vetor2 = [4, 5, 6];

const vetor3 = [...vetor1, ...vetor2];

console.log(vetor3);

const newUser = { ...user, nome: "Vyctor" };

console.log(newUser);

// Template literals
console.log(`${vetor1} é muito legal`);
console.log(`${newUser.name} é muito legal`);

// Object short sintax
const newName = "vyctor";
const newAge = 25;

const newVyctor = {
  newName,
  newAge,
  empresa: "Autônomo"
};

console.log(newVyctor);
