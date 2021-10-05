//1. Fibonacci
//   fibonacci(n)
// -> n integer
// <- the n first fibonacci elements

var n = prompt("Cuantos numeros quieres obtener?");

fibonacci(n);

function fibonacci(n){
    var numeros = [1,1];
    for(var i = 2; i < n; i++){
        numeros.push(numeros[i-1] + numeros[i-2])
    }
    console.log(numeros);
}