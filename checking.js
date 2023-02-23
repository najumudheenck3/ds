function findFirstRepeatedElement(arr) {
    let hashTable = {};
    for (let i = 0; i < arr.length; i++) {
        if (hashTable[arr[i]] !== undefined) {
          console.log(hashTable);
        return arr[i];
      } else {
        hashTable[arr[i]] = 1;
      }
    }
    return null;
  }
  let arr = [1, 2, 3, 4,2,  5, 6];
  let firstRepeatedElement = findFirstRepeatedElement(arr);
  console.log(firstRepeatedElement); // Output: 2


  console.log(arr.includes(5),'true or false');
console.log(arr.indexOf(2));



  console.log(Math.sqrt(20));

  function isPrime(number) {
    if (number < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }

  console.log(isPrime(20));
    