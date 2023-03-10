// class Node{
//     constructor(value){
//         this.value=value
//         this.left=null
//         this.right=null
//     }
// }

// class BinarySearchTree{
//     constructor(){
//         this.root=null
//     }

//     isEmpty(){
//         return this.root===null
//     }

//     insert(value){
//         const newNode=new Node(value)

//         if(this.isEmpty()){
//             this.root=newNode
//         }else{
//             this.insertNode(this.root,newNode)
//         }
//     }

//     insertNode(root,newNode){
//         if(newNode.value<root.value){
//             if(root.left===null){
//                 root.left=newNode
//             }else{
//                 this.insertNode(root.left,newNode)
//             }
//         }else{
//             if(root.right===null){
//                 root.right=newNode
//             }else{
//                 this.insertNode(root.right,newNode)
//             }
//         }
//     }

//     search(root,value){
//         if(!root){
//             return false
//         }else{
//             if(root.value===value){
//                 return true
//             }else if(value<root.value){
//                 return this.search(root.left,value)
//             }else{
//                 return this.search(root.right,value)
//             }
//         }
//     }

//     preOrder(root){
//         if(root){
//             console.log(root.value);
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//         }
//     }

//     inOrder(root){
//         if(root){
//             this.inOrder(root.left)
//             console.log(root.value);
//             this.inOrder(root.right)
//         }
//     }
//     postOrder(root){
//         if(root){
//             this.postOrder(root.left)
//             this.postOrder(root.right)
//             console.log(root.value);
//         }
//     }
// }

// const bst=new BinarySearchTree()

// console.log('tree is empty',bst.isEmpty());

// bst.insert(10)
// bst.insert(5)
// bst.insert(15)
// bst.insert(3)
// bst.insert(7)
// console.log(bst.root);
// console.log(bst.root.value);


// console.log(bst.search(bst.root,10));
// console.log(bst.search(bst.root,5));
// console.log(bst.search(bst.root,15));
// console.log(bst.search(bst.root,55));
// bst.postOrder(bst.root)


// class Node {
//     constructor(value) {
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

// class BinarySearchTree {
//     constructor() {
//         this.root = null
//     }

//     isEmpty() {
//         return this.root === null
//     }

//     insert(value) {
//         const newNode = new Node(value)

//         if (this.isEmpty()) {
//             this.root = newNode
//         } else {
//             this.insertNode(this.root, newNode)
//         }
//     }

//     insertNode(root, newNode) {
//         if (newNode.value < root.value) {
//             if (root.left === null) {
//                 root.left = newNode
//             } else {
//                 this.insertNode(root.left, newNode)
//             }
//         } else {
//             if (root.right === null) {
//                 root.right = newNode
//             } else {
//                 this.insertNode(root.right, newNode)
//             }
//         }
//     }

//     search(root, value) {
//         if (!root) {
//             return false
//         } else {
//             if (root.value === value) {
//                 return true
//             } else if (value < root.value) {
//                 return this.search(root.left, value)
//             } else {
//                 return this.search(root.right, value)
//             }
//         }
//     }

//     preOrder(root) {
//         if (root) {
//             console.log(root.value);
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//         }
//     }

//     inOrder(root) {
//         if (root) {
//             this.inOrder(root.left)
//             console.log(root.value);
//             this.inOrder(root.right)
//         }
//     }
//     postOrder(root) {
//         if (root) {
//             this.postOrder(root.left)
//             this.postOrder(root.right)
//             console.log(root.value);
//         }
//     }

//     levelOrder() {
//         //use the optimized queue wat if implementation
//         const queue = []
//         console.log(this.root, 'levle order');
//         queue.push(this.root)
//         while (queue.length) {
//             let curr = queue.shift()
//             console.log(curr.value);
//             if (curr.left) {
//                 queue.push(curr.left)
//             }
//             if (curr.right) {
//                 queue.push(curr.right)
//             }
//         }
//     }

//     min(root) {
//         if (!root.left) {
//             return root.value
//         } else {
//             return this.min(root.left)
//         }
//     }
//     max(root) {
//         if (!root.right) {
//             return root.value
//         } else {
//             return this.max(root.right)
//         }
//     }

//     delete(value) {
//         this.root = this.deleteNode(this.root, value)
//     }
//     deleteNode(root, value) {
//         if (root === null) {
//             return root
//         }
//         if (value < root.value) {
//             root.left = this.deleteNode(root.left, value)
//         } else if (value > root.value) {
//             root.right = this.deleteNode(root.right, value)
//         } else {
//             if (!root.left && !root.right) {
//                 return null
//             }
//             if (!root.left) {
//                 return root.right
//             }else if(!root.right){
//                 return root.left
//             }
//             root.value=this.min(root.right)
//             root.right=this.deleteNode(root.right,root.value)
//         }
//         return root
//     }
// }

// const bst = new BinarySearchTree()

// console.log('tree is empty', bst.isEmpty());

// bst.insert(10)
// bst.insert(5)
// bst.insert(15)
// bst.insert(3)
// // bst.insert(7)

// // console.log(bst.root);
// // console.log(bst.root.value);
// // console.log(bst.search(bst.root, 10));
// // console.log(bst.search(bst.root, 5));
// // console.log(bst.search(bst.root, 15));
// // console.log(bst.search(bst.root, 55));


// // console.log(bst.min(bst.root));
// // console.log(bst.max(bst.root));

// bst.levelOrder()

// // bst.delete(3)

// // bst.levelOrder()


// bst.delete(10)

// bst.levelOrder()



// class Node {
//     constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//      }
//     }
    
//     class Tree {
//      constructor() {
//      this.root = null;
//     }
    
//     isValidBST(node, min = null, max = null) {
//     if (!node) return true;
//     if (max !== null && node.data >= max) {
//       return false;
//     }
//     if (min !== null && node.data <= min) {
//       return false;
//     }
//     const leftSide = this.isValidBST(node.left, min, node.data);
//     const rightSide = this.isValidBST(node.right, node.val, max);
    
//     return leftSide && rightSide;
//     }
//     }
    
//     const t = new Node(10);
//     t.left = new Node(0);
//     t.left.left = new Node(7);
//     t.left.right = new Node(4);
//     t.right = new Node(12);
//     const t1 = new Tree();
//     t1.root = t;
//     console.log(t1.isValidBST(t));

// function findClosestValueInBst(root, target) {
//     let closest = root.value;
//   const traverse = (node) => {
//         if (node === null) return;
//         if (Math.abs(target - closest) > Math.abs(target - node.value)) {
//             closest = node.value;
//         }
        
//         if (target < node.value) {
//             console.log('left')
//             traverse(node.left)
//         } else {
//             console.log('right')
//             traverse(node.right)
//         }
        
//     }
//     traverse(root)
//     return closest;
// }


class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    isEmpty() {
        return this.root === null
    }

    insert(value) {
        const newNode = new Node(value)

        if (this.isEmpty()) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode
            } else {
                this.insertNode(root.left, newNode)
            }
        } else {
            if (root.right === null) {
                root.right = newNode
            } else {
                this.insertNode(root.right, newNode)
            }
        }
    }

    search(root, value) {
        if (!root) {
            return false
        } else {
            if (root.value === value) {
                return true
            } else if (value < root.value) {
                return this.search(root.left, value)
            } else {
                return this.search(root.right, value)
            }
        }
    }

    preOrder(root) {
        if (root) {
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root) {
        if (root) {
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
        }
    }
    postOrder(root) {
        if (root) {
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
        }
    }

    levelOrder() {
        //use the optimized queue wat if implementation
        const queue = []
        // console.log(this.root, 'levle order');
        queue.push(this.root)
        while (queue.length) {
            let curr = queue.shift()
            console.log(curr.value);
            if (curr.left) {
                queue.push(curr.left)
            }
            if (curr.right) {
                queue.push(curr.right)
            }
        }
    }

    min(root) {
        if (!root.left) {
            return root.value
        } else {
            return this.min(root.left)
        }
    }
    max(root) {
        if (!root.right) {
            return root.value
        } else {
            return this.max(root.right)
        }
    }

    delete(value) {
        this.root = this.deleteNode(this.root, value)
    }
    deleteNode(root, value) {
        if (root === null) {
            return root
        }
        if (value < root.value) {
            root.left = this.deleteNode(root.left, value)
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value)

        } else {
            if (!root.left && !root.right) {
                return null
            }
            if (!root.left) {
                return root.right
            }else if(!root.right){
                return root.left
            }
            root.value=this.min(root.right)
            root.right=this.deleteNode(root.right,root.value)
        }
        return root
    }

    
}

const bst = new BinarySearchTree()

console.log('tree is empty', bst.isEmpty());

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
// bst.insert(7)

// console.log(bst.root);
// console.log(bst.root.value);
// console.log(bst.search(bst.root, 10));
// console.log(bst.search(bst.root, 5));
// console.log(bst.search(bst.root, 15));
// console.log(bst.search(bst.root, 55));


// console.log(bst.min(bst.root));
// console.log(bst.max(bst.root));

// bst.levelOrder()

// bst.delete(3)

bst.levelOrder()


bst.delete(10)
console.log('lll');

bst.levelOrder()


class Noode {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    isEmpty() {
        return this.root === null
    }

    insert(value) {
        const newNode = new Noode(value)
        if (this.isEmpty()) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }
    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode
            } else {
                this.insertNode(root.left, newNode)
            }
        } else {
            if (root.right === null) {
                root.right = newNode
            } else {
                this.insertNode(root.right, newNode)
            }
        }
    }

    search(root, value) {
        if (!root) {
            return false
        } else {
            if (root.value === value) {
                return true
            } else if (value < root.value) {
                return this.search(root.left, value)
            } else {
                return this.search(root.right, value)
            }

        }

    }

    preOrder(root) {
        if (root) {
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    inOrder(root) {
        if (root) {
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
        }
    }

    postOrder(root) {
        if (root) {
            this.postOrder(root.left)
            this.postOrder(root.rigth)
            console.log(root.value);
        }
    }
    levelOrder() {
        const queue = []
        queue.push(this.root)
        while (queue.length) {
            let curr = queue.shift()
            console.log(curr.value);
            if (curr.left) {
                queue.push(curr.left)
            }
            if (curr.right) {
                queue.push(curr.right)
            }
        }
    }

    min(root) {
        if (!root.left) {
            return root.value
        } else {
            return this.min(root.left)
        }
    }

    max(root) {
        if (!root.right) {
            return root.value
        } else {
            return this.max(root.right)
        }
    }

    delete(value) {
        console.log(this.root, 'first');
        this.root = this.deleteNode(this.root, value)
        console.log(this.root, 'second');
    }

    deleteNode(root, value) {
        if (root === null) {
            return root
        }

        if (value < root.value) {
            root.left = this.deleteNode(root.left, value)
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value)
        } else {
            if (!root.left && !root.right) {
                return null
            }
            if (!root.right) {
                return root.left
            }
            if (!root.left) {
                return root.right
            }
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right, root.value)
        }
        return root
    }

    isValidBST(root, min = null, max = null) {
        if (!root) {
            return true
        }
        if (max !== null && root.value >= max) {
            return false
        }
        if (min !== null && root.value <= min) {
            return false
        }

        const leftSide = this.isValidBST(root.left, min, root.value)
        const rightSide = this.isValidBST(root.right, root.value, max)

        return leftSide && rightSide
    }

    // findClosestValue(root,target){
    //     let curr=root
    //     let closest=root.value

    //     while(curr!=null){
    //         if(Math.abs(target-closest)>Math.abs(target-curr.value)){
    //             closest=curr.value
    //             // console.log(closest);
    //         }
    //         if(target<curr.value){
    //             curr=curr.left
    //         }else if(target>curr.value){
    //             curr=curr.right
    //         }else{
    //             break;
    //         }
    //     }
    //     return closest
    // }

    findClosestValue(root, target) {
        let curr = root
        let closest = root.value
        while (curr != null) {
            if (Math.abs(target - closest) > Math.abs(target - curr.value)) {
                closest = curr.value
            }

            if (target < curr.value) {
                curr = curr.left
            } else if (target > curr.value) {
                curr = curr.right
            } else {
                break;
            }

        }
        return closest
    }

}

// const bst = new BinarySearchTree()

console.log('tree is empty', bst.isEmpty());

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)

// console.log(bst.root);
// console.log(bst.root.value);
bst.levelOrder()
bst.delete(10)
console.log('second');
bst.levelOrder()

console.log(bst.search(bst.root, 10));

console.log(bst.findClosestValue(bst.root, 8));


class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    isEmpty() {
        return this.root === null
    }

    insert(value) {
        const newNode = new Node(value)
        if (this.isEmpty()) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode
            } else {
                this.insertNode(root.left, newNode)
            }
        } else {
            if (root.right === null) {
                root.right = newNode
            } else {
                this.insertNode(root.right, newNode)
            }
        }
    }

    search(root, value) {
        if (!root) {
            return false
        } else {
            if (root.value == value) {
                return true
            } else if (value < root.value) {
                return this.search(root.left, value)
            } else {
                return this.search(root.right, value)
            }
        }
    }

    preOrder(root) {
        if (root) {
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root) {
        if (root) {
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
        }
    }

    postOrder(root) {
        if (root) {
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
        }
    }

    levelOrder() {
        let queue = []
        queue.push(this.root)
        if (queue.length) {
            let curr = queue.shift()
            console.log(curr.value);
            if (curr.left) {
                queue.push(curr.left)
            }
            if (curr.right) {
                queue.push(curr.right)
            }
        }
    }

    min(root) {
        if (!root.left) {
            return root.value
        } else {
            this.min(root.left)
        }
    }

    max(root) {
        if (!root.right) {
            return root.value
        } else {
            this.max(root.right)
        }
    }

    delete(value) {
        this.root = this.deleteNode(this.root, value)
    }

    deleteNode(root, value) {
        if (root === null) {
            return root
        }
        if (value < root.value) {
            root.left = this.deleteNode(root.left, value)
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value)
        } else {
            if (!root.left && !root.right) {
                return null
            }
            if (!root.right) {
                return root.left
            }
            if (!root.left) {
                return root.right
            }
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.righ, root.value)
        }
        return root
    }

    isValidBST(root, min = null, max = null) {
        if (!root) {
            return true
        }
        if (!max == null && root.value >= max) {
            return false
        }
        if (!min == null && root.value <= min) {
            return false
        }

        const leftSide = this.isValidBST(root.left, min, root.value)
        const rightSide = this.isValidBST(root.right, root.value, max)

        return leftSide && rightSide
    }

    findClosestValue(root, target) {
        let curr = root
        let closest = root.value
        while (curr != null) {
            if (Math.abs(target - closest) > Math.abs(target - curr.value)) {
                closest = curr.value
            }
            if (target < curr.value) {
                curr = curr.left
            } else if (target > curr.value) {
                curr = curr.right
            } else {
                break;
            }
            return closest
        }

    }
}

