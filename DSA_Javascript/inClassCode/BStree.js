/* 
O(n) -- for n value dataset 
o(1) -- constant time
*/

/*
TREE
■ Asyclic
■ Parent to child flow relation
■ top to bottom flow
■ single path to reach a node from parent
*/

class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BSTree{
    constructor(){
        this.root = null;
    }

    getRoot(){
        return this.root
    }

    isEmpty(){
        return this.root === null;
    }
    
    insertValue(data){
        const newNode = new Node(data);
        if(this.isEmpty()){
            this.root = newNode;
        }else{
            this.insertNode(this.root,newNode);
        }
    }

    insertNode(root,newNode){
        if(newNode.data < root.data){
            if(root.left === null){
                root.left = newNode;
            }else{
                this.insertNode(root.left, newNode);
            }
        }else{
            if(root.right === null){
                root.right = newNode;
            }else{
                this.insertNode(root.right, newNode);
            }
        }
    }

    search(data){        
        this.searchNode(this.root,data);
    }

    searchNode(root, data){
        if(this.isEmpty()){
            return null;
        }else{
            if(root.data === data){
                return root;
            }else if(data > root.data){
                return this.searchNode(root.right, data);
            }else{
                return this.searchNode(root.left, data);
            }
        }
    }

    deleteNode(root, value){
        if(root === null){
            return root;
        }
        if(value < root.data){
            root.left = this.deleteNode(root.left, value);
        }else if(value > root.data){
            root.right = this.deleteNode(root.right, value);
        }else{
            if(root.left == null && root.right == null){
                return null;
            }
            if(root.left == null){
                return root.right;
            }
            if(root.right == null){
                return root.left;
            }
            let temp = root.right;
            while(temp.left !== null || temp.left !== undefined){
                temp = temp.left
            }
            root.data = temp.data;
            root.right = this.deleteNode(root.right, temp.data);

        }
    }

    preOrderTraversal(root){
        if(root === null){
            return null;
        }else{
            console.log(root.data);
            this.preOrderTraversal(root.left);
            this.preOrderTraversal(root.right);
        }
    }

    
    postOrderTraversal(root){
        if(root === null){
            return null;
        }else{
            this.postOrderTraversal(root.left);
            this.postOrderTraversal(root.right);
            console.log(root.data);
        }
    }

    inOrderTraversal(root){
        if(root === null){
            return null;
        }else{
            this.inOrderTraversal(root.left);
            console.log(root.data);
            this.inOrderTraversal(root.right);
        }
    }

    levelOrderTraversal(root){
        const queue = [];
        queue.push(root);
        while(queue.length > 0){
            let current = queue.shift();
            if(current === null || current === undefined){
                console.log(current);
            }else{
                console.log(current.data);
                if(current.left !== null){
                    queue.push(current.left);
                }
                if(current.right !== null){
                    queue.push(current.right);
                }
            }
        }
    }

    

    rangeSum(root, low, high){
        let sum = 0;
        if(root === null){
            return 0;
        }
        if(root.data >= low && root.data <= high){
            sum += root.data;
        }
        if(root.data > low){
            sum += this.rangeSum(root.left, low, high);
        }
        if(root.data < low){
            sum += this.rangeSum(root.right, low, high);
        }
        return sum;
    }
}



const tree = new BSTree();
tree.insertValue(10);
tree.insertValue(9);
tree.insertValue(7);
tree.insertValue(11);
tree.insertValue(15);
tree.insertValue(13);
tree.insertValue(17);
tree.insertValue(12);
tree.insertValue(14);
tree.insertValue(16);
tree.insertValue(18);
tree.preOrderTraversal(tree.getRoot());
console.log("");
tree.inOrderTraversal(tree.getRoot());
console.log("");
tree.postOrderTraversal(tree.getRoot());
console.log("");
tree.levelOrderTraversal(tree.getRoot());
console.log("");
tree.deleteNode(tree.root, 15);
console.log(tree.rangeSum(tree.root, 1, 18));
tree.levelOrderTraversal(tree.getRoot());
console.log("");