//Write a function that takes in a non-empty array of integers that are sorted in ascending
//order and returns a new array of the same length with the squares of the original integers
//also sorted in ascending order. 

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Array of positive integers
const arr2 = [1, 2, 3, 5, 7, 9, 12, 15, 18, 20];

// Array of negative integers
const arr3 = [-20, -18, -15, -12, -9, -7, -5, -3, -2, -1];

// Array of floats (positive and negative)
const arr4 = [-9.8, -6.5, -3.2, -1.1, 0.0, 1.5, 3.3, 6.7, 8.8, 10.5];


//first we need to iterate through the array, building a new one
//best option here is to use map, but we could encounter negs
//we need to account for this, maybe we need pointers.
//lets just print the squares

function sortedSquares(array) {
  let orderedSquares = [];

  let leftPoint = 0;
  let rightPoint = array.length - 1;

  for (let i = array.length - 1; i >= 0; i--) {
    if (array[leftPoint] > array[rightPoint]) {
      orderedSquares[i] = array[leftPoint]**2;
      leftPoint++;
    } else {
      orderedSquares[i] = array[rightPoint]**2;
      rightPoint--;
    }
  }
  return orderedSquares;
}

console.log(sortedSquares(arr1));
console.log(sortedSquares(arr2));
console.log(sortedSquares(arr3));
console.log(sortedSquares(arr4));


console.log("%%%%%%%%%%%%%%%%%%%%%");

function sortTheSquares2(sortedArray) {
  let orderSqrArray = [];

  let leftP = 0;
  let rightP = sortedArray.length - 1;

  for (let i = sortedArray.length - 1; i >= 0; i--) {
    //first we need to create a conditional to test absolute value situations
    if (Math.abs(sortedArray[leftP]) > Math.abs(sortedArray[rightP])) {
      orderSqrArray[i] = sortedArray[leftP] ** 2;
      leftP ++;
    } else {
      orderSqrArray[i] = sortedArray[rightP] ** 2;
      rightP --;
    }
  }
  return orderSqrArray;
}
console.log(sortTheSquares2(arr1));
console.log(sortTheSquares2(arr2));
console.log(sortTheSquares2(arr3));
console.log(sortTheSquares2(arr4));

console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%")
 
function sortedSqrs3(sortedArray) {
  //here we are going to do the same thing but with a while loop
  //still a two pointer solution but we need more set variables to accomplish this

  let orderedSquares = [];

  let leftP = 0;
  let rightP = sortedArray.length - 1 ;
  let index = sortedArray.length - 1;

  while (leftP <= rightP) {
    if (Math.abs(sortedArray[leftP]) > Math.abs(sortedArray[rightP])) {
      orderedSquares[index] = sortedArray[leftP] ** 2;
      leftP ++;
    } else {
      orderedSquares[index] = sortedArray[rightP] ** 2;
      rightP --;
    }
    index --;
  }
  return orderedSquares;
}
console.log(sortedSqrs3(arr1));
console.log(sortedSqrs3(arr2));
console.log(sortedSqrs3(arr3));
console.log(sortedSqrs3(arr4));