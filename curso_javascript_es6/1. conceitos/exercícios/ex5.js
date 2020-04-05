// EXERCÍCIO 5

// 5.1
const arr = [1, 2, 3, 4, 5, 6];
const [x, ...y] = arr;
function soma(...params) {
  return params.reduce((total, next) => total + next);
}
console.log(x);
console.log(y);
console.log(soma(10, 20, 30, 50, 2, 3, 4));

// 5.2
const usuario = {
  nome: "Diego",
  idade: 23,
  endereco: {
    cidade: "Rio do Sul",
    uf: "SC",
    pais: "Brasil",
  },
};
const usuario2 = { ...usuario, nome: "Gabriel" };
const usuario3 = { ...usuario, nome: "Lontras" };
console.log(usuario2, usuario3);
