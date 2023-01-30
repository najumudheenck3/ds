// {
//     console.log('bubble sort');
//     function bubbleSort(arr) {
//         for (i = 0; i < arr.length; i++) {
//             for (j = 0; j < arr.length - 1 - i; j++) {
//                 if (arr[j] > arr[j + 1]) {
//                     let temp = arr[j]
//                     arr[j] = arr[j + 1]
//                     arr[j + 1] = temp
//                 }
//             }
//         }
//     }
//     const arr = [8, 20, -2, 4, -6]
//     bubbleSort(arr)
//     console.log(arr);
// }

// {
//     console.log('insertionn sort');
//     function insertionSort(arr) {
//         for (i = 1; i < arr.length; i++) {
//             let insertedElement = arr[i]
//             let j = i - 1
//             while (j >= 0 && arr[j] > insertedElement) {
//                 let temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = temp
//                 j = j - 1
//             }
//             arr[j + 1] = insertedElement
//         }
//     }
//     const arr = [8, 20, -2, 4, -6]
//     insertionSort(arr)
//     console.log(arr);
// }

// {
//     console.log('selection sort');

//     function selectionSort(arr) {
//         for (i = 0; i < arr.length; i++) {
//             for (j = i + 1; j < arr.length; j++) {
//                 if (arr[i] > arr[j]) {
//                     let temp = arr[i]
//                     arr[i] = arr[j]
//                     arr[j] = temp
//                 }
//             }
//         }
//     }
//     const arr = [8, 20, -2, 4, -6]
//     selectionSort(arr)
//     console.log(arr);
// }

// {
//     console.log('quick sort');

//     function quickSort(arr) {
//         if (arr.length < 2) {
//             return arr
//         }
//         let pivot = arr[arr.length - 1]
//         let left = []
//         let right = []
//         for (i = 0; i < arr.length - 1; i++) {
//             if (arr[i] < pivot) {
//                 left.push(arr[i])
//             } else {
//                 right.push(arr[i])
//             }
//         }
//         return [...quickSort(left), pivot, ...quickSort(right)]
//     }
//     const arr = [8, 20, -2, 4, -6]
//     console.log(quickSort(arr));
// }

// {
//     console.log('heap sort');
//     function maxHeapify(arr, n, i) {
//         let largest = i
//         let l = 2 * i + 1
//         let r = 2 * i + 2
//         if(l<n && arr[l]>arr[largest]){
//             largest=l
//         }
//         if(r<n && arr[r]>arr[largest]){
//             largest=r
//         }
//         if(largest!=i){
//             let temp=arr[i]
//             arr[i]=arr[largest]
//             arr[largest]=temp
//             maxHeapify(arr,n,largest)
//         }
//     }

//     function heapSort(arr,n){
//         for(i=(n/2-1);i>=0;i--){
//             maxHeapify(arr,n,i)
//         }

//         for(i=n-1;i>=0;i--){
//             let temp=arr[i]
//             arr[i]=arr[0]
//             arr[0]=temp
//             maxHeapify(arr,i,0)
//         }
//     }
//     const arr = [8, 20, -2, 4, -6]
//     heapSort(arr,arr.length)
//     console.log(arr);
// }


// {
//     console.log('seond time quicks sort');

//     function quickSort(arr){
//         if(arr.length<2){
//             return arr
//         }
//         let pivot=arr[arr.length-1]
//         let left=[]
//         let right=[]
//         for(i=0;i<arr.length-1;i++){
//             if(arr[i]<pivot){
//                 left.push(arr[i])
//             }else{
//                 right.push(arr[i])
//             }
//         }
//         return [...quickSort(left),pivot,...quickSort(right)]
//     }
//     const arr = [8, 20, -2, 4, -6]
//     console.log(quickSort(arr));
// }

// {
//     console.log('second time heap sort');
//     function maxHeapify(arr,n,i){
//         let largest=i
//         let l=2*i+1
//         let r=2*i+2
//         if(l<n && arr[l]>arr[largest]){
//             largest=l
//         }
//         if(r<n && arr[r]>arr[largest]){
//             largest=r
//         }
        
//         if(largest!=i){
//             let temp=arr[i]
//             arr[i]=arr[largest]
//             arr[largest]=temp
//             maxHeapify(arr,n,largest)
//         }
//     }

//     function heapSort(arr,n){
//         for(i=parseInt(n/2-1);i>=0;i--){
//             maxHeapify(arr,n,i)
//         }
//         for(i=n-1;i>=0;i--){
//             let temp=arr[i]
//             arr[i]=arr[0]
//             arr[0]=temp
//             maxHeapify(arr,i,0)
//         }
//     }
//     const arr = [8, 20, -2, 4, -6]
//     heapSort(arr,arr.length)
//     console.log(arr);
// }

// {
//     console.log('third time quick sort');
//     function quickSort(arr){
//         if(arr.length<2){
//             return arr
//         }
//         let pivot=arr[arr.length-1]
//         let left=[]
//         let right=[]
//         for(i=0;i<arr.length-1;i++){
//             if(arr[i]<pivot){
//                 left.push(arr[i])
//             }else{
//                 right.push(arr[i])
//             }
//         }
//         return [...quickSort(left),pivot,...quickSort(right)]
//     }
//     const arr = [8, 20, -2, 4, -6]
//     console.log(quickSort(arr));
// }

// {
//     console.log("third time heap sort");

//     function maxHeapify(arr,n,i){
//         let largest=i
//         let l=2*i+1
//         let r=2*i+2
//         if(l<n && arr[l]>arr[largest]){
//             largest=l
//         }
//         if(r<n && arr[r]>arr[largest]){
//             largest=r
//         }
//         if(largest!=i){
//             let temp=arr[i]
//             arr[i]=arr[largest]
//             arr[largest]=temp
//             maxHeapify(arr,n,largest)
//         }
//     }
    
//     function heapSort(arr,n){
//         for(i=parseInt(n/2-1);i>=0;i--){
//             maxHeapify(arr,n,i)
//         }
//         for(i=n-1;i>=0;i--){
//             let temp=arr[i]
//             arr[i]=arr[0]
//             arr[0]=temp
//             maxHeapify(arr,i,0)
//         }
//     }
//     const arr = [8, 20, -2, 4, -6]
//     heapSort(arr,arr.length)
//     console.log(arr);
// }

// {
//     console.log('fourth time quikc sort');
//     function quickSort(arr){
//         if(arr.length<2){
//             return arr
//         }
//         let pivot=arr[arr.length-1]
//         let left=[]
//         let right=[]
//         for(i=0;i<arr.length-1;i++){
//             if(arr[i]<pivot){
//                 left.push(arr[i])
//             }else{
//                 right.push(arr[i])
//             }
//         }
//         return [...quickSort(left),pivot,...quickSort(right)]
//     }
//     const arr = [8, 20, -2, 4, -6]
//     console.log(quickSort(arr));
// }

// {
//     console.log('fourth time heap sort');

//     function maxHeapify(arr,n,i){
//         let largest=i
//         let l=2*i+1
//         let r=2*i+2
//         if(l<n && arr[l]>arr[largest]){
//             largest=l
//         }
//         if(r<n && arr[r]>arr[largest]){
//             largest=r
//         }
//         if(largest!=i){
//             let temp=arr[i]
//             arr[i]=arr[largest]
//             arr[largest]=temp
//             maxHeapify(arr,n,largest)
//         }
//     }
//     function heapSort(arr,n){
//         for(i=parseInt(n/2-1);i>=0;i--){
//             maxHeapify(arr,n,i)
//         }
//         for(i=n-1;i>=0;i--){
//             let temp=arr[i]
//             arr[i]=arr[0]
//             arr[0]=temp
//             maxHeapify(arr,i,0)
//         }
//     }
//     const arr = [8, 20, -2, 4, -6]
//     console.log(quickSort(arr));
// }


function quickSort(arr){
    if(arr.length<2){
        return arr
    }
    let pivot=arr[arr.length-1]
    let left=[]
    let right=[]

    for(i=0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}

let arr=[8,20,-2,6,-4]

console.log(quickSort(arr));