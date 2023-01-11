// class TrieNode {
//     constructor(key){
//         this.key = key;
      
//         this.parent = null;
        
//         this.children = {};
        
//         this.end = false;
//     }
      
//       getWord = function() {
//         let output = [];
//         let node = this;
    
//         while (node !== null) {
//           output.unshift(node.key);
//           node = node.parent;
//         }
    
//         return output.join('');
//       };
//     }
    
//   class Trie {
//       constructor(){
//           this.root = new TrieNode(null);
//       }
      
//      insert = function(word) {
//         let node = this.root; 
    
//         for(let i = 0; i < word.length; i++) {
//           if (!node.children[word[i]]) {
//             node.children[word[i]] = new TrieNode(word[i]);
    
//             node.children[word[i]].parent = node;
//           }
    
//           node = node.children[word[i]];
    
//           if (i == word.length-1) {
//             node.end = true;
//           }
//         }
//       };
      
//     contains = function(word) {
//         let node = this.root;
    
//         for(let i = 0; i < word.length; i++) {
//           if (node.children[word[i]]) {
//             node = node.children[word[i]];
//           } else {
//             return false;
//           }
//         }
    
//         return node.end;
//       };
      
//       find = function(prefix) {
//         let node = this.root;
//         let output = [];
    
//         for(let i = 0; i < prefix.length; i++) {
//           if (node.children[prefix[i]]) {
//             node = node.children[prefix[i]];
//           } else {
//             return output;
//           }
//         }
    
//         this.findAllWords(node, output);
    
//         return output;
//       };
      
//       findAllWords = (node, arr) => {
//         if (node.end) {
//           arr.unshift(node.getWord());
//         }
    
//         for (let child in node.children) {
//           this.findAllWords(node.children[child], arr);
//         }
//       }
    
//    remove = function (word) {
//           let root = this.root;
    
//           if(!word) return;
    
//           const removeWord = (node, word) => {
    
//               if (node.end && node.getWord() === word) {
    
//                   let hasChildren = Object.keys(node.children).length > 0;
    
              
//                   if (hasChildren) {
//                       node.end = false;
//                   } else {
//                       node.parent.children = {};
//                   }
    
//                   return true;
//               }
    
//               for (let key in node.children) {
//                   removeWord(node.children[key], word)
//               }
    
//               return false
//           };
    
//           removeWord(root, word);
//       };
//     }
//   const trie = new Trie();
  
//   trie.insert("peter");
//   trie.insert("piper");
//   trie.insert("picked");
//   trie.insert("pickled");
//   trie.insert("pepper");
  
//   console.log(trie.contains("picked"));  
//   console.log(trie.contains("pepper")); 
//   trie.remove("pepper");
//   console.log(trie.find("pi"));  
//   console.log(trie.find("pe")); 

// class BinaryHeap {
//     constructor() {
//         this.list = []
//     }
//     minHeapify = (arr, n, i) => {
//         let smallest = i
//         let l = 2 * i + 1
//         let r = 2 * i + 2

//         if (l < n && arr[l] < arr[smallest]) {
//             smallest = l
//         }
//         if (r < n && arr[r] < arr[smallest]) {
//             smallest = r
//         }
//         if (smallest != i) {
//             let temp = arr[i]
//             arr[i] = arr[smallest]
//             arr[smallest] = temp

//             this.minHeapify(arr, n, smallest)
//         }
//     }

//     insert = (num) => {
//         const size = this.list.length
//         if (size === 0) {
//             this.list.push(num)
//         } else {
//             this.list.push(num)

//             for (let i = parseInt(this.list.length / 2 - 1); i >= 0; i--) {
//                 this.minHeapify(this.list, this.list.length , i)
//             }
//         }
//     }

//     delete=(num)=>{
//         const size=this.list.length
// let i
//         for( i=0;i<size;i++){
//             if(num===this.list[i]){
//                 break;
//             }
//         }
//         [this.list[i],this.list[size-1]]=[this.list[size-1],this.list[i]]

//         this.list.splice(size-1)
//         for(let i=(this.list.length/2-1);i>=0;i--){
//             this.minHeapify(this.list,size,i)
//         }
//     }

//     findMin=()=>this.list[0]
//     deleteMin=()=>{
//         this.delete(this.list[0])
//     }

//     extractMin=()=>{
//         const min=this.list[0]
//         this.delete(min)
//         return min
//     }

//     size=()=>this.list.length

//     isEmpty=()=>this.list.length===0

//     getList=()=>this.list
// }

// const heap = new BinaryHeap();
// heap.insert(3);

// heap.insert(4);

// heap.insert(9);

// heap.insert(5);

// heap.insert(2);

// console.log(heap.getList());

// heap.delete(9);
// console.log(heap.getList());

// heap.insert(7);
// console.log(heap.getList());

// class BinaryHeap {
//     constructor() {
//         this.list = []
//     }

//     maxHeapify = (arr, n, i) => {
//         let largest = i
//         let l = 2 * i + 1
//         let r = 2 * i + 2
//         if (l < n && arr[l] > arr[largest]) {
//             largest = l
//         }
//         if (r < n && arr[r] > arr[largest]) {
//             largest = r
//         }

//         if (largest != i) {
//             let temp = arr[i]
//             arr[i] = arr[largest]
//             arr[largest] = temp
//             this.maxHeapify(arr, n, largest)
//         }

//     }

//     insert = (num) => {
//         let size = this.list.length
//         if (size === 0) {
//             this.list.push(num)
//         } else {
//             this.list.push(num)

//             for (let i = parseInt(this.list.length / 2 - 1); i >= 0; i--) {
//                 this.maxHeapify(this.list, this.list.length, i)
//             }
//         }
//     }

//     delete = (num) => {
//         let size = this.list.length
//         let i
//         for (i = 0; i < size; i++) {
//             if (num === this.list[i]) {
//                 break
//             }
//         }

//         [this.list[i], this.list[size - 1]] = [this.list[size - 1], this.list[i]]

//         this.list.splice(size - 1)

//         for (let i = (this.list.length / 2 - 1); i >= 0; i--) {
//             this.maxHeapify(this.list, this.list.length, i)
//         }
//     }

//     findMax = () => this.list[0]

//     deleteMax = () => {
//         this.delete(this.list[0])
//     }
//     extractMax = () => {
//         const max = this.list[0]
//         this.delete(max)
//         return max

//     }

//     size = () => this.list.length

//     isEmpty = () => this.list.length === 0

//     getList = () => this.list
// }

// const heap = new BinaryHeap();
// heap.insert(3);
// heap.insert(4);
// heap.insert(9);
// heap.insert(5);
// heap.insert(2);

// console.log(heap.getList());

// heap.delete(9);
// console.log(heap.getList());

// heap.insert(7);
// console.log(heap.getList());


// class TrieNode{
//     constructor(key){
//         this.key=key
//         this.parent=null
//         this.children={}
//         this.end=false

//     }

// }


// class Trie{
//     constructor(){
//         this.root=new TrieNode(null)
//     }

//     insert=(word)=>{
//         let node=this.root

//         for(let i=0;i<word.length;i++){
//             if(!node.children[word[i]]){
//                 node.children[word[i]]=new TrieNode[word[i]]
//                 node.children[word[i]].parent=node
//             }
//             node=node.children[word[i]]

//             if(i==word.length-1){
//                 this.end=true
//             }
//         }
//     }

//     contains=(word)=>{
//         let node=this.root
//         for(i=0;i<word.length;i++){
//             if(node.children[word[i]]){
//                 node=node.children[word[i]]
//             }else{
//                 return false
//             }
//         }
//         return node.end
//     }
// }

class 