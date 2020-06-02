let points = ['40', '100', '1', '5', '25', '10'];
console.log('ALGO ESTRANHO?',points.sort())
//ordenacao numerica crescente
points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => a - b);
console.log(points)
//ordenacao decrescente
points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b - a});
console.log(points)

const arr = [{nome: 'Maria'},{nome:'Amanda'} ,{nome:'Claudia'}]
console.log(arr.sort((item1,item2)=> item1.nome > item2.nome))
