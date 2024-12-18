//Selection Sort Practice

// Array with Positive Integers
const positiveIntegers = [34, 7, 23, 32, 5, 62, 12, 11, 90, 45];
// Expected Output (Sorted): [5, 7, 11, 12, 23, 32, 34, 45, 62, 90]

// Array with Both Positive and Negative Integers
const mixedIntegers = [15, -3, 22, -11, 0, 19, -7, 5, -2, 8];
// Expected Output (Sorted): [-11, -7, -3, -2, 0, 5, 8, 15, 19, 22]

// Array with Decimals Close in Value
const decimals = [3.14, 3.15, 3.13, 3.16, 3.12, 3.11, 3.14, 3.10, 3.17, 3.13];
// Expected Output (Sorted): [3.10, 3.11, 3.12, 3.13, 3.13, 3.14, 3.14, 3.15, 3.16, 3.17]


//PRACTICE FOR SELECTION SORT:

function selectionSort(unsortedArray) {
  let sortedArray = unsortedArray;

  

  for (let i = 0; i < sortedArray.length; i++) {
    
    let minimumIndex = i;
    
    for (let j = i + 1; j < sortedArray.length; j++) {

      if (sortedArray[minimumIndex] > sortedArray[j]) {
        minimumIndex = j;
      }
    }

    if (minimumIndex !== i) {
      let temp = sortedArray[i];
      sortedArray[i] = sortedArray[minimumIndex];
      sortedArray[minimumIndex] = temp;
    }
  }
  
  return sortedArray;
}

console.log(selectionSort(positiveIntegers));
console.log(selectionSort(mixedIntegers));
console.log(selectionSort(decimals));