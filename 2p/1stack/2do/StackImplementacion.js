function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;
}
function push(element) {
    this.dataStore[this.top++] = element;
}
function peek() {
    return this.dataStore[this.top-1];
}
function pop() {
    return this.dataStore[--this.top];
}
function clear() {
    this.top = 0;
}
function length() {
    return this.top;
}
print = console.log;

var s5 = new Stack();

s5.push("Alberto");
s5.push("Lucas");
s5.push("Oscar");
print("length: " + s5.length());
print(s5.peek());

var popped = s5.pop();

print("The popped element is: " + popped);
print(s5.peek());
s5.push("Jennifer");
print(s5.peek());
s5.clear();
print("length: " + s5.length());
print(s5.peek());
s5.push("Emilia");
print(s5.peek());