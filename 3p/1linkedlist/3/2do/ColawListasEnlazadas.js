//************ COLA **************
function Queue(n) {
    //props
    this.linked = new Linked(new Node(n)); 

    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.toString = toString;
    this.empty = empty;
}

function enqueue(element) {
    this.linked.append(new Node(element));
}

function dequeue() {
    return this.linked.shift();
}

function front() {
    return this.linked.getHead();
}

function toString() {
    return this.linked.traverse();
}

function empty() {
    if (this.linked.size == 0) {
        return true;
    }
    else {
        return false;
    }
}

//*********** NODOS ************
function Node(data) {//constructor
    this.data = data
    this.next = null
}

//************ LISTA ENLAZADA **************
function Linked(n) {
    this.head = n
    this.tail = n
    this.size = 1

    this.getHead = getHead //obtiene el primer elemento
    this.prepend = prepend //agrega un valor al inicio de la cola
    this.append = append //agrega un valor al final de la cola
    this.traverse = traverse
    //this.contains = contains
}

function getHead(){return this.head}

function prepend(n){
    n.next = this.head
    this.head=n
    this.size++
}

function append(n){
    n.next = null
    this.tail.next=n
    this.tail=n
    this.size++
}

function traverse(){
    let c=this.head
    while(c){
	//	    console.log(c.key)
	console.log(c.data)
	c=c.next
    }
    console.log('\n')
}

//************* MAIN PROGRAM *************
console.time('Tiempo');
var n = (10000 * Math.random());
var cola = new Queue(n.toFixed());
print = console.log;
var pasos = 0;
var num = 0;
for (var i=0; i<10000; i++){
    num = 10000 * Math.random();
    cola.enqueue(num.toFixed());
    pasos++;
}
print(cola.toString());
console.log("Se realizaron: " + pasos + " pasos");
console.timeEnd('Tiempo');