//PROBLEM 2
// * removeAt(p)
// *
// * removes value at position p
// * @arg {number} p - position
var p = prompt("Ingresa la posicion del valor a eliminar");

var array = new Array();

removeAt(p)

function removeAt(p){
    array.push(2,4,6,8,10,1,3,5,);
    console.log("Before:");
    console.log(array);
    array.splice(p,1);
    console.log("After:");
    console.log(array);
}