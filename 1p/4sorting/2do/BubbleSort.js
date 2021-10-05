//1. bubblesort
//   sort(d)
// -> d an array of random numbers
// <- the random numbers sorted

console.time('Tiempo');

var numeros = new Array();
var aux, i, j, pasos = 0;

for(i=0; i<10000; i++){
    numeros[i] = 10000 * Math.random();
    numeros[i] = numeros[i].toFixed();
}
console.log("*** ARRAY ORIGINAL ****");
console.log(numeros);
console.log("*** BUBBLE SORT ****");
BubbleSort();
console.timeEnd('Tiempo');

function BubbleSort(){
    for (i=1; i<numeros.length; i++){
        for (j=0; j<(numeros.length - i); j++){
            pasos++;
            if (numeros[j] > numeros[j+1]){
                aux = numeros[j];
                numeros[j] = numeros[j+1];
                numeros[j+1] = aux;
            }
        }
    }
    console.log(numeros);
    console.log("Se realizaron " + pasos + "pasos");
}


