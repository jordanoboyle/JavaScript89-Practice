// 10. Use a nested loop to compute the difference of each pair of numbers from two arrays of objects.
// Example: [{id: 1, value: 3}, {id: 2, value: 7}] and [{id: 3, value: 2}, {id: 4, value: 5}] becomes [1, -2, 5, 2].
import { selectionSort, eliminateDuplicates } from "../../Utilities/utils.js";

const array1 = [
  { id: 1, value: 3 },
  { id: 2, value: 7 },
  { id: 3, value: 10 },
  { id: 4, value: 15 }
];
const array2 = [
  { id: 5, value: 2 },
  { id: 6, value: 5 },
  { id: 7, value: 8 }
];
const array3 = [
  { id: 1, value: 12 },
  { id: 2, value: 25 },
  { id: 3, value: 18 },
  { id: 4, value: 30 },
  { id: 5, value: 21 }
];
const array4 = [
  { id: 6, value: 9 },
  { id: 7, value: 20 },
  { id: 8, value: 15 },
  { id: 9, value: 5 }
];

function whatIsDifferenceOfValues(arr1, arr2) {
  let firstArray  = arr1;
  let secondArray = arr2;

  let arrOfDifferences = [];

  arr1.forEach(elArr1 => {
    let subFrom = elArr1.value;
    arr2.forEach(elArr2 => {
      arrOfDifferences.push(subFrom - elArr2.value);
    });
  });
  
  return {
    "Original"              : `${arrOfDifferences}`,
    "Sorted"                : `${selectionSort(arrOfDifferences)}`,
    "Duplicates Eliminated" : `${eliminateDuplicates(arrOfDifferences)}`
  }
}

console.log(whatIsDifferenceOfValues(array1, array2));
console.log(whatIsDifferenceOfValues(array3, array4));