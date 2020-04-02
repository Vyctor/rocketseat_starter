"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// EXERCÍCIO 1
var Usuario = /*#__PURE__*/function () {
  function Usuario(email, senha) {
    _classCallCheck(this, Usuario);

    this.email = email, this.senha = senha;
  }

  _createClass(Usuario, [{
    key: "isAdmin",
    value: function isAdmin() {
      return this.admin === true;
    }
  }]);

  return Usuario;
}();

var Admin = /*#__PURE__*/function (_Usuario) {
  _inherits(Admin, _Usuario);

  var _super = _createSuper(Admin);

  function Admin(email, senha) {
    var _this;

    _classCallCheck(this, Admin);

    _this = _super.call(this, email, senha);
    _this.admin = true;
    return _this;
  }

  return Admin;
}(Usuario);

var user1 = new Usuario("email.teste.com", "senha123");
var adm1 = new Admin("email.teste.com", "senha123");
console.log(user1);
console.log(adm1.isAdmin()); // EXERCÍCIO 2
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
