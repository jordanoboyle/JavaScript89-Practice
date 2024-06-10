// 8. Use a nested loop to find the largest sum of any two different numbers within an array.
// For example, [1, 8, 3, 10] becomes 18.
let findTheLargestSum = [1, 8, 3, 10];
let largestSum = 0;

findTheLargestSum.forEach((numOne) => {
  findTheLargestSum.forEach((numTwo) => {
    if (numOne !== numTwo) {
      if (numOne + numTwo > largestSum) {
        largestSum = numOne + numTwo;
      } else {
        largestSum = largestSum;
      }
    }
  })
})
console.log(largestSum);


// 9. Use nested loops with an array of numbers to compute a new array containing the first two numbers (from the original array) that add up to the number 10. If there are no two numbers that add up to 10, return false.
// For example, [2, 5, 3, 1, 0, 7, 11] becomes [3, 7].

let numbersThatTen = [2, 5, 3, 1, 0, 7, 11];
let addToTen = null;
let trueOrFalse = false;

numbersThatTen.forEach(numOne => {
  numbersThatTen.forEach(numTwo => {
    if (numOne !== numTwo) {
      if (numOne + numTwo === 10 && trueOrFalse === false) {
        addToTen = [numOne, numTwo];
        trueOrFalse = true;
      }
    }
  });
});
console.log(addToTen);

// 10. Use a nested loop to convert an array of string arrays into a single string.
// For example, [["a", "man"], ["a", "plan"], ["a", "canal"], ["panama"]] becomes "amanaplanacanalpanama".
let combineThese = [["a", "man"], ["a", "plan"], ["a", "canal"], ["panama"]];
let bigString = "";

for (let i = 0; i < combineThese.length; i++) {
  for (let j = 0; j < combineThese[i].length; j++) {
    bigString += combineThese[i][j];
  }
}
console.log(bigString);