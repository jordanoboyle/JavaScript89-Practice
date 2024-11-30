//Selection sort from memory one more time:

// Array 1: Random positive integers and negative numbers
const arr1 = [34, -2, 45, 1, -23, 16, 89, -5, 72, 10];

// Array 2: Mixed positive and negative numbers with floating-point values
const arr2 = [1.5, -3.2, 10, -15.5, 8.8, 5.1, -6.7, 12.9, -9.1, 3];

// Array 3: Already sorted array (to test the best case for insertion sort)
const arr3 = [-25, -12, -5, 0, 3, 10, 15, 22, 35, 48];

function selectionSort2(unsortArr) {

  let sortArr = unsortArr;
  let n = sortArr.length;

  for (let i = 0; i < n - 1; i++) {

    let minimumIndex = i;

    for (let j = i + 1; j < n; j++) {

      if (sortArr[minimumIndex] > sortArr[j]) {
        minimumIndex = j;
      }
    }

    if (minimumIndex !== i) {
      let temporary = sortArr[i];
      sortArr[i] = sortArr[minimumIndex];
      sortArr[minimumIndex] = temporary;
    }
  }
  return sortArr;
}

console.log(selectionSort2(arr1));
console.log(selectionSort2(arr2));
console.log(selectionSort2(arr3));