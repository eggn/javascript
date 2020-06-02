const numeros = [45, 4, 9, 16, 25];
numeros.forEach(myFunction);
function myFunction(valor, indice, proprioArray) {
  console.log(indice + ') ' + valor)
}

numeros.forEach((valor, indice) => console.log(indice + ') ' + valor))

numeros.forEach((valor) => console.log(valor))