/** INSTRUCTIONS
 * 
 * PROBLEM 1
 * array-based implementation of trees
 * 
 * write it and make sure it runs
 */

function root(key){
    array[0]=key;
}
function left(key, root){
    var index = (root * 2) + 1;
    if(array[root] == null){
        console.log("No existe el nodo padre")
    }
    else
    {
        array[index] = key;
    }
}
function right(key, root){
    var index = (root * 2) + 2;
    if(array[root] == null){
        console.log("No existe el nodo padre")
    }
    else
    {
        array[index] = key;
    }
}
function printTree(){
    for(var i=0; i<array.length; i++){
        if(array[i] != null){
            console.log(array[i])
        }
        else
        {
            console.log('-');
        }
    }
}

var array = new Array();
root('A');
left('B',0);
right('C',0);
left('E',1);
right('F',2);
printTree();