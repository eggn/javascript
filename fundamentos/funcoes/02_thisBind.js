function Pessoa(){
    this.idade = 0
    setInterval(function() { //funcao anonima
        console.log(this.idade++)
    }/*.bind(this)*/, 1000)
}

new Pessoa