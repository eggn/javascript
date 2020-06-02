const pessoa = {
    nome: 'Maria Jose',
    falar(){
        console.log(this.nome)
    }
}

pessoa.falar()
const falarContextoFora = pessoa.falar
falarContextoFora()

//atribuindo o contexto do this
const falarContextoDefinido = pessoa.falar.bind(pessoa)
falarContextoDefinido()
