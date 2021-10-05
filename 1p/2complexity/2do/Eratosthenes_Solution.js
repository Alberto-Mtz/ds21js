//1. sieve of Eratosthenes
//   sieve(n)
// -> n integer
// <- the n first elements

var n = prompt("Cuantos numeros quieres obtener?");
var c = n * 100;
var numerosPrimos = [];
var posiciones = 0;

sieve(n);

function sieve(n){
    for (var i=2 ; i < c; i++) {
        if (primo(i) && posiciones<n) {
            numerosPrimos.push(i);
            posiciones++;
        }
    }

    console.log(numerosPrimos);
}

function primo(num) {
    for (var j = 2; j < num; j++) {
        if (num % j === 0) {
        return false;
        }
    }

    return num !== 1;
}