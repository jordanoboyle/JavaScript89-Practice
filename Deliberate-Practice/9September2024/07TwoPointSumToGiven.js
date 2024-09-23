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


function pairsSumToGivenNumber(sortedNumsArray, numberSumTo) {
  let pairsArray = [];
  
  let RP = sortedNumsArray.length - 1;
  let LP = 0;

  while (LP < RP) {
    if (sortedNumsArray[LP] + sortedNumsArray[RP] === numberSumTo) {
      pairsArray.push([sortedNumsArray[LP], sortedNumsArray[RP]]);
      // console.log(LP, RP);
      LP += 1;
      RP -= 1;
    } else if (sortedNumsArray[LP] + sortedNumsArray[RP] < numberSumTo) {
      LP += 1;
    } else if (sortedNumsArray[LP] + sortedNumsArray[RP] > numberSumTo) {
      RP -= 1;
    }
    
  }
  return pairsArray;
}

console.log(pairsSumToGivenNumber(arr1, 10));
console.log(pairsSumToGivenNumber(arr2, 0));
console.log(pairsSumToGivenNumber(arr3, 9));