// 5. Remove duplicates in-place in a sorted array.
// Description: Write a function that removes duplicates from a sorted array in-place and returns the new length of the array using two-point iteration.
// Example: For array [1, 1, 2, 2, 3, 4, 4, 5], the function modifies the array to [1, 2, 3, 4, 5] and returns 5.


let sortedArr1 = [1, 1, 2, 2, 3, 4, 4, 5];


function removeDuplicates(sortedNumArr) {

  let LP = 0;

  let comparisonHash = {};

  while (LP < sortedNumArr.length) {
    if (!comparisonHash[sortedNumArr[LP]]) {
      comparisonHash[sortedNumArr[LP]] = true;
      LP++;
    } else {
      sortedNumArr.splice(LP, 1);
    }
  }
  return sortedNumArr.length;
}

console.log(removeDuplicates(sortedArr1));