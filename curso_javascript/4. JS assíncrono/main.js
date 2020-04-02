// Programação Assincrôna
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.github.com/users/Vyctor");
xhr.send(null);
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
    console.log(JSON.parse(xhr.responseText));
  }
};

// Usando Promisses
var minhaPromise = function() {
  return new Promise(function(resolve, reject) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.github.com/users/Vyctor");
    xhr.send(null);

    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject("Erro na requisição");
        }
      }
    };
  });
};

var resultado = minhaPromise()
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });

// Usando Axios
axios
  .get("https://api.github.com/users/Vyctor")
  .then(response => {
    console.log(response);
  })
  .catch(e => console.warn(e));
