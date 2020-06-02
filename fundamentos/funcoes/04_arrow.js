function Pessoa(){
    this.idade = 0

    setInterval(() => { 
        //o this nesse caso assume o contexto de onde esta implementado
        console.log(this.idade++)
    }, 1000);
}

new Pessoa