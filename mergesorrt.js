{const mergeSortRec = (arr) => {
    //Get the length of the array
    const length = arr.length;
    
    //If reached to the bottom then return the array.
    if(length === 1){
      return arr;
    }
    
    //Get the mid of array
    const mid = Math.floor(length / 2);
    //Left sub array
    const left = arr.slice(0, mid);
    //Right sub array
    const right = arr.slice(mid, length);
    
    //Return the sorted and merged right and left sub array
    return merge(mergeSortRec(left), mergeSortRec(right));
  }
  
  const merge = (leftArr, rightArr) => {
    //To merge the both subarrays
    const result = [];
    
    let iL = 0; //To track left sub array
    let iR = 0; //To track right sub array
    
    //Compare the two sub arrays and merge them in the sorted order
    while(iL < leftArr.length && iR < rightArr.length){
      if(leftArr[iL] < rightArr[iR]){
        result.push(leftArr[iL]);
        iL++;
      }else{
        result.push(rightArr[iR]);
        iR++;
      }
    }
    
    //If there are elements in the left sub arrray then add it to the result
    while(iL < leftArr.length){
      result.push(leftArr[iL]);
      iL++;
    }
    
    //If there are elements in the right sub array then add it to the result
    while(iR < rightArr.length){
      result.push(rightArr[iR]);
      iR++;
    }
    
    return result;
  }

//   Input:
console.log(mergeSortRec([10, 7, 8, 9, 1, 5]));
console.log(mergeSortRec([30, 20, 10, 50, 22, 33, 55]));

// Output:
[1, 5, 7, 8, 9, 10]
[10, 20, 22, 30, 33, 50, 55]}



const merge = (leftArr, rightArr) => {
  //To merge the both subarrays
  const result = [];
  
  let iL = 0; //To track left sub array
  let iR = 0; //To track right sub array
  
  //Compare the two sub arrays and merge them in the sorted order
  while(iL < leftArr.length && iR < rightArr.length){
    if(leftArr[iL] < rightArr[iR]){
      result.push(leftArr[iL]);
      iL++;
    }else{
      result.push(rightArr[iR]);
      iR++;
    }
  }
  
  //If there are elements in the left sub arrray then add it to the result
  while(iL < leftArr.length){
    result.push(leftArr[iL]);
    iL++;
  }
  
  //If there are elements in the right sub array then add it to the result
  while(iR < rightArr.length){
    result.push(rightArr[iR]);
    iR++;
  }
  
  return result;
}