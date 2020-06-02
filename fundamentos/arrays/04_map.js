const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(transformaElemento)

function transformaElemento(value, index, array) {
  return value * 2
}
console.log(numbers2)
function transformaParaDinheiro(valor){
    return 'R$ ' + parseFloat(valor).toFixed(2).replace('.',',')
}
console.log(numbers1.map(transformaParaDinheiro))
