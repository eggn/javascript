console.log(typeof Array,typeof new Array, typeof [])
//Criando um Array
let frutas = new Array('Maçã', 'Banana')
console.log(frutas)

const legumes = ['Batata', 'Cenoura', 'Abobrinha']
console.log(legumes)
//Acessar um item (index) do Array
console.log(legumes[0])
console.log(legumes[legumes.length - 1])
console.log(legumes[5])

//Adicionar um item ao final do Array
frutas.push('Laranja')
console.log(frutas)
frutas[3] = 'Uva'
console.log(frutas)
frutas[7] = 'Acerola'
console.log(frutas)
console.log(frutas[5] === undefined)
console.log(frutas[5] === null)
//Ordenacao simples
console.log(frutas)
frutas.sort() //Muda o conteudo do array
console.log(frutas)
frutas.reverse();
console.log(frutas)

//Removendo elementos
frutas = ['Maçã', 'Banana', 'Laranja', 'Uva']
//Removendo em uma posicao especifica
delete frutas[1] //Remove Banana
console.log(frutas)
//Removendo do final
frutas.pop()
console.log(frutas)
//Removendo do inicio
frutas.shift()
console.log(frutas)
//Adicionando no inicio 
frutas.unshift('Goiaba')
console.log(frutas)

frutas = ['Maçã', 'Banana', 'Laranja', 'Uva']
const posicao = 1, qtde = 2
//remove 2 elementos a partir da posicao 1
frutas.splice(posicao,qtde)
console.log(frutas)
frutas = ['Maçã', 'Banana', 'Laranja', 'Uva']
// remove 2 elementos a partir a posicao 1 e adiciona Cereja e Pitanga
frutas.splice(1,2, 'Cereja', 'Pitanga')
console.log(frutas)

frutas = ['Maçã', 'Banana', 'Laranja', 'Uva']
console.log(frutas)
const algumasFrutas = frutas.slice(2) //retorna um novo array
console.log(algumasFrutas)
const algumasFrutas2 = frutas.slice(1,3) //retorna novo array da p. 1 a 2
console.log(algumasFrutas2)
const algumasFrutas3 = frutas.slice(-2) //retorna 2 ultimos
console.log(algumasFrutas3)
