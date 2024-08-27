// 2. Find pairs with a given sum.
// Description: Write a function that finds all unique pairs in an array that sum up to a given number. Use two-point iteration to optimize the solution.
// Example: For array [1, 2, 3, 4, 5] and sum 5, the function returns [[1, 4], [2, 3]].


const arr1 = [1, 2, 3, 4, 5, 6]; // Should return [[1, 4], [2, 3]]
const arr2 = [-3, -2, 0, 2, 3, 5, 7]; // Should return [[-2, 7], [0, 5], [2, 3]]
const arr3 = [0.5, 1.5, 2.5, 3.5, 4.5]; // Should return [[0.5, 4.5], [1.5, 3.5]]
const arr4 = [1, 3, 7, 9]; // Should return []
const arr5 = [0, 1, 2, 3, 4, 5, 6]; // Should return [[0, 5], [1, 4], [2, 3]]
const arr6 = [1, 1, 2, 3, 4, 4, 5]; // Should return [[1, 4], [1, 4], [2, 3]]
const arr7 = [-10, -5, 0, 1, 4, 10, 15]; // Should return [[-10, 15], [-5, 10], [1, 4]]

function findNumbersSumToFive(arrNums, compare = 5) {
  let sumToFiveArr = [];

  let leftPointer = 0;
  let rightPointer = arrNums.length - 1;

  while (leftPointer < rightPointer) {
    let sum = arrNums[leftPointer] + arrNums[rightPointer];

    if (sum === compare) {
      sumToFiveArr.push([arrNums[leftPointer], arrNums[rightPointer]]);
      leftPointer ++;
      rightPointer--;
    } else if (sum < compare) {
      leftPointer ++;
    } else {
      rightPointer --;
    }
  }
  return sumToFiveArr;
}

console.log(findNumbersSumToFive(arr1));
console.log(findNumbersSumToFive(arr2));
console.log(findNumbersSumToFive(arr3));
console.log(findNumbersSumToFive(arr4));
console.log(findNumbersSumToFive(arr5));
console.log(findNumbersSumToFive(arr6));
console.log(findNumbersSumToFive(arr7));