// Exercício 1

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
