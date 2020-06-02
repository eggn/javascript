let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a
console.log(dobro(10))

let ola = function(){
    return 'Ola'
}
ola = () => {
    return 'Ola'
}

ola = _ => 'Ola'
console.log(ola())