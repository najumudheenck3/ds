// // class HashTable{
// //     constructor(size){
// //         this.table=new Array(size)
// //         this.size=size
// //     }
// //     hash(key){
// //         let total=0
// //         for(let i=0;i<key.length;i++){
// //             total+=key.charCodeAt(i)
// //         }
// //         return total%this.size
// //     }
// //     set(key,value){
// //         let index=this.hash(key)
// //         this.table[index]=value
// //     }
// //     get(key){
// //         let index=this.hash(key)
// //         return this.table[index]
// //     }
// //     remove(key){
// //         let index=this.hash(key)
// //         this.table[index]=undefined
// //     }
// //     display(){
// //         for(let i=0;i<this.size;i++){
// //             if(this.table[i]){
// //                 console.log(i , this.table[i]);
// //             }
// //         }
// //     }
// // }

// // const table=new HashTable(50)
// // table.set('name','najumudheen')
// // table.set('age',14)
// // table.display()

// // console.log(table.get('name'));
// // table.remove('name')
// // table.display()


// class HashTable{
//     constructor(size){
//         this.table=new Array(size)
//         this.size=size
//     }
//     hash(key){
//         let total=0
//         for(let i=0;i<key.length;i++){
//             total+=key.charCodeAt(i)
//         }
//         return total%this.size
//     }
//     set(key,value){
//         let index=this.hash(key)
//         let bucket=this.table[index]
//         if(!bucket){
//             this.table[index]=[[key,value]]
//         }else{
//             let samekeyitem=bucket.find((item)=>item[0]===key)
//             if(samekeyitem){
//                 samekeyitem[1]=value
//             }else{
//                 bucket.push([key,value])
//             }

//         }
//     }
//     get(key){
//         let index=this.hash(key)
//         let bucket=this.table[index]
//         if(bucket){
//             let samekeyitem=bucket.find((item)=>item[0]===key)
//             if(samekeyitem){
//                 return samekeyitem[1]
//             }
//         }
//     }
//     remove(key){
//         let index=this.hash(key)
//         let bucket=this.table[index]
//         if(bucket){
//             let samekeyitem=bucket.find((item)=>item[0]===key)
//             if(samekeyitem){
//                 bucket.splice(bucket.indexOf(samekeyitem),1)
//             }
//         }
//     }
//     display(){
//         for(let i=0;i<this.size;i++){
//         if(this.table[i]){
//             console.log(i,this.table[i]);
//         }
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

// let a='naju'
// console.log(a);
// let b=new String(a)
// console.log(b);



// function palind(a) {
//     for(i=0;i<a.length;i++){
//         if(a[i]!==a[a.length-i-1]){
//             return false
//         }
//     }
//     return true
// }

// console.log(palind('malayalassm'));



// function reverse(a) {

// let revStrg=''
// for(i=a.length-1;i>=0;i--){
//     revStrg+=a[i]
// }
// return revStrg
    
// }

// console.log(reverse('hamras'));

// function slc(a,b,c) {

//     let newStrg=''
//     for(i=0;i<a.length;i++){
//         if(i>=b&&i<c){
//             newStrg+=a[i]
//         }
//     }
//     return newStrg
    
// }
// console.log(slc('hamrassshh',0,5));


// function concta(a,b) {

//     for(i=0;i<b.length;i++){
//         a+=b[i]
//     }

//     return a
    
// }


// console.log(concta('naju','mudheen'));


// function postioncharchange(a,c,b) {
// let newStrg=''
//     for(i=0;i<a.length;i++){
//         if(a[i]===c){
// newStrg+=b
//         }else{
//             newStrg+=a[i]
//         }
//     }
//     return newStrg
// }

// console.log(postioncharchange('malayalam','a','c'));



class HashTable{
    constructor(size){
        this.table=new Array(size)
        this.size=size
    }
    hash(key){
        let total=0
        for(i=0;i<key.length;i++){
            total+=key.charCodeAt(i)
        }
        return total%this.size
    }
    set(key,value){
        let index=this.hash(key)
        this.table[index]=value
    }
    get(key){
        let index=this.hash(key)
        return this.table[index]
    }   
}