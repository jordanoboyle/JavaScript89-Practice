// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
// example of solution = ([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)
// return = [[0, 1, 2, 3], [4, 5, 6, 7], [8]]


function chunkArrayInGroups(arr, size) {
  let basicArr            = [];
  for (let i = 0; i < arr.length; i += size) {
    basicArr.push(arr.slice(i, i + size));
  }
  return console.log(basicArr);
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);


chunkArrayInGroups(["a", "b", "c", "d"], 2);



let nums = [1, 2, 3, 4, 5];

function testChunk(arr) {
  let twoDimensionalArray = [];
  let basicArr            = [];
  for (let i = 0; i < arr.length; i += 1) {
    basicArr.push(arr[i]);
    twoDimensionalArray.push(basicArr);
  }
  return console.log(twoDimensionalArray);
}
// [[1], [1,2], [1,2,3], [1,2,3,4], [1,2,3,4,5]]
testChunk(nums);

// The reason your testChunk function returns nested arrays containing the entire basicArr in each step instead of creating separate chunks is due to the nature of array references in JavaScript. Each time you push basicArr into twoDimensionalArray, you're pushing the same reference to basicArr. Therefore, all entries in twoDimensionalArray refer to the same array, and any changes to basicArr are reflected in all references.