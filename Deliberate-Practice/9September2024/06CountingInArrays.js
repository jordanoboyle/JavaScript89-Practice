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
// Array 1: All numbers are greater than 10 (should return true)
const arr1 = [11, 20, 15, 50, 100];

// Array 2: Some numbers are less than or equal to 10 (should return false)
const arr2 = [5, 12, 18, 9, 11];

// Array 3: All numbers are exactly 10 (should return false)
const arr3 = [10, 10, 10, 10, 10];

// Array 4: Mixed positive and negative numbers (should return false)
const arr4 = [-5, 20, -10, 30, 12];

// Array 5: Empty array (should return true since there are no numbers less than 10)
const arr5 = [];

// Array 6: All numbers are floats greater than 10 (should return true)
const arr6 = [10.1, 15.5, 22.3, 50.4];

// Array 7: Includes a decimal less than 10 (should return false)
const arr7 = [11, 9.5, 20.2, 15.8];


function isGreaterThanTen(numberArray) {
  let greaterThanTen = true;

  for (let number of numberArray) {
    if (number <= 10) {
      greaterThanTen = false;
    }
  }
  return greaterThanTen;
}
console.log(isGreaterThanTen(arr1));
console.log(isGreaterThanTen(arr2));
console.log(isGreaterThanTen(arr3));
console.log(isGreaterThanTen(arr4));
console.log(isGreaterThanTen(arr5));
console.log(isGreaterThanTen(arr6));
console.log(isGreaterThanTen(arr7));

console.log("%%%%%%%%%%");

// 10) Write a function that takes in an array of words and returns the number of times the letter “a” appeared in total.
// Array 1: Words with multiple occurrences of 'a'
const test1 = ['apple', 'banana', 'avocado', 'grape', 'mango']; // Should return 7

// Array 2: Words without the letter 'a'
const test2 = ['hello', 'world', 'python', 'javascript']; // Should return 2 (only in "javascript")

// Array 3: Words where every word has an 'a'
const test3 = ['ant', 'bat', 'cat', 'hat', 'rat']; // Should return 5

// Array 4: Words with mixed case letters (uppercase and lowercase 'a')
const test4 = ['Amazon', 'Alphabet', 'Africa', 'Australia', 'Asia']; // Should return 9 (counting both lowercase and uppercase 'a')

// Array 5: An empty array (edge case)
const test5 = []; // Should return 0

function countTheDefinedLetters(strArray, defLetter) {
  let joinedArray = strArray.join('');
  let numAs = 0;

  for (let letter of joinedArray) {
    if (letter.toLowerCase() === 'a') {
      numAs += 1;
    }
  }
  return `Number of A's: ${numAs}`;
}

console.log(countTheDefinedLetters(test1, 'a'));
console.log(countTheDefinedLetters(test2, 'a'));
console.log(countTheDefinedLetters(test3, 'a'));
console.log(countTheDefinedLetters(test4, 'a'));
console.log(countTheDefinedLetters(test5, 'a'));