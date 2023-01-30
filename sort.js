{
//     bubblesort
// Bigo O(n2)
// The method works by examining each set of adjacent elements in the string, from left to right,
//  switching their positions if they are out of order.
function bubbleSort(arr) {
    let swapped
    do {
        swapped = false
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                swapped = true}
        }
    } while (swapped)}
const arr = [1, 25, 10, 8,8, 89, 5]
bubbleSort(arr)}
// console.log(arr);




{
//     insert sorting

// The array is virtually split into a sorted and an unsorted part.
//  Values from the unsorted part are picked and placed at the correct
//  position in the sorted part.

Bigo O(n2)
function insertSort(arr) {
    for (i = 1; i < arr.length; i++) {
        let numbertoinsert = arr[i]
        let j = i - 1
        while (j >= 0 && arr[j] > numbertoinsert) {
            arr[j + 1] = arr[j]
            j = j - 1
        }
        arr[j + 1] = numbertoinsert
    }
}
const arr = [8, 6, 25, 36, 78, 5]
insertSort(arr)
console.log(arr);}



{
//     Selection sorting  O(n2)

// This algorithm is called selection sort because it repeatedly selects
// the next-smallest element and swaps   into place

function SelectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
}
const arr = [8, 6, 25, 36, 78, 5]
SelectionSort(arr)
console.log(arr);}


// function bubbleSort(arr) {

//     let swapped
// do {
//     swapped=false
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]>arr[i+1]){
//            let temp=arr[i]
//             arr[i]=arr[i+1]
//             arr[i+1]=temp
//             swapped=true
//         }
//             }
// } while (swapped);
    
// }

// const arr=[8,20,-2,4,-6]

// bubbleSort(arr)

// console.log(arr);

{function bubbleSort(arr) {
    for(i=0;i<arr.length;i++){
        for(j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
    }
    
}

const arr=[8,20,-2,4,-6]

bubbleSort(arr)

console.log(arr);}

// function insertionSrot(arr) {

//     for(let i=1;i<arr.length;i++){
//         let numbertoinsert=arr[i]
//         let j=i-1
//         while (j>=0 && arr[j]>numbertoinsert) {
//             arr[j+1]=arr[j]
//             j=j-1
//         }
//         arr[j+1]=numbertoinsert
//     }
    
// }

// const arr=[8,20,-2,4,-6]
// insertionSrot(arr)
// console.log(arr);

// function insertionSrot(a) {

//     for(let i=1;i<a.length;i++){
//         let insertedElement=a[i]
//         let j=i-1
//         while (j>=0 && a[j]>insertedElement) {
//             a[j+1]=a[j]
//             j=j-1
//         }
//         a[j+1]=insertedElement
//     }
    
// }

// const arr=[8,20,-2,4,-6]

// insertionSrot(arr)
// console.log(arr);

// function selectionSort(a) {

//     for(i=0;i<a.length;i++){
//         for(j=i+1;j<a.length;j++){
//             if(a[i]>a[j]){
//                 let temp=a[i]
//                 a[i]=a[j]
//                 a[j]=temp
//             }
//         }
//     }
    
// }

// function selectionSort(a) {

//     for(i=0;i<a.length;i++){
//         for(j=i+1;j<a.length;j++){
//             if(a[i]>a[j]){
//                 let temp=a[i]
//                 a[i]=a[j]
//                 a[j]=temp
//             }
//         }
//     }
    
// }

// const arr=[8,20,-2,-2,4,-2,-6]
// selectionSort(arr)
// console.log(arr);

// function selectionSort(arr) {
// for(i=0;i<arr.length;i++){
//     let min=i
//     for(j=i+1;j<arr.length;j++){
//         if(arr[min]>arr[j]){
//             min=j
//         }
//         if(min!=i){
//             let temp=arr[min]
//             arr[min]=arr[i]
//             arr[i]=temp
//         }
//     }
// }    
// }

// const arr=[8,20,-2,-2,4,-2,-6]
// selectionSort(arr)
// console.log(arr);

// function bubblesort(arr) {

//     for(i=0;i<arr.length-1;i++){
//         for(j=0;j<arr.length-i;j++){
//             if(arr[j]>arr[j+1]){
//                 let temp=arr[j]
//                 arr[j]=arr[j+1]
//                 arr[j+1]=temp
//             }
//         }
//     }
    
// }
// const arr=[8,20,-2,-2,4,-2,-6]

// bubblesort(arr)
// console.log(arr);

// function slectinsrot(arr) {
//     for(i=0;i<arr.length;i++){
//         for(j=i+1;j<arr.length;j++){
//             if(arr[i]>arr[j]){
//                 temp=arr[i]
//                 arr[i]=arr[j]
//                 arr[j]=temp
//             }
//         }
//     }
// }

// const arr=[8,20,-2,-2,4,-2,-6]
// slectinsrot(arr)
// console.log(arr);

// function insertionsort(arr) {
//     for(i=1;i<arr.length;i++){
//         let numbertoinsert=arr[i]
//         let j=i-1
//         while (j>=0 && arr[j]>numbertoinsert) {
//             arr[j+1]=arr[j]
//             j=j-1
//         }
//         arr[j+1]=numbertoinsert
//     }
// }

// const arr=[8,20,-2,-2,4,-2,-6]

// insertionsort(arr)
// console.log(arr);
// function insertionSrot(arr) {

//     for(let i=1;i<arr.length;i++){
//         let numbertoinsert=arr[i]
//         let j=i-1
//         while (j>=0 && arr[j]>numbertoinsert) {
//             arr[j+1]=arr[j]
//             j=j-1
//         }
//         arr[j+1]=numbertoinsert
//     }
    
// }

// const arr=[8,20,-2,4,-6]
// insertionSrot(arr)
// console.log(arr);

// function insertionSort(arr) {
//     for(i=1;i<arr.length;i++){
//         let numbertoinsert=arr[i]
//         let j=i-1
//         while(j>=0 && arr[j]>numbertoinsert){
//             arr[j+1]=arr[j]
//             j--
//         }
//         arr[j+1]=numbertoinsert
//     }
    
// }

// const arr=[8,20,-2,4,-6]
// insertionSort(arr)
// console.log(arr);

