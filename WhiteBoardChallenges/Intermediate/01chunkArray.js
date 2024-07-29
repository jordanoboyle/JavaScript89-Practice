// Description:
// Write a function chunkArray that takes two arguments: an array and a chunk size. The function should split the array into subarrays of the specified chunk size and return the new array of subarrays.

// inputs:
const inputArray = [1, 2, 3, 4, 5, 6, 7, 8];
const chunkSize = 3;
const inputArray1 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const chunkSize1 = 4;
const inputArray2 = [5, 10, 15, 20, 25];
const chunkSize2 = 2;

// expected output:
// // [[1, 2, 3], [4, 5, 6], [7, 8]]

function chunkyArray(inputArr, chunk) {
  let chunky = [];
  let theChunk = [];

  for (let num of inputArr) {
    if (theChunk.length === chunk) {
      chunky.push(theChunk);
      theChunk = [];
    }
    if (inputArr.indexOf(num) === inputArr.length - 1) {
      theChunk.push(num);
      chunky.push(theChunk);
    } else {
      theChunk.push(num);
    }
  }
  return console.log(chunky);
}
console.log("My first method using conditional checks");
chunkyArray(inputArray, chunkSize);
chunkyArray(inputArray1, chunkSize1);
chunkyArray(inputArray2, chunkSize2);

function chunkyArrayTwo(inputArr, sizeChunk) {
  let chunky = [];
  for (let i = 0; i <= inputArr.length; i += sizeChunk) {  //don't forget that you need the += when reassigning i
    chunky.push(inputArr.slice(i, i + sizeChunk));
  }
  return console.log(chunky);
}
console.log("My Second method using slices (looked this one up)");
chunkyArrayTwo(inputArray, chunkSize);
chunkyArrayTwo(inputArray1, chunkSize1);
chunkyArrayTwo(inputArray2, chunkSize2);