//novo recurso do ES6
const pessoa = {
    nome: 'Maria',
    idade: 32,
    endereco: {
        logradouro: 'Rua Fulano de Tal',
        numero: 100
    }
}
//Forma convencional
let pNome = pessoa.nome
let pIdade = pessoa.idade
console.log(pNome,pIdade)
//Destructuring
const { nome, idade } = pessoa
console.log(nome,idade)
const { nome: n, idade: i } = pessoa
console.log(n,i)
const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)
const {endereco : {logradouro, numero,cep}} = pessoa
console.log(logradouro, numero,cep)
//const {conta: {ag, num}} = pessoa // ILEGAL
//console.log(ag,num)