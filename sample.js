// 1 fibonacci sequence

// function fibonacci(n){
//     let fib=[0,1]
//     for(i=2;i<n;i++){
//         fib[i]=fib[i-1]+fib[i-2]
//     }
//     return fib
// }

// console.log(fibonacci(2));
// console.log(fibonacci(3));
// console.log(fibonacci(7));


//Big-o=0(n)   fionacci

// 2 factorial

// function factorial(n){
//    let result=1
//    for(i=2;i<=n;i++){
//     result=result*i
//    }
//    return result
// }

// console.log(factorial(0));
// console.log(factorial(1));
// console.log(factorial(5));


//Big-O=O(n)  fact


// function isPrime(n){
//     if(n<2){
//         return false
//     }

//     for(i=2;i<n;i++){
//         if(n%i===0){
//             return false
//         }

//     }
//     return true


// }

// console.log(isPrime(2));
// console.log(isPrime(1));
// console.log(isPrime(5));
// console.log(isPrime(4));

// Big-o=O(n)


// function isPrime(n){
//         if(n<2){
//             return false
//         }

//         for(i=2;i<Math.sqrt(n);i++){
//             if(n%i===0){
//                 return false
//             }

//         }
//         return true


//     }

//     console.log(isPrime(2));
//     console.log(isPrime(1));
//     console.log(isPrime(5));
//     console.log(isPrime(4));

// Big-o=O(sqrt(n))


//power of two


// function isPowerofTwo(n){
//     if(n<1){
//         return false
//     }

//     while(n>1){
//         if(n%2!=0){
//             return false
//         }
//         n=n/2
//     }
//     return true

// }


// console.log(isPowerofTwo(1));  //true
// console.log(isPowerofTwo(2));  //true
// console.log(isPowerofTwo(5));  //false

//Bif-O=O(logn)

//kili video workoit
// let x=[6,5,4,3,9,8,0]
// let y=10

//    function sumTwo(a,n){
//     for(i=0;i<a.length;i++){

//         for(j=1;j<a.length;j++){
//             if(a[i]+a[j]===n){

//                 return [a[i],a[j]]

//             }
//         }
//     }
//    }
// console.log(sumTwo(x,y));


//just do class and constructor concept in javascropt          1111
// class Stack{
//     constructor(){
//         this.items=[9,9]
//         console.log('jfhsdfjhdj');
//     }

//     print(){
//         console.log(this.items);
//     }
//     push(element){
//         this.items.push(element)
//         return this.items
//     }
// }

// const stack=new Stack
// console.log(stack.push(10));
// console.log(stack.push(10));

// console.log(stack.push(10));

// stack.print()
//                                                           1111


//    class Cars{
//     constructor(elememt){
//         this.value=elememt
//         console.log(this.value);
//     }
//    }

//    const car=new Cars(10)    //10



//linked lists

// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }

// class LinkeList{
//     constructor(){
//         this.head=null
//         this.size=0
//     }

//     isEmpty(){
//         return this.size===0
//     }

//     getSize(){
//         return this.size
//     }
// }

// const list=new LinkeList

// console.log('list is empty',list.isEmpty());
// console.log('list size',list.getSize());

//output
//list is empty true
//list size 0


//2nd

// class Node {
//     constructor(value) {
//         this.value = value
//         this.next = null
//     }
// }

// class LinkeList {
//     constructor() {
//         this.head = null
//         this.size = 0
//     }

//     isEmpty() {
//         return this.size === 0
//     }

//     getSize() {
//         return this.size
//     }

//     prepend(value) {
//         const node = new Node(value)
//         if (this.isEmpty()) {
//             this.head = node
//         } else {
//             node.next = this.head
//             this.head = node

//         }
//         this.size++
//     }

//     print(){
//         if(this.isEmpty()){
//             console.log('kuist us empty');
//         }else{
//             let curr=this.head 
//             let listValues=''
//             while(curr){
//                 listValues+=`${curr.value}`
//             curr=curr.next
//             }
//             console.log(listValues);
//         }
//     }
// }

// const list = new LinkeList

// console.log('list is empty', list.isEmpty());
// console.log('list size', list.getSize());
// list.print()
// list.prepend(10)
// list.print()
// list.prepend(20)
// list.prepend(30)
// list.print()

//output
// list is empty true
// list size 0
// kuist us empty
// 10
// 302010

//3   insert

// class Node {
//     constructor(value) {
//         this.value = value
//         this.next = null
//     }
// }

// class LinkeList {
//     constructor() {
//         this.head = null
//         this.size = 0
//     }

//     isEmpty() {
//         return this.size === 0
//     }

//     getSize() {
//         return this.size
//     }

// //O(1)

//     prepend(value) {
//         const node = new Node(value)
//         if (this.isEmpty()) {
//             this.head = node
//         } else {
//             node.next = this.head
//             this.head = node

//         }
//         this.size++
//     }

//     // O(n)

//     append(value){
//         const node=new Node(value)
//         if(this.isEmpty()){
//             this.head=node
//         }else{
//             let prev=this.head
//             while(prev.next){
//                 prev=prev.next
//             }
//             prev.next=node
//         }
//         this.size++
//     }

//     insert(value,index){
//         if(index<0 || index>this.size){
//             return
//         }
//         if(index===0){
//             this.prepend(value)
//         }else{
//             const node=new Node(value)
//             let prev=this.head
//             for(let i=0;i<index-1;i++){
//                 prev=prev.next
//             }
// node.next=prev.next
// prev.next=node
// this.size++
//         }
//     }

//     print(){
//         if(this.isEmpty()){
//             console.log('kuist us empty');
//         }else{
//             let curr=this.head 
//             let listValues=''
//             while(curr){
//                 listValues+=`${curr.value}`
//             curr=curr.next
//             }
//             console.log(listValues);
//         }
//     }
// }

// const list = new LinkeList

// console.log('list is empty', list.isEmpty());
// console.log('list size', list.getSize());
// list.print()
// list.insert(10,0)
// list.print()
// list.insert(20,0)
// list.print()
// list.insert(30,1)
// list.print()
// list.insert(40,2)
// list.print()
// console.log(list.getSize());


//output
// list is empty true
// list size 0
// kuist us empty
// 10
// 2010
// 203010
// 20304010
// 4



//4 remove

// class Node {
//     constructor(value) {
//         this.value = value
//         this.next = null
//     }
// }

// class LinkeList {
//     constructor() {
//         this.head = null
//         this.size = 0
//     }

//     isEmpty() {
//         return this.size === 0
//     }

//     getSize() {
//         return this.size
//     }

//     //O(1)

//     prepend(value) {
//         const node = new Node(value)
//         if (this.isEmpty()) {
//             this.head = node
//         } else {
//             node.next = this.head
//             this.head = node

//         }
//         this.size++
//     }

//     // O(n)

//     append(value) {
//         const node = new Node(value)
//         if (this.isEmpty()) {
//             this.head = node
//         } else {
//             let prev = this.head
//             while (prev.next) {
//                 prev = prev.next
//             }
//             prev.next = node
//         }
//         this.size++
//     }

//     insert(value, index) {
//         if (index < 0 || index > this.size) {
//             return
//         }
//         if (index === 0) {
//             this.prepend(value)
//         } else {
//             const node = new Node(value)
//             let prev = this.head
//             for (let i = 0; i < index - 1; i++) {
//                 prev = prev.next
//             }
//             node.next = prev.next
//             prev.next = node
//             this.size++
//         }
//     }

//     removeFrom(index){
//         if(index<0 || index>this.size){
//             return null
//         }
//         let removeNode
//         if(index===0){
//             removeNode=this.head
//             this.head=this.head.next
//         }else{
//             let prev=this.head
//             for(let i=0;i<index-1;i++){
//                 prev=prev.next
//             }
//             removeNode=prev.next
//             prev.next=removeNode.next 
//         }
//         this.size--
//         return removeNode.value
//     }

//     print() {
//         if (this.isEmpty()) {
//             console.log('kuist us empty');
//         } else {
//             let curr = this.head
//             let listValues = ''
//             while (curr) {
//                 listValues += `${curr.value}`
//                 curr = curr.next
//             }
//             console.log(listValues);
//         }
//     }
// }

// const list = new LinkeList

// console.log('list is empty', list.isEmpty());
// console.log('list size', list.getSize());
// list.print()
// list.insert(10, 0)
// list.print()
// list.insert(20, 0)
// list.print()
// list.insert(30, 1)
// list.print()
// list.insert(40, 2)
// list.print()
// console.log(list.getSize());


// console.log(list.removeFrom(10));
// console.log(list.removeFrom(0));
// list.print()

// console.log(list.removeFrom(1));
// list.print()


//output

// list is empty true
// list size 0
// kuist us empty
// 10
// 2010
// 203010
// 20304010
// 4
// null
// 20
// 304010
// 40
// 3010


//remove base on value


// class Node {
//     constructor(value) {
//         this.value = value
//         this.next = null
//     }
// }

// class LinkeList {
//     constructor() {
//         this.head = null
//         this.size = 0
//     }

//     isEmpty() {
//         return this.size === 0
//     }

//     getSize() {
//         return this.size
//     }

//     //O(1)

//     prepend(value) {
//         const node = new Node(value)
//         if (this.isEmpty()) {
//             this.head = node
//         } else {
//             node.next = this.head
//             this.head = node

//         }
//         this.size++
//     }

//     // O(n)

//     append(value) {
//         const node = new Node(value)
//         if (this.isEmpty()) {
//             this.head = node
//         } else {
//             let prev = this.head
//             while (prev.next) {
//                 prev = prev.next
//             }
//             prev.next = node
//         }
//         this.size++
//     }

//     insert(value, index) {
//         if (index < 0 || index > this.size) {
//             return
//         }
//         if (index === 0) {
//             this.prepend(value)
//         } else {
//             const node = new Node(value)
//             let prev = this.head
//             for (let i = 0; i < index - 1; i++) {
//                 prev = prev.next
//             }
//             node.next = prev.next
//             prev.next = node
//             this.size++
//         }
//     }

//     removeFrom(index){
//         if(index<0 || index>this.size){
//             return null
//         }
//         let removeNode
//         if(index===0){
//             removeNode=this.head
//             this.head=this.head.next
//         }else{
//             let prev=this.head
//             for(let i=0;i<index-1;i++){
//                 prev=prev.next
//             }
//             removeNode=prev.next
//             prev.next=removeNode.next 
//         }
//         this.size--
//         return removeNode.value
//     }

//     removeValue(value){
//         if(this.isEmpty()){
//             return null
//         }

//         if(this.head.value===value){
//              this.head=this.head.next
//              this.size--
//              return value
//         }else{
//             let prev=this.head
//             while(prev.next && prev.next.value!==value){
//                 prev=prev.next
//             }
//             if(prev.next){
//                let removeNode=prev.next
//                 prev.next=removeNode.next
//                 this.size--
//                 return value
//             }
//             return null
//         }
//     }

//     print() {
//         if (this.isEmpty()) {
//             console.log('kuist us empty');
//         } else {
//             let curr = this.head
//             let listValues = ''
//             while (curr) {
//                 listValues += `${curr.value}`
//                 curr = curr.next
//             }
//             console.log(listValues);
//         }
//     }
// }

// const list = new LinkeList

// console.log('list is empty', list.isEmpty());
// console.log('list size', list.getSize());
// list.print()
// list.insert(10, 0)
// list.print()
// list.insert(20, 0)
// list.print()
// list.insert(30, 1)
// list.print()
// list.insert(40, 2)
// list.print()
// console.log(list.getSize());

// console.log(list.removeValue(40));
// list.print()
// console.log(list.removeValue(20));
// list.print()



//search linked list

// class Node {
//     constructor(value) {
//         this.value = value
//         this.next = null
//     }
// }

// class LinkeList {
//     constructor() {
//         this.head = null
//         this.size = 0
//     }

//     isEmpty() {
//         return this.size === 0
//     }

//     getSize() {
//         return this.size
//     }

//     //O(1)

//     prepend(value) {
//         const node = new Node(value)
//         if (this.isEmpty()) {
//             this.head = node
//         } else {
//             node.next = this.head
//             this.head = node

//         }
//         this.size++
//     }

//     // O(n)

//     append(value) {
//         const node = new Node(value)
//         if (this.isEmpty()) {
//             this.head = node
//         } else {
//             let prev = this.head
//             while (prev.next) {
//                 prev = prev.next
//             }
//             prev.next = node
//         }
//         this.size++
//     }

//     insert(value, index) {
//         if (index < 0 || index > this.size) {
//             return
//         }
//         if (index === 0) {
//             this.prepend(value)
//         } else {
//             const node = new Node(value)
//             let prev = this.head
//             for (let i = 0; i < index - 1; i++) {
//                 prev = prev.next
//             }
//             node.next = prev.next
//             prev.next = node
//             this.size++
//         }
//     }

//     removeFrom(index){
//         if(index<0 || index>this.size){
//             return null
//         }
//         let removeNode
//         if(index===0){
//             removeNode=this.head
//             this.head=this.head.next
//         }else{
//             let prev=this.head
//             for(let i=0;i<index-1;i++){
//                 prev=prev.next
//             }
//             removeNode=prev.next
//             prev.next=removeNode.next 
//         }
//         this.size--
//         return removeNode.value
//     }

//     removeValue(value){
//         if(this.isEmpty()){
//             return null
//         }

//         if(this.head.value===value){
//              this.head=this.head.next
//              this.size--
//              return value
//         }else{
//             let prev=this.head
//             while(prev.next && prev.next.value!==value){
//                 prev=prev.next
//             }
//             if(prev.next){
//                let removeNode=prev.next
//                 prev.next=removeNode.next
//                 this.size--
//                 return value
//             }
//             return null
//         }
//     }

//     search(value){
//         if(this.isEmpty()){
//             return -1
//         }
//         let i=0
//         let curr=this.head
//         while(curr){
//             if(curr.value===value){
//                 return i
//             }
//             curr=curr.next
//             i++
//         }
//         return -1
//     }

//     print() {
//         if (this.isEmpty()) {
//             console.log('kuist us empty');
//         } else {
//             let curr = this.head
//             let listValues = ''
//             while (curr) {
//                 listValues += `${curr.value}`
//                 curr = curr.next
//             }
//             console.log(listValues);
//         }
//     }
// }

// const list = new LinkeList

// console.log('list is empty', list.isEmpty());
// console.log('list size', list.getSize());
// list.print()
// list.insert(10, 0)
// list.print()
// list.insert(20, 0)
// list.print()
// list.insert(30, 1)
// list.print()
// list.insert(40, 2)
// list.print()
// console.log(list.getSize());

// console.log(list.search(60));
// console.log(list.search(40));

//otput

// list is empty true
// list size 0
// kuist us empty
// 10
// 2010
// 203010
// 20304010
// 4
// -1
// 2



//5   REVERSE


// class Node {
//     constructor(value) {
//         this.value = value
//         this.next = null
//     }
// }

// class LinkeList {
//     constructor() {
//         this.head = null
//         this.size = 0
//     }

//     isEmpty() {
//         return this.size === 0
//     }

//     getSize() {
//         return this.size
//     }

//     //O(1)

//     prepend(value) {
//         const node = new Node(value)
//         if (this.isEmpty()) {
//             this.head = node
//         } else {
//             node.next = this.head
//             this.head = node

//         }
//         this.size++
//     }

//     // O(n)

//     append(value) {
//         const node = new Node(value)
//         if (this.isEmpty()) {
//             this.head = node
//         } else {
//             let prev = this.head
//             while (prev.next) {
//                 prev = prev.next
//             }
//             prev.next = node
//         }
//         this.size++
//     }

//     insert(value, index) {
//         if (index < 0 || index > this.size) {
//             return
//         }
//         if (index === 0) {
//             this.prepend(value)
//         } else {
//             const node = new Node(value)
//             let prev = this.head
//             for (let i = 0; i < index - 1; i++) {
//                 prev = prev.next
//             }
//             node.next = prev.next
//             prev.next = node
//             this.size++
//         }
//     }

//     removeFrom(index){
//         if(index<0 || index>this.size){
//             return null
//         }
//         let removeNode
//         if(index===0){
//             removeNode=this.head
//             this.head=this.head.next
//         }else{
//             let prev=this.head
//             for(let i=0;i<index-1;i++){
//                 prev=prev.next
//             }
//             removeNode=prev.next
//             prev.next=removeNode.next 
//         }
//         this.size--
//         return removeNode.value
//     }

//     removeValue(value){
//         if(this.isEmpty()){
//             return null
//         }

//         if(this.head.value===value){
//              this.head=this.head.next
//              this.size--
//              return value
//         }else{
//             let prev=this.head
//             while(prev.next && prev.next.value!==value){
//                 prev=prev.next
//             }
//             if(prev.next){
//                let removeNode=prev.next
//                 prev.next=removeNode.next
//                 this.size--
//                 return value
//             }
//             return null
//         }
//     }

//     search(value){
//         if(this.isEmpty()){
//             return -1
//         }
//         let i=0
//         let curr=this.head
//         while(curr){
//             if(curr.value===value){
//                 return i
//             }
//             curr=curr.next
//             i++
//         }
//         return -1
//     }

//     reverse(){
//         let prev=null
//         let curr=this.head
//         while(curr){
//             let next=curr.next
//             curr.next=prev
//             prev=curr
//             curr=next
//         }
//         this.head=prev
//     }

//     print() {
//         if (this.isEmpty()) {
//             console.log('kuist us empty');
//         } else {
//             let curr = this.head
//             let listValues = ''
//             while (curr) {
//                 listValues += `${curr.value}`
//                 curr = curr.next
//             }
//             console.log(listValues);
//         }
//     }
// }

// const list = new LinkeList

// console.log('list is empty', list.isEmpty());
// console.log('list size', list.getSize());
// list.print()
// list.insert(10, 0)
// list.print()
// list.insert(20, 0)
// list.print()
// list.insert(30, 1)
// list.print()
// list.insert(40, 2)
// list.print()


// list.reverse()
// list.print()

// OUTPUT

// list is empty true
// list size 0
// kuist us empty
// 10
// 2010
// 203010
// 20304010
// 10403020



//* linked list with tail *//

// class Node {
//     constructor(value) {
//         this.value = value
//         this.next = null
//         this.tail=null
//     }
// }

// class LinkeList {
//     constructor() {
//         this.head = null
//         this.size = 0
//     }

//     isEmpty() {
//         return this.size === 0
//     }

//     getSize() {
//         return this.size
//     }

//O(1)

//     prepend(value) {
//        const node=new Node(value)
//        if(this.isEmpty()){
//         this.head=node
//         this.tail=node
//        }else{
//         node.next=this.head
//         this.head=node
//        }
//        this.size++
//     }

//     // O(n)

//     append(value) {
//         const node=new Node(value)
//         if(this.isEmpty()){
//             this.head=node
//             this.tail=node
//         }else{
//             this.tail.next=node
//             this.tail=node
//         }
//         this.size++
//     }

//     insert(value, index) {
//         if (index < 0 || index > this.size) {
//             return
//         }
//         if (index === 0) {
//             this.prepend(value)
//         } else {
//             const node = new Node(value)
//             let prev = this.head
//             for (let i = 0; i < index - 1; i++) {
//                 prev = prev.next
//             }
//             node.next = prev.next
//             prev.next = node
//             this.size++
//         }
//     }

//     removeFromfrond(){
//       if(this.isEmpty()){
//         return null
//       }
//       const value=this.head.value
//       this.head=this.head.next
//       this.size--
//       return value
//     }

//     removeValueend(){
//      if(this.isEmpty()){
//         return null
//      }
//      const value=this.tail.value
//      if(this.size==1){
//         this.head=null
//         this.tail=null
//      }else{
//         let prev=this.head
//         while(prev.next!=this.tail){
//             prev=prev.next
//         }
//         prev.next=null
//         this.tail=prev
//      }
//      this.size-- 
//     }

//     search(value){
//         if(this.isEmpty()){
//             return -1
//         }
//         let i=0
//         let curr=this.head
//         while(curr){
//             if(curr.value===value){
//                 return i
//             }
//             curr=curr.next
//             i++
//         }
//         return -1
//     }

//     reverse(){
//         let prev=null
//         let curr=this.head
//         while(curr){
//             let next=curr.next
//             curr.next=prev
//             prev=curr
//             curr=next
//         }
//         this.head=prev
//     }

//     print() {
//         if (this.isEmpty()) {
//             console.log('kuist us empty');
//         } else {
//             let curr = this.head
//             let listValues = ''
//             while (curr) {
//                 listValues += `${curr.value}`
//                 curr = curr.next
//             }
//             console.log(listValues);
//         }
//     }
// }

// const list = new LinkeList

// console.log('list is empty', list.isEmpty());
// console.log('list size', list.getSize());
// list.print()


// list.append(1)
// list.append(2)
// list.append(3)
// list.prepend(0)
// list.print()
// console.log('size',list.getSize());

//otput

// list is empty true
// list size 0
// kuist us empty
// 0123
// size 4

//recursion
// function fn(n){
//     if(n<=1){
//         return n
//     }
//     return n*fn(n-1)
// }

// console.log(fn(5));


// function fn(n){
//     if(n<=1){
//         return
//     }
//     fn(n-1)
// console.log(n);
//     fn(n-1)
// }

// fn(5)


//recuresive fibonacci

// function nFu(n){
//     if(n<2){
//         return n
//     }
//     return nFu(n-1)+nFu(n-2)
// }

// console.log(nFu(0));   //otput 0
// console.log(nFu(1));   //otput 1
// console.log(nFu(6));   //otput 8


//O(n) iterative solution

//O(2^n) is revursile solutuiobn

//recursive factorial of a number

// function recuresiveFactorail(n){
//     if(n===0){
//         return 1
//     }

//     return n*recuresiveFactorail(n-1)
// }

// console.log(recuresiveFactorail(0));  //1
// console.log(recuresiveFactorail(1));  //1
// console.log(recuresiveFactorail(5));  //120


// BigInt(o)=O(n)

// Linear search

// function linearSearch(arr,target){
//     for(i=0;i<arr.length;i++ ){
//         if(arr[i]===target){
//             return i
//         }
//     }
//     return -1
// }

// console.log(linearSearch([-5,2,10,4,6],10));
// console.log(linearSearch([-5,2,10,4,6],6));
// console.log(linearSearch([-5,2,10,4,6],20));

// BigInt(o)=O(n)

//Binary Search

// function binarySearch(arr,target){

//    let leftIndex=0
//   let  rightIndex=arr.length-1

//     while(leftIndex<=rightIndex){

//       let middleIndex=Math.floor((leftIndex+rightIndex)/2)

//         if(target===arr[middleIndex]){
//             return middleIndex
//         }else if(target<arr[middleIndex]){
//             rightIndex=middleIndex-1
//         }else if(target>arr[middleIndex]){
//             leftIndex-middleIndex+1
//         }
//     }
//     return -1

// }

// console.log(binarySearch([-5,2,4,6,10],4));
// console.log(binarySearch([-5,2,4,6,10],6));
// console.log(binarySearch([-5,2,4,6,10],20));

//Big(o)=O(logn)  


//recursive binary search

// function recursiveBinarySearch(arr,target){
//     return search(arr,target,0,arr.length-1)
// }

// function search(arr,target,leftIndex,rightIndex){
//     if(leftIndex>rightIndex){
//         return -1
//     }
//     let middleIndex=Math.floor((rightIndex+leftIndex)/2)
//     if(target===arr[middleIndex]){
//         return middleIndex
//     }
//     if(target<arr[middleIndex]){
//         return search(arr,target,leftIndex,middleIndex-1)
//     }else{
//         return search(arr,target,middleIndex+1,rightIndex)

//     }
// }

// console.log(recursiveBinarySearch([-5,2,4,6,10],10));  //4
// console.log(recursiveBinarySearch([-5,2,4,6,10],6));  //3
// console.log(recursiveBinarySearch([-5,2,4,6,10],20));  //-1

//Big(O)=O(logn)

//stack

// class Stack {
//     constructor() {
//         this.items = []
//     }
//     push(elememt) {
//         this.items.push(elememt)
//     }
//     pop() {
//         this.items.pop()
//     }
//     peek() {
//         return this.items[this.items.length - 1]
//     }
//     isEmpty() {
//         return this.items.length === 0
//     }
//     size() {
//         return this.items.length
//     }
//     print() {
//         console.log(this.items);
//         console.log(this.items.toString());
//     }
// }

// const stack=new Stack
// console.log(stack.isEmpty());

// stack.push(20)
// stack.push(10)
// stack.push(30)

// stack.print()

// stack.pop()

// console.log(stack.size());
// console.log(stack.peek());

//Queue

// class Queue{
//     constructor(){
//         this.items=[]
//     }
// enqueue(element){
//     this.items.push(element)
// }
// dequeue(){
//     return this.items.shift()
// }
// isEmpty(){
//     return this.items.length===0
// }
// peek(){
//     if(!this.isEmpty()){
//         return this.items[0]
//     }
//     return null
// }
// size(){
//     return this.items.length
// }
// print(){
//     console.log(this.items);
//     console.log(this.items.toString());

// }
// }

// const queue=new Queue

// console.log(queue.isEmpty());

// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// console.log(queue.size());

// queue.print()

// console.log(queue.dequeue());
// console.log(queue.peek());
// queue.print()


//queue implementation optimized

// class Queue{
//     constructor(){
//         this.items={}
//         this.rear=0
//         this.front=0
//     }
//     enqueue(elememt){
//         this.items[this.rear]=elememt
//         this.rear++
//     }
//     dequeue(){
//         const item=this.items[this.front]
//         delete this.items[this.front]
//         this.front++
//         return item
//     }
//     isEmpty(){
//         return this.rear-this.front===0
//     }
//     peek(){
//         return this.items[this.front]
//     }
//     size(){
//         return this.rear-this.front
//     }
//     print(){
//         console.log(this.items);
//     }
// }

// const queue=new Queue

// console.log(queue.isEmpty());
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// console.log(queue.size());
// queue.print()
// console.log(queue.peek());
// console.log(queue.dequeue());
// queue.print()
// console.log(queue.peek());

// in this case both dequeue and enqueue are constand time complexicity

//Circular queue

// class CircularQueue{
//     constructor(capacity){
//         this.items=new Array(capacity)
//         this.capacity=capacity
//         this.currentLength=0
//         this.rear=-1
//         this.front=-1
//     }

//     isFull(){
//         return this.currentLength===this.capacity
//     }

//     isEmpty(){
//         return this.currentLength===0
//     }

//     enqueue(elememt){
//       if(!this.isFull()){
//         this.rear=(this.rear+1)%this.capacity
//         this.items[this.rear]=elememt
//         this.currentLength+=1
//       }
//       if(this.front===-1){
//         this.front=this.rear
//       }

//     }

//     dequeue(){
//         if(this.isEmpty()){
//             return null
//         }
//         const item=this.items[this.front]
//         this.items[this.front]=null
//         this.front=(this.front+1)%this.capacity
//         this.currentLength-=1
//         if(this.isEmpty()){
//             this.rear=-1
//             this.front=-1
//         }
//         return item
//     }

//     peek(){
//         if(!this.isEmpty()){
//             return this.items[this.front]
//         }
//         return null
//     }

//     print(){
//         if(this.isEmpty()){
//             console.log('Queue is empty');
//         }else{
//             let i
//             let str=''
//             for(i=this.front;i!==this.rear;i=(i+1)%this.capacity){
//                 str+=this.items[i]+' '
//             }
//             str +=this.items[i]
//             console.log(str);
//         }
//     }
// }

// const queue=new CircularQueue(5)
// console.log(queue.isEmpty());

// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.enqueue(40)
// queue.enqueue(50)


// console.log(queue.isFull());
// queue.print()

// let a=[1,2,3,4,5,6,7,8,9,10]

// for(i=0,j=9;i<=j;i++,j--){
//     console.log(a[i]+a[j]);
// }

// let str="hellow-everyone"
// let str1='especially'
// console.log(str);
// console.log(str[8]);
// console.log(str.indexOf("l"));
// console.log(str.indexOf("l",5));
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.substring(2,5));
// console.log(str.includes("z"));
// console.log(str.slice(0,5));
// console.log(str.replace('everyone','nokkaanm'));
// console.log(str.replace('n','m'));
// console.log(str.replaceAll('e','t'));
// console.log(str.concat('-',str1));
// console.log(str);
// let str3='   hellooo'
// console.log(str3);
// console.log(str3.trim());
// let str4='      hiiiiii     '
// console.log(str4.trim());
// console.log(str4.trimStart());
// console.log(str4.trimEnd());
// let str5='Ak'
// console.log(str5.padStart(8,'x'));
// console.log(str5.padStart(4,'x'));
// console.log(str5.padEnd(8,'x'));
// console.log(str5.padEnd(4,'x'));
// console.log(str5[0]);
// console.log(str5.charAt(0));
// console.log(str5.charCodeAt(0));
// let text = "Please locate where 'locate' occurs!";
// console.log(text.lastIndexOf("locate"));


let string='najumudheen'
let newString=''
for(i=0;i<string.length-6;i++){
    newString+=string[i]
}
console.log(newString);
let opz='naju' + "jjjj"
console.log(opz);