/* PROBLEM 1
 * insertAt(p,v)
 *
 * inserts a value v, at position p, in the array
 * @arg {number} p - position
 * @arg {number} v - value
 * */
var p = prompt("Ingresa la posicion");
var v = prompt("Ingresa el valor ");

var array = new Array();

insertAt(p,v)

function insertAt(p, v){
    array.push(2,4,6,8,10,1,3,5,);
    console.log("Before:");
    console.log(array);
    array.splice(p,0,v);
    console.log("After:");
    console.log(array);
}