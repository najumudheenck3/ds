// // class Heap{
// //     constructor(){
// //         this.list=[]
// //     }

// let arr=[2,5,7,9,8,4]

// for(let i=(arr.length/2-1);i>=0;i--){
//     maxHeapify(arr,arr.length,i)
// }

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
//            maxHeapify(arr,n,largest)
//         }
//     }

//     console.log(arr);


// // }
// console.log('najuuuu');

// const dayName = new Date('2021-10-20T17:05:26.758Z').toLocaleDateString();

// console.log(dayName);
// console.log('najuuuu');

// const date = new Date();
// console.log(typeof(date));
// console.log(date);
// const timestamp = date.getTime();
// console.log(timestamp);

// const seconds = Math.floor(timestamp / 1000);


// const oldTimestamp = seconds - 86400;

// const difference = seconds - oldTimestamp;
// let output = ``;
// if (difference < 60) {
//     // Less than a minute has passed:
//     output = `${difference} seconds ago`;
// } else if (difference < 3600) {
//     // Less than an hour has passed:
//     output = `${Math.floor(difference / 60)} minutes ago`;
// } else if (difference < 86400) {
//     // Less than a day has passed:
//     output = `${Math.floor(difference / 3600)} hours ago`;
// } else if (difference < 2620800) {
//     // Less than a month has passed:
//     output = `${Math.floor(difference / 86400)} days ago`;
// } else if (difference < 31449600) {
//     // Less than a year has passed:
//     output = `${Math.floor(difference / 2620800)} months ago`;
// } else {
//     // More than a year has passed:
//     output = `${Math.floor(difference / 31449600)} years ago`;
// }
// console.log(output);

var timeSince = function(date) {
    if (typeof date !== 'object') {
      date = new Date(date);
    }
  
    var seconds = Math.floor((new Date() - date) / 1000);
    var intervalType;
  
    var interval = Math.floor(seconds / 31536000);
    if (interval >= 1) {
      intervalType = 'year';
    } else {
      interval = Math.floor(seconds / 2592000);
      if (interval >= 1) {
        intervalType = 'month';
      } else {
        interval = Math.floor(seconds / 86400);
        if (interval >= 1) {
          intervalType = 'day';
        } else {
          interval = Math.floor(seconds / 3600);
          if (interval >= 1) {
            intervalType = "hour";
          } else {
            interval = Math.floor(seconds / 60);
            if (interval >= 1) {
              intervalType = "minute";
            } else {
              interval = seconds;
              intervalType = "second";
            }
          }
        }
      }
    }
  
    if (interval > 1 || interval === 0) {
      intervalType += 's';
    }
  
    return interval + ' ' + intervalType;
  };
 
  console.log(timeSince('2023-01-08T05:55:15.622Z'));
//   console.log(timeSince(new Date(Date.now() - aDay * 2)));