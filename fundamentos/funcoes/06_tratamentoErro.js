

function converteParaUpper(obj) {
    let result;
    try {
        result = obj.nome.toUpperCase()
    } catch (e) {
        throw "Não foi possivel conveter para upper!"

    } finally {
        console.log('passou no finaly')
    }
    return result
}
console.log(converteParaUpper({ nome: 'Fernando' }))
console.log(converteParaUpper({ nome: null }))