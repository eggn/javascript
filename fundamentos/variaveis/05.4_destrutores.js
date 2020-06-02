function random([min = 0,max = 100]){
    if (min > max) [min, max] = [max,min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
const arr = [50, 40]
console.log(random(arr))
console.log(random([90]))
console.log(random([]))
//console.log(random()) //ILEGAL

