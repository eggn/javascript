//O reduce eh utilizado para processar/percorrer o array 
//e chegar em um unico resultado. Ex. Soma dos elementos
var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduce(soma);

function soma(total, value, index, array) {
  return total + value;
} 
console.log(sum)