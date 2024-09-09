// 9. Find the union of two arrays, removing duplicates.
// Example: [1, 2, 3] and [2, 3, 4] becomes [1, 2, 3, 4].
// Assumptions: array1 already has no duplicates. The theory is that we are merging two data structures that may 
const { values } = require("lodash");

const arrOne = [1, 2, 3];
const arrTwo = [2, 3, 4];
const arr1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const arr2 = [15, 25, 30, 45, 60, 75, 90, 95, 105, 110]; // Duplicates: 30, 60, 90

const arr3 = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
const arr4 = [3, 6, 9, 15, 27, 33, 35, 42, 48, 50]; // Duplicates: 15, 35, 50

const arr5 = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
const arr6 = [150, 250, 300, 350, 600, 650, 800, 850, 950, 1050]; // Duplicates: 300, 600, 800

const arr7 = [12, 24, 36, 48, 60, 72, 84, 96, 108, 120];
const arr8 = [15, 24, 36, 49, 60, 72, 85, 96, 109, 125]; // Duplicates: 24, 36, 60, 72, 96


let merged = [...arr1, ...arr2];
console.log(merged);

function combineArraysNoDups(array1, array2) {
  let testingObj = {};
  array1.forEach(value => {
    if (testingObj[value] === undefined) {
      testingObj[value] = true;
    }
  });
  // console.log("test Object build",testingObj);
  let noDupsArray2 = [];
  let duplicatesArray2 = [];
  array2.forEach(value => {
    if (testingObj[value] !== true) {
      noDupsArray2.push(value);
    } else {
      duplicatesArray2.push(value);
    }
  });
  console.log("Testing Proper duplicates removes", duplicatesArray2);
  return [...array1, ...noDupsArray2];
}

console.log(combineArraysNoDups(arrOne, arrTwo));
console.log(combineArraysNoDups(arr1, arr2));
console.log(combineArraysNoDups(arr3, arr4));
console.log(combineArraysNoDups(arr5, arr6));
console.log(combineArraysNoDups(arr7, arr8));

//There is a more efficient way to do this with a Set(), 

function noDuplicatesArraysMerge(array1, array2) {
  let noDuplicateMerge = [...new Set([...array1, ...array2])];
  return noDuplicateMerge;
}

console.log(noDuplicatesArraysMerge(arrOne, arrTwo));
console.log(noDuplicatesArraysMerge(arr1, arr2));
console.log(noDuplicatesArraysMerge(arr3, arr4));
console.log(noDuplicatesArraysMerge(arr5, arr6));
console.log(noDuplicatesArraysMerge(arr7, arr8));






