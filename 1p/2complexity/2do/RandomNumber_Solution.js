//2. random number
//   random(n)
// -> n integer
// <- one random number in [1-n]

var n = prompt("Un numero random entre 1 y: ");

random(n)

function random(n){
    var num = Math.random() * n;
    console.log(num.toFixed());
}