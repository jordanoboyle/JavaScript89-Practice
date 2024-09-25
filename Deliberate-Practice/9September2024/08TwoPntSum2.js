// 2. Find pairs with a given sum.
// Description: Write a function that finds all unique pairs in an array that sum up to a given number. Use two-point iteration to optimize the solution.
// Example: For array [1, 2, 3, 4, 5] and sum 5, the function returns [[1, 4], [2, 3]].


// Array 1: Positive numbers, with several pairs that can sum up to a given number
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
// Pairs for sum 10: [[1, 9], [2, 8], [3, 7], [4, 6]]

// Array 2: A mix of positive and negative numbers, testing cases where pairs can include negative numbers
const arr2 = [-10, -1, 0, 1, 2, 3, 7, 8, 10, 15];
// Pairs for sum 0: [[-10, 10], [-1, 1]]

// Array 3: Includes decimal numbers to test sums with floats 
const arr3 = [1.5, 2.5, 3, 4.5, 5, 6, 6.5, 7.5, 8.5, 9, 10.5];
// Pairs for sum 9: [[1.5, 7.5], [2.5, 6.5], [3, 6]]

function findPairSumToGiven(numArr, givenSum) {
  let pairs = [];

  let LP = 0;
  let RP = numArr.length - 1;

  while (LP < RP) {
    if (numArr[LP] + numArr[RP] === givenSum) {
      pairs.push([numArr[LP], numArr[RP]]);
      LP += 1;
    } else {
      RP -= 1;
    }
  }
  return pairs;
}

console.log(findPairSumToGiven(arr1, 10));
console.log(findPairSumToGiven(arr2, 0));
console.log(findPairSumToGiven(arr3, 9));