// Array with positive integers only
const positiveIntegers = [42, 7, 18, 60, 23, 56, 3, 89, 11, 95];

// Array with both decimals and integers
const decimalsAndIntegers = [12.5, 47, 3.8, 15.2, 29, 88.1, 6, 19.4, 45, 72.6];

// Array with negatives and positive integers
const negativesAndPositives = [-15, 32, -8, 7, -42, 25, 64, -19, 4, -3];

function bubbaSort(unsortedArray) {

  let sortedArr = unsortedArray;

  let swapped = true;

  let n = sortedArr.length + 1;

  let rThroughs = 0;

  while(swapped) {
    swapped = false;
    for(let i = 0; i < n - 1; i++) {
      
      if (sortedArr[i] > sortedArr[i + 1]) {
        
        let temp = sortedArr[i];
        sortedArr[i] = sortedArr[i + 1];
        sortedArr[i + 1] = temp;
        swapped = true;
        
      }
      //recording iterations (comment out n-- if you would like to see this in action)
      console.log(`Rollthroughs = ${rThroughs}`);
      rThroughs += 1
    }
    n--;
  }
  return sortedArr;
}

console.log(bubbaSort(positiveIntegers));