// class HashTable {
//     constructor(size) {
//         this.table = new Array(size)
//         this.size = size
//     }

//     hash(key) {
//         let total = 0
//         for (let i = 0; i < key.length; i++) {
//             total += key.charCodeAt(i)
//         }
//         return total % this.size
//     }
//     set(key, value) {
//         const index = this.hash(key)
//         this.table[index] = value
//     }
//     get(key) {
//         const index = this.hash(key)
//         return this.table[index]
//     }
//     remove(key) {
//         const index = this.hash(key)
//         this.table[index] = undefined
//     }

//     display() {
//         for (let i = 0; i < this.table.length; i++) {
//             if (this.table[i]) {
//                 console.log(i, this.table[i]);
//             }

//         }
//     }
// }

// const table = new HashTable(50)
// table.set("name", "hamras")
// table.set("age", 99)
// table.display()
// console.log(table.get("name"));


// remove Collisions o👎


// class HashTable {
//     constructor(size) {
//         this.table = new Array(size)
//         this.size = size
//     }

//     hash(key) {
//         let total = 0
//         for (let i = 0; i < key.length; i++) {
//             total += key.charCodeAt(i)
//         }
//         return total % this.size
//     }
//     // o(1)
//     set(key, value) {
//         const index = this.hash(key)
//         const bucket = this.table[index]
//         if (!bucket) {
//             this.table[index] = [[key, value]]
//         } else {
//             const samekeyitems = bucket.find(item => item[0] === key)
//             if (samekeyitems) {
//                 samekeyitems[1] = value
//             } else {
//                 bucket.push([key, value])
//             }
//         }
//     }

//     // o(1)
//     get(key) {
//         const index = this.hash(key)
//         const bucket = this.table[index]
//         if (bucket) {
//             const samekeyitems = bucket.find(item => item[0] === key)
//             if (samekeyitems) {
//                 return samekeyitems[1]
//             }
//         }
//         return undefined
//     }
//     // o(1)

//     remove(key) {
//         const index = this.hash(key)
//         // this.table[index] = und  efined
//         const bucket = this.table[index]
//         if (bucket) {
//             const samekeyitems = bucket.find(item => item[0] === key)
//             if (samekeyitems) {
//                 bucket.splice(bucket.indexOf(samekeyitems), 1)
//             }
//         }

//     }
//     // o👎
//     display() {
//         for (let i = 0; i < this.table.length; i++) {
//             if (this.table[i]) {
//                 console.log(i, this.table[i]);
//             }

//         }
//     }
// }

// const table = new HashTable(50)
// table.set("name", "bruse")
// table.set("name", "bruse")
// table.set("age", "25")
// table.display()
// console.log(table.get("name"));
// table.set("mane", "clark")
// table.display()

// console.log(table.get("name"));


// ASCII 
//  to👎
// sO👎
// mutable and ummutable 
// An object whose internal state can be changed is mutable. 
// On the other hand, immutable doesn't allow any change in the object once it has been created.


// In JavaScript, objects and arrays are mutable by default, but primitive values are not — 
// once a primitive value is created, it cannot be changed, although the variable that holds it may be reassigned


// string concatenation o(m+n)

// 97..122


// let string = "Hamras"

// for (let i = 0; i < string.length; i++) {
//         console.log(string[i]);

// }

// O(N2) o(m*n)  

// let string ="kokko"
// let hell="lplplp"
// console.log(string);
// hi=true
// for (let i = 0; i < hell.length; i++) {
//     if(hi){
//         string= string+" "
//     }else{
//         string= string+i
//     }
//     hi=false
// }
// console.log(string);






// let string ="kokko"
// let string1=""
// console.log(string);
// for (let i = 0; i < string.length; i++) {
//     if(i===2){
//         string1+= "r"
//     }else{

//         string1+= string[i]
//     }

// }
// console.log(string1);




// let string="hamras"
// let str1=""
// for (let i = string.length-1; i >=0 ; i--) {
//     str1+= string[i]
// }
// console.log(str1);


// let string="hamras"
// let str1=""
// for (let i = string.length-1; i >=0 ; i--) {
//     str1+= string[i]
// }
// console.log(str1);


// let hi="hamras"
// let first =1
// let seco =3
// let newstr=""

// for (let i = 0; i < hi.length; i++) {
//     if(i>first && i<seco){
//         newstr+=hi[i]
//     }
// }
// console.log(newstr);


// for (let i = 0; i < array.length; i++) {
//     const element = array[i];

// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let str="hana-p-p"
// console.log(str.slice(2,4));
// let newstr=""
// function slice1(first,seco){
//   for (let i = 1; i < str.length; i++) {
//         if(i>=first && i<seco){
//             newstr+=str[i]
//         }
//   }
// console.log(newstr);

// }
// slice1(2,4)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let str="this is brototype"

// console.log(str.substring(2,4));
// console.log(str.substr(2,4));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let str="this is brototype"
// let newstr=""
// console.log(str.replace("this","that"));

// function replace1(first,seco){
//     for (let i = 0; i < str.length; i++) {
//         if(str[i]!=first){
//             newstr+=str[i]
//         }else{
//             newstr+=seco
//         }
//     }

//     console.log(newstr);


// }
// replace1("b","p")
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




// let first="hii"
// let secon="naju"


// console.log(first.concat(" ",secon));

// for (let i = 0; i < secon.length; i++) {
//     first+=secon[i]
// }
// console.log(first);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




// let string="malayalam"


// function checkPalindrome(string) {

//     const len = string.length;

//     for (let i = 0; i < len / 2; i++) {

//         if (string[i] !== string[len - 1 - i]) {
//             return 'It is not a palindrome';
//         }
//     }
//     return 'It is a palindrome';
// }
// const value = checkPalindrome(string);

// console.log(value);

// class HashTable{
//     constructor(size){
//         this.table=new Array(size)
//         this.size=size
//     }
//     hash(key){
//         let total=0
//         for(let i=0;i<key.length;i++){
//              total+=key.charCodeAt(i)
//         }
//         return total%this.size
//     }

//     set(key,value){
//         let index=this.hash(key)
//         this.table[index]=value
//     }
//     get(key){
//         let index=this.hash(key)
//         return this.table[index]
//     }
//     remove(key){
//         let index=this.hash(key)
//         this.table[index]=undefined
//     }
//     display(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i]);
//             }
//         }
//     }
// }


// const table=new HashTable(50)

// table.set('name','najumudheen')
// table.set('age',14)
// table.display()

// console.log(table.get('name'));
// table.remove('name')
// table.display()



// class HashTable {
//     constructor(size) {
//         this.table = new Array(size)
//         this.size = size
//     }
//     hash(key) {
//         let total = 0
//         for (let i = 0; i < key.length; i++) {
//             total += key.charCodeAt(i)
//         }
//         return total % this.size
//     }

//     set(key, value) {
//         let index = this.hash(key)
//         // this.table[index]=value
//         const bucket = this.table[index]
//         if (!bucket) {
//             this.table[index] = [[key, value]]
//         } else {
//             let samekeyitem = bucket.find((item) => item[0] === key)
//             if (samekeyitem) {
//                 samekeyitem[1] = value
//             } else {
//                 this.table[index].push([key, value])
//             }
//         }
//     }
//     get(key) {
//         let index = this.hash(key)
//         // return this.table[index]
//         let bucket=this.table[index]
//         if(bucket){
//             const samekeyitem=bucket.find((item)=>item[0]===key)
//             if(samekeyitem){
//                 return samekeyitem[1]
//             }
//         }
//         return undefined
//     }
//     remove(key) {
//         let index = this.hash(key)
//         // this.table[index] = undefined
//         let bucket=this.table[index]
//         if(bucket){
//             const samekeyitem=bucket.find((item)=>item[0]===key)
//             if(samekeyitem){
//                 bucket.splice(bucket.indexOf(samekeyitem),1)
//             }
//         }
//     }
//     display() {
//         for (let i = 0; i < this.table.length; i++) {
//             if (this.table[i]) {
//                 console.log(i, this.table[i]);
//             }
//         }
//     }
// }


// const table = new HashTable(50)

// table.set('name', 'najumudheen')
// table.set('age', 14)
// table.display()

// console.log(table.get('name'));
// table.set('mane', 'najumudheen')
// table.set('name', 'najumudhesdsdsen')
// table.display()
// let a=97
// let string='Zaaiii'
// console.log(string.charCodeAt(0));
// console.log(String.fromCharCode(string.charCodeAt(0)));

//reverse a string

// let a='najumudheen'
// let b=''
// for(i=a.length-1;i>=0;i--){
// b+=a[i]
// }
// console.log(b);

//   check palidndrime





// function jjj(a) {
//     for(i=0;i<a.length/2;i++){
//         if(a[i]!==a[a.length-i-1]){
//     return false
//         }

//     }
//     return true
// }

// console.log(jjj('malayalamm'));


// concatenation


// function concat(a,b) {
//     for(i=0;i<b.length;i++){
//         a+=b[i]
//      }
//      return a
// }

// console.log(concat('naju','mudheen'));

//charcter changing


// function posChar(a,b,c) {
//     let newstrn=''
//     for(i=0;i<a.length;i++){
//         if(a[i]===b){
//             newstrn+=c
//         }else{
//             newstrn+=a[i]
//         }

//     }
//     return newstrn


// }
// console.log(posChar('malayalaam','a','c'));



//slice
// function slce(a, b, c) {
//     let newstrg = ''
//     for (i = 0; i < a.length; i++) {
//         if (i >= b && i < c) {
//             newstrg += a[i]
//         }
//     }
//     return newstrg
// }

// console.log(slce('malayalam', 0, 5));

