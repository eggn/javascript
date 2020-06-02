let isAtivo = false
console.log(isAtivo)
isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)//dica para converter para boolean
console.log(!isAtivo)

console.log('Valores verdadeiros')
console.log(!!2)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)

console.log('Valores falsos')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
//Expressao
console.log(!!('' || null || undefined || 0 || 'oi'))
let parcela
console.log(parcela || 'A calcular')

