// This is an example of SELECTION SORT
//There will be line explanations here for clarity. 

function selectionSort(arrNums) {
  let n = arrNums.length;

  // Outer loop is going to go over each element in the array. 
  for (let i = 0; i < n - 1; i++) {

    //assuming the current element is the minimum
    let minIndex = i;

    //Inner loop will find the smallest element in the unsorted portion.
    for (let j = i + 1; j < n; j++) {
      if (arrNums[j] < arrNums[minIndex]) {
        minIndex = j;
      }
    }
    //if smaller element in unsorted is found, swap with the first element of the unsorted portion. 
    if (minIndex !== i) {
      let temporary = arrNums[i];
      arrNums[i] = arrNums[minIndex];
      arrNums[minIndex] = temporary;
    }
  }

  return arrNums;
}
// Time Complexity is O(n^2), which is not great, but suffices for smaller arrays. This is dictated by the need for nested loops. 
// Space complexity, O(1) because the sorting is done in place, just replacing certain elements as needed. 
// Though if we remember what is going on under the hood, TimeComp gets a little weird do to inherent machinations of replacing values within languages like JS. 

// Array 1: Random positive integers and negative numbers
const arr1 = [34, -2, 45, 1, -23, 16, 89, -5, 72, 10];

// Array 2: Mixed positive and negative numbers with floating-point values
const arr2 = [1.5, -3.2, 10, -15.5, 8.8, 5.1, -6.7, 12.9, -9.1, 3];

// Array 3: Already sorted array (to test the best case for insertion sort)
const arr3 = [-25, -12, -5, 0, 3, 10, 15, 22, 35, 48];

console.log(selectionSort(arr1));
console.log(selectionSort(arr2));
console.log(selectionSort(arr3));
