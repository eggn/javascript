//Definicao de escopo
const saudacao = 'Bem vindo' // Escopo local

function exec1(){
    const saudacao = 'Oi' //Escopo de funcao
    return saudacao
}

function exec2(){ return saudacao}

function exec3(){
    let saudacao = 'Opa!'
    return saudacao
}
console.log(exec1())
console.log(exec2())
console.log(exec3())