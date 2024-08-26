// 6. Find the largest sum of any two different numbers within a given array.
// Example: [5, -2, 1, -9, -7, 2, 6] becomes 11.


//loop through twice
//log the addition of each
// retain a comparison number to fompare,
// compare and print when one is larger
// retain only the largest.

let arr1 = [5, -2, 1, -9, -7, 2, 6];
const arr2 = [-10.5, 34.2, -56.1, 78.9, 90.4]; //169.3
const arr3 = [23.5, -45.3, 67.8, -89.9, 101.2]; //169.0
const arr4 = [-14.2, 28.8, 42.1, -56.7, 70.5]; //112.6

function largestSum(arrNums) {
  let largestSum = arrNums[0] + arrNums[1];
  
  for (let i = 0; i < arrNums.length; i++) {
    let index1 = arrNums[i];
    for (let i2 = 0; i2 < arrNums.length; i2++) {
      let index2 = arrNums[i2];
      if (arrNums.indexOf(arrNums[i]) !== arrNums.indexOf(arrNums[i2])) {
        if (arrNums[i] + arrNums[i2] > largestSum) {
          largestSum = arrNums[i] + arrNums[i2];
        }
      }
    }
  }
  return largestSum;
}

console.log(largestSum(arr1));
console.log(largestSum(arr2));
console.log(largestSum(arr3));
console.log(largestSum(arr4));
// let sumCombination = arrNums[i] + arrNums[i2];

console.log("%%%%%%%%%%%%%%%%%%%%%%");

function largestSum2(arrNums) {
  let largest = arrNums[0] + arrNums[1];

  arrNums.forEach(i => {
    arrNums.forEach(i2 => {
      if (arrNums.indexOf(i) !== arrNums.indexOf(i2)) {
        if (i + i2 > largest) {
          largest = i + i2;
        }
      }
    });
  });
  return largest;
}

console.log(largestSum2(arr1));
console.log(largestSum2(arr2));
console.log(largestSum2(arr3));
console.log(largestSum2(arr4));

