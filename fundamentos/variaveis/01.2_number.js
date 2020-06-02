const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.834
const avaliacao2 = 7.324

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)
console.log(media.toFixed(2), typeof media);
console.log(media.toString(2)); //binario
console.log(typeof Number);