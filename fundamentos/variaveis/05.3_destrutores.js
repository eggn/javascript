function random({min = 0,max = 100}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
const obj = {max: 50, min:40}
console.log(random(obj))
console.log(random({min: 90}))
console.log(random({}))
//console.log(random()) //ILEGAL

