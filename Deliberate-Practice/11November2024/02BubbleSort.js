//Just trying to do a bubble sort from memory. It has been a minute since I have built this.
//Been focusing on my courses and small projects more. 

// Array with positive integers only
const positiveIntegers = [42, 7, 18, 95, 23, 56, 3, 89, 11, 60];

// Array with both decimals and integers
const decimalsAndIntegers = [12.5, 47, 3.8, 15.2, 29, 88.1, 6, 19.4, 45, 72.6];

// Array with negatives and positive integers
const negativesAndPositives = [-15, 32, -8, 7, -42, 25, 64, -19, 4, -3];

function bubbleSort(unsortedArr) {

  let sortedArr = unsortedArr;

  let swapped = true;

  while (swapped) {
    swapped = false;
    for (let i = 0; i < sortedArr.length + 1; i++) {
      if (sortedArr[i] > sortedArr[i + 1]) {
        let temp = sortedArr[i];
        sortedArr[i] = sortedArr[i + 1];
        sortedArr[i + 1] = temp;
        swapped = true;
      }
    }
  }
  return sortedArr;
}

console.log(bubbleSort(positiveIntegers));
console.log(bubbleSort(decimalsAndIntegers));
console.log(bubbleSort(negativesAndPositives));