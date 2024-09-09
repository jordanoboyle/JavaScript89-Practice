//Validating a subsequence in an array. 
//Given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence
//Subsequence follows the same order, but not necessarily adjacent. Example:
// [1, 3, 4] is subsequence of [1, 2, 3, 4]...so is [2, 4]

const { values } = require("lodash");

const arr1 = [5, 1, 22, 25, 6, -1, 8, 10];
const seq1 = [1, 6, -1, 10];
// Test 1: Subsequence in the middle of the array
const arr2 = [3, 5, 7, 9, 12, 15, 18];
const seq2 = [5, 9, 15];

// Test 2: Subsequence with a single number
const arr3 = [10, 20, 30, 40, 50, 60];
const seq3 = [40];

// Test 3: Subsequence matching the entire array
const arr4 = [2, 4, 6, 8, 10];
const seq4 = [2, 4, 6, 8, 10];

// Test 4: Subsequence with non-consecutive elements
const arr5 = [15, 30, 45, 60, 75, 90, 105];
const seq5 = [15, 60, 90];

// Test 5: Subsequence starting and ending with the first and last elements
const arr6 = [100, 200, 300, 400, 500, 600, 700];
const seq6 = [100, 400, 700];

// Test 6: Subsequence with an element that is not in the array
const arr7 = [10, 20, 30, 40, 50, 60, 70, 80];
const seq7 = [20, 25, 50]; // 25 is not in arr7, so this should return false



function isValidSubsequence(array, sequence) {
  let comparison  = [];

  let subI = 0;
  array.forEach(value => {
    if (value === sequence[subI]) {
      comparison.push(value);
      subI ++;
    } 
  });
  
  if (comparison.length === sequence.length) {
    return true;
  } else {
    return false;
  }
}
console.log(isValidSubsequence(arr1, seq1));
console.log(isValidSubsequence(arr2, seq2));
console.log(isValidSubsequence(arr3, seq3));
console.log(isValidSubsequence(arr4, seq4));
console.log(isValidSubsequence(arr5, seq5));
console.log(isValidSubsequence(arr6, seq6));
console.log(isValidSubsequence(arr7, seq7));

console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");


//Slightly Dryer, but still elegant
function isValidSubsequence2(array, sequence) {
  
  // let isValid = false;
  let index = 0;
  for (let value of array) {
    if (index === sequence.length) {
      // isValid = true;
      break;
    }
    if (value === sequence[index]) {
      index ++;
    }
  }
  return index === sequence.length;
}

console.log(isValidSubsequence2(arr1, seq1));
console.log(isValidSubsequence2(arr2, seq2));
console.log(isValidSubsequence2(arr3, seq3));
console.log(isValidSubsequence2(arr4, seq4));
console.log(isValidSubsequence2(arr5, seq5));
console.log(isValidSubsequence2(arr6, seq6));
console.log(isValidSubsequence2(arr7, seq7));

console.log("%%%%%%%%%%%%%%%%%%%%")

//Even DRYER!
function isValidSubsequence3(array, sequence) {
  
  let index = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === sequence[index]) {
      index ++;
    }
  }
  return index === sequence.length;
}
console.log(isValidSubsequence3(arr1, seq1));
console.log(isValidSubsequence3(arr2, seq2));
console.log(isValidSubsequence3(arr3, seq3));
console.log(isValidSubsequence3(arr4, seq4));
console.log(isValidSubsequence3(arr5, seq5));
console.log(isValidSubsequence3(arr6, seq6));
console.log(isValidSubsequence3(arr7, seq7));

//we need a dynamic variable to compare values in sub sequence to base array
//we need to iterate through base array comparing to the value of subsequence
//need to record whether we find all the numbers. (boolean?)
//