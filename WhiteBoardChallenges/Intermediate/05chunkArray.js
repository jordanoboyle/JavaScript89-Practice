// Description:
// Write a function chunkArray that takes two arguments: an array and a chunk size. The function should split the array into subarrays of the specified chunk size and return the new array of subarrays.

const { min } = require("lodash");

// inputs:
const inputArray = [1, 2, 3, 4, 5, 6, 7, 8];
const chunkSize = 3;
const inputArray1 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const chunkSize1 = 4;
const inputArray2 = [5, 10, 15, 20, 25];
const chunkSize2 = 2;

// expected output:
// // [[1, 2, 3], [4, 5, 6], [7, 8]]

function chunkThisArray(arr, chunkSize) {
  let chunkedArray = [];
  let miniChunk = [];

  arr.forEach(num => {
    if (miniChunk.length === chunkSize) {
      chunkedArray.push(miniChunk);
      miniChunk = [];
    } 
    if (arr.indexOf(num) === arr.length - 1) {
      miniChunk.push(num);
      chunkedArray.push(miniChunk);
    } else {
      miniChunk.push(num);
    }
  });
  return chunkedArray;
}

console.log(chunkThisArray(inputArray, chunkSize));
console.log(chunkThisArray(inputArray1, chunkSize1));
console.log(chunkThisArray(inputArray2, chunkSize2));

function chunkThisArray2(arr, chunkSize) {
  let chunkedArray = [];

  for (let i = 0; i < arr.length; i += chunkSize) {
    chunkedArray.push(arr.slice(i, i + chunkSize));
  }
  return chunkedArray;
}

console.log(chunkThisArray2(inputArray, chunkSize));
console.log(chunkThisArray2(inputArray1, chunkSize1));
console.log(chunkThisArray2(inputArray2, chunkSize2));
