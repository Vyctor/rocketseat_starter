// Exercício 2

const usuarios = [
  { nome: "Diego", idade: 23, empresa: "Rocketseat" },
  { nome: "Gabriel", idade: 15, empresa: "Rocketseat" },
  { nome: "Lucas", idade: 30, empresa: "Facebook" },
];

const arrayIdade = usuarios.map((user) => user.idade);
const rocketSeatMaiorQue18 = usuarios.filter(
  (user) => user.empresa == "Rocketseat" && user.idade > 18
);

const fingGoogleEmployee = usuarios.find((user) => user.empresa === "Google"); //;

console.log(arrayIdade);
console.log(rocketSeatMaiorQue18);
console.log(fingGoogleEmployee);

usuarios.map((usuarios) => {
  usuarios.idade *= 2;
});

const filter = usuarios.filter((usuario) => usuario.idade <= 50);
console.log(filter);
