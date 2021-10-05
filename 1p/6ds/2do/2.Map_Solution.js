// 2. Map
// a. produce 1e5 random names, ie name35927
// b. add each random name into a Map
// c. measure the time it took
// d. calculate the average of 7 runs

const map = new Map()
var num;

console.time('Tiempo');
for(var i=0; i<7; i++){
    for(var j=0; j<100000; j++){
        num=10000*Math.random().toFixed();
        map.set(j, "name"+num);
    }
}

console.log(map);
console.timeEnd('Tiempo');