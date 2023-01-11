// class Heap{
//     constructor(){
//         this.list=[]
//     }

let arr=[2,5,7,9,8,4]

for(let i=(arr.length/2-1);i>=0;i--){
    maxHeapify(arr,arr.length,i)
}

    function maxHeapify(arr,n,i){
        let largest=i
        let l=2*i+1
        let r=2*i+2

        if(l<n && arr[l]>arr[largest]){
            largest=l
        }
        if(r<n && arr[r]>arr[largest]){
            largest=r
        }

        if(largest!=i){
            let temp=arr[i]
            arr[i]=arr[largest]
            arr[largest]=temp
           maxHeapify(arr,n,largest)
        }
    }

    console.log(arr);


// }