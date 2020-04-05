// Exercício 2

function pares(x, y) {
  for (i = x + 1; i < y; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}

pares(0, 11);
