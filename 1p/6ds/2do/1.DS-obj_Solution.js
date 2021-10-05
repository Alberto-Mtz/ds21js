//1. DS-obj
// a. produce 1e5 random names, ie name35927
// b. add each random name into our ds-obj
// c. measure the time it took
// d. calculate the average of 7 runs


var obj={};
const add    = (key, value) => obj[key] = value;
const get    = (key)  => obj[key];
const remove = (key)  => delete obj[key];
const clear  = ()  => obj = {};
var num;

console.time('Tiempo');
for(var i=0; i<7;i++){
    for(var j=0; j<100000; j++){
        num=10000*Math.random().toFixed();
        add(j,"name" + num);
    }
}

console.log(obj);
console.timeEnd('Tiempo')
