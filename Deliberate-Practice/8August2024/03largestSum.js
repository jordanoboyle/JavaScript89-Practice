// 6. Find the largest sum of any two different numbers within a given array.
// Example: [5, -2, 1, -9, -7, 2, 6] becomes 11.


//loop through twice
//log the addition of each
// retain a comparison number to fompare,
// compare and print when one is larger
// retain only the largest.

let arr1 = [5, -2, 1, -9, -7, 2, 6];

function largestSum(arrNums) {
  let largestSum = arrNums[0] + arrNums[1];
  
  for (let i = 0; i < arrNums.length; i++) {
    for (let i2 = 0; i < arrNums.length; i++) {
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

