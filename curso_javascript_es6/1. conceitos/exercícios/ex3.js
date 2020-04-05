// Exercício 3

// 3.1
const arr = [1, 2, 3, 4, 5];
arr.map((item) => item + 10);

// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: "Diego", idade: 23 };
let idade = (usuario) => usuario.idade;
console.log(usuario.idade);

// 3.3
// Dica: Utilize uma constante pra function
const name = "Vyctor";
const age = 25;

const mostraUsuario = (age = "25", name = "Tiago") => console.log(age, name);

mostraUsuario();
mostraUsuario(name, age);

const promise = () => new Promise((resolve, reject) => resolve);
console.log(promise());
