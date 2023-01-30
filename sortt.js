//     bubblesort
// Bigo O(n2)
// The method works by examining each set of adjacent elements in the string, from left to right,
//  switching their positions if they are out of order.

//     insert sorting
// The array is virtually split into a sorted and an unsorted part.
//  Values from the unsorted part are picked and placed at the correct
//  position in the sorted part.

//     Selection sorting  O(n2)
// This algorithm is called selection sort because it repeatedly selects
// the next-smallest element and swaps   into place
 

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

{function insertionSrot(arr) {

    for(let i=1;i<arr.length;i++){
        let numbertoinsert=arr[i]
        let j=i-1
        while (j>=0 && arr[j]>numbertoinsert) {
            arr[j+1]=arr[j]
            j=j-1
        }
        arr[j+1]=numbertoinsert
    }
    
}

const arr=[8,20,-2,4,-6]
insertionSrot(arr)
console.log(arr);}

{function selectionSort(a) {

    for(i=0;i<a.length;i++){
        for(j=i+1;j<a.length;j++){
            if(a[i]>a[j]){
                let temp=a[i]
                a[i]=a[j]
                a[j]=temp
            }
        }
    }
    
}

const arr=[8,20,-2,4,-6]
selectionSort(arr)
console.log(arr);}