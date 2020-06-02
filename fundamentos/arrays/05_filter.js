var idades = [45, 4, 9, 16, 25];
var maioresDeIdade = idades.filter(ehMaiorQue18);

function ehMaiorQue18(value, index, array) {
  return value > 18;
} 

console.log(maioresDeIdade)