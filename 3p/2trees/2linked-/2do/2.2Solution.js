/** INSTRUCTIONS
 * 
 * PROBLEM 1
 * inorder(n)
 *
 * traverses a tree in INORDER
 * 
 * PROBLEM 2
 * posorder(n)
 *
 * traverses a tree in POSORDER
 * 
 */
 function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
}

function show() {
    return this.data;    
}

function tree(){
    this.insert = insert;
    this.inOrder = inOrder;
    this.posOrder = posOrder;

}
function insert(data) {
    var n = new Node(data, null, null);
    if (this.root == null) {
        this.root = n;
    }
    else 
    {
        var current = this.root;
        var parent;
        while (true) {
            parent = current;
            if (data < current.data) {
                current = current.left;
                if (current == null) {
                    parent.left = n;
                    break;
                }
            }
            else 
            {
                current = current.right;
                if (current == null) {
                    parent.right = n;
                    break;
                }
            }
        }
    }
}
function inOrder(node = this.root) {
    if (node !== null) {
        inOrder(node.left);
        console.log(node.data);
        inOrder(node.right);
    }
}
function posOrder(node = this.root) {
    if (node !== null) {
        posOrder(node.left);
        posOrder(node.right);
        console.log(node.data);
    }
}
var arbol = new tree();
arbol.insert(2);
arbol.insert(5);
arbol.insert(61);
arbol.insert(34);
arbol.insert(4);
arbol.insert(9);
arbol.insert(22);

console.log('InOrder')
arbol.inOrder();
console.log('PosOrder')
arbol.posOrder();