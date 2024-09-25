// 4. Find the closest pair to a target sum.
// Description: Write a function that finds a pair of numbers in a sorted array whose sum is closest to a given target number using two-point iteration.
// Example: For array [1, 3, 4, 7, 10] and target 15, the function returns [4, 10].

let arr1    = [1, 3, 4, 7, 10];
let target1 = 15;

let arr2    = [2, 5, 9, 14, 20, 25];
let target2 = 19;

let arr3    = [-7.5, -3.2, 1.0, 4.5, 6.3, 8.9];
let target3 = 0.5;

let arr4    = [-10.5, -5.0, -1.5, 0.2, 3.7, 9.8];
let target4 = -6.0;


function findClosestTotal(numArr, targetSum) {
  //need to record both numbers
  let closestDiff = Math.abs((numArr[0] + numArr[numArr.length -1]) - targetSum);

  let numL = 0;
  let numR = 0;

  let LP = 0;
  let RP = numArr.length - 1;

  while (LP < RP) {
    let currentSum = numArr[LP] + numArr[RP];
    let currentDiff = targetSum - Math.abs(currentSum);

    if (currentDiff < closestDiff) {
      closestDiff = currentDiff;
      numL = numArr[LP];
      numR = numArr[RP];
    }
    if (closestDiff <= Math.abs(targetSum)) {
      LP++;
    } else {
      RP--;
    }

  }
  return [numL, numR];
}

console.log(findClosestTotal(arr1,target1));