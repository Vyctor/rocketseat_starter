// EXERCÍCIO 1
class Usuario {
  constructor(email, senha) {
    (this.email = email), (this.senha = senha);
  }

  isAdmin() {
    return this.admin === true;
  }
}

class Admin extends Usuario {
  constructor(email, senha) {
    super(email, senha);
    this.admin = true;
  }
}

const user1 = new Usuario("email.teste.com", "senha123");
const adm1 = new Admin("email.teste.com", "senha123");

console.log(user1);
console.log(adm1.isAdmin());

// EXERCÍCIO 2
//const usuarios = [
//  { nome: "Diego", idade: 23, empresa: "Rocketseat" },
//  { nome: "Gabriel", idade: 15, empresa: "Rocketseat" },
//  { nome: "Lucas", idade: 30, empresa: "Facebook" }
//];

//const arrayIdade = usuarios.map(user => user.idade);

//const rocketSeatMaiorQue18 = usuarios.filter(
//  user => user.empresa == "Rocketseat" && user.idade > 18
//);

//const fingGoogleEmployee = usuarios.find(user => user.empresa === "Google")//;

//console.log(arrayIdade);
//console.log(rocketSeatMaiorQue18);
//console.log(fingGoogleEmployee);

//usuarios.map(usuarios => {
//  usuarios.idade *= 2;
//});

//const filter = usuarios.filter(usuario => usuario.idade <= 50);
//console.log(filter);

// EXERCÍCIO 3
// 3.1
//const arr = [1, 2, 3, 4, 5];
//arr.map(item => item + 10);

// 3.2
// Dica: Utilize uma constante pra function
//const usuario = { nome: "Diego", idade: 23 };
//let idade = usuario => usuario.idade;

//console.log(usuario.idade);

// 3.3
// Dica: Utilize uma constante pra function
//const name = "Vyctor";
//const age = 25;

//const mostraUsuario = (age = "25", name = "Tiago") => console.log(age, name);

//mostraUsuario();
//mostraUsuario(name, age);

//const promise = () => new Promise((resolve, reject) => resolve);

//console.log(promise());

// EXERCÍCIO 4
//4.1

//const empresa = {
//  nome: "Rocketseat",
//  endereco: {
//    cidade: "Rio do Sul",
//    estado: "SC"
//  }
//};

//let {
//  nome,
//  endereco: { cidade, estado }
//} = empresa;

//console.log(nome, cidade, estado);

// 4.2

//function mostraInfo({ nome, idade } = usuario) {
//  return console.log(`${nome} tem ${idade} anos.`);
//
//mostraInfo({ nome: "Diego", idade: 23, sexo: "M" });

// EXERCÍCIO 5
// 5.1
//const arr = [1, 2, 3, 4, 5, 6];
//const [x, ...y] = arr;
//function soma(...params) {
//  return params.reduce((total, next) => total + next);
//}
//console.log(x);
//console.log(y);
//console.log(soma(10, 20, 30, 50, 2, 3, 4));

// 5.2
//const usuario = {
//  nome: "Diego",
//  idade: 23,
//  endereco: {
//    cidade: "Rio do Sul",
//    uf: "SC",
//    pais: "Brasil"
//  }
//};
//const usuario2 = { ...usuario, nome: "Gabriel" };
//const usuario3 = { ...usuario, nome: "Lontras" };
//console.log(usuario2, usuario3);

// EXERCÍCIO 6
//const usuario = "Diego";
//const idade = 23;
//console.log(`O usuários ${usuario} possui ${idade} anos.`);

// EXERCÍCIO 7
//const nome = "Diego";
//const idade = 23;
//const usuario = {
//  nome,
//  idade,
//  cidade: "Rio do Sul"
//};
//console.log(usuario);
