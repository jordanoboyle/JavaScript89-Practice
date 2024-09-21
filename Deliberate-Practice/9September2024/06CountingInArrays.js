// 8) Write a function that takes in an array of numbers and returns a count of how many zeros are in the array.

// Array 1: Mix of positive, negative numbers, and zeros
const testArray1 = [0, 1, 2, 0, 4, 0, -5, 0, 7];

// Array 2: Array with no zeros
const testArray2 = [1, 2, 3, 4, 5, -6, 7, 8];

// Array 3: Array with all zeros
const testArray3 = [0, 0, 0, 0, 0, 0, 0];

// Array 4: Large array with mixed numbers
const testArray4 = [10, 0, -20, 0, 30, 40, 50, 0, 60, -70, 0];

// Array 5: Array with decimals and zeros
const testArray5 = [0, 1.5, 0.0, -3.14, 0, 2.5, 0];

function countTheZeroes(numberArray) {
  let numberOfZeroes = 0;
  let joinedArray = numberArray.join('').split('');

  for (let number of joinedArray) {
    if (number === "0") {
      numberOfZeroes += 1;
    }
  }
  
  return `Zero count: ${numberOfZeroes}`;
}

console.log(countTheZeroes(testArray1));
console.log(countTheZeroes(testArray2));
console.log(countTheZeroes(testArray3));
console.log(countTheZeroes(testArray4));
console.log(countTheZeroes(testArray5));







// 9) Write a function that takes in an array of numbers and returns true if all the numbers are bigger than 10, otherwise returns false.

// 10) Write a function that takes in an array of words and returns the number of times the letter “a” appeared in total.