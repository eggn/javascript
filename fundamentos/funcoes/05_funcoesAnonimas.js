const soma = function (x, y) {
    return x + y
}
const imprimeResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}
imprimeResultado(2, 3)
imprimeResultado(2, 3, function (x, y) {
    return x - y
})
imprimeResultado(2, 3, (x, y) => x * y)