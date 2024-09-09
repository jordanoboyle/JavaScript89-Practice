//Write a function that takes in a non-empty array of integers that are sorted in ascending
//order and returns a new array of the same length with the squares of the original integers
//also sorted in ascending order. 

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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