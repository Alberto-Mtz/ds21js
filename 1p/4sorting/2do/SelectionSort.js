//2. selectionsort
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
console.log("*** SELECTION SORT ***");  
SelectionSort();
console.timeEnd('Tiempo');


function SelectionSort(){
    var min;
    for (i=0; i<=numeros.length-2; i++){
        min = i;
        for (j=i+1; j<=numeros.length-1; j++){
            pasos++;
            if(numeros[j] < numeros[min]){
                min = j;
            }
        }
        if (min != i) {
            aux = numeros[i]; 
            numeros[i] = numeros[min];
            numeros[min] = aux;      
       }
    }
    console.log(numeros);
    console.log("Se realizaron " + pasos + " pasos");
}