//Two Number Sum: take in an non-empty array and an integer representing a target sum. If two numbers sum to the target sum, they should be returned in an array, otherwise, return empty array. 

let arr1 = [3, 5, -4, 8, 11, 1, -1, 6];
let targetSum = 10;
// return [-1, 11]

function twoNumberSum(array, targetSum) {
  let numsToTarget = [];
  for (let i = 0; i < array.length; i++) {
    let comp = array[i];
    array.forEach(x => {
      if (comp !== x && comp + x === targetSum) {
        numsToTarget.push(comp, x);
      }
    });
    if (numsToTarget.length > 0) {
      break;
    }
  }
  return numsToTarget;
}

console.log(twoNumberSum(arr1, targetSum));

function twoNumberSum2(array, targetSum) {

  // To make this time complexity better we can manually input this...but assume its a bigger array 
  let hashTable = {};
  array.forEach(val => {
    hashTable[val] = true;
  });
  
  let sumToTarget = [];
  for (const val of array) {
    let solveForX = targetSum - val;
    if (hashTable[solveForX] === true && solveForX !== val) {
      //above we need to make sure we are not getting duplicates. 
      sumToTarget.push(solveForX, val);
      break;
    }
  }

  return sumToTarget;
}
console.log(twoNumberSum2(arr1, targetSum));

//NOT MY SOLUTION BELOW:

function twoNumberSum3(array, targetSum) {

  //keep track of the number while interating over the array
  //Set used so we can check if a given number has been seen
  const seen = new Set();

  for (let num of array) {
    const complement = targetSum - num;
    if (seen.has(complement)) {
      return [num, complement];
    }
    //mark the number as seen
    seen.add(num);
  }
  return [];
}

console.log(twoNumberSum3(arr1, targetSum));