class LancamentoFinanceiro{
    constructor( tipo = 'Tipo Default', valor = 0){
        this.tipo = tipo
        this.valor = valor
    }
}

class CicloFinanceiro{
    constructor(ano, mes){
        this.ano = ano
        this.mes = mes
        this.lancamentos = []
    }
    //MAGICA!!!! ... recebe 1 ou mais lancamentos e concatena num array (ES 2015)
    addLancamentos(...lancamentos){
        lancamentos.forEach(lancamento =>  this.lancamentos.push(lancamento));
    }
    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}
const salario = new LancamentoFinanceiro('Salario', 45000)
const contaLuz = new LancamentoFinanceiro('Energisa', -250)
const contas = new CicloFinanceiro(2020, 6)
contas.addLancamentos(salario, contaLuz)
console.log(contas.sumario())
