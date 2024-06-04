// You are given two arrays and an index.
// Copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.
// Return the resulting array. The input arrays should remain the same after the function runs.


function frankenSplice(arr1, arr2, n) {
  let newArray = arr2.slice(0);
  let j = n;

  arr1.forEach(num => {
    newArray.splice(j, 0, num);
    j += 1;
  });
  return console.log(newArray);
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

/* lets just join two arrays
splice at a provided index
keeping the original arrays the same  */
// [4, 1, 2, 3, 5, 6,]

let arrayOne = [1, 2, 3];
let arrayTwo = [4, 5, 6];
let j = 1;

let newArray = arrayTwo.slice(0);

arrayOne.forEach(num => {
  newArray.splice(j, 0, num);
  j += 1;
});

console.log(newArray);


