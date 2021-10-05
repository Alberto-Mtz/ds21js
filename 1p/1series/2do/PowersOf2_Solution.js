//2. Powers of 2 
//   power2(n)
// -> n integer
// <- the n first elements of 2^n

var n = prompt("El numero dos elevado a:");

power2(n);

function power2(n){
    var result=[2];
    for (var i=1; i<n; i++){
        result.push(result[i-1]*2)
    }
    console.log(result);
}