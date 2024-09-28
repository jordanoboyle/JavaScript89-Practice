//Here we are just goung to do a little bubble sort practice!
//We should actually do some Insertion Sort practice tomorrow now that I think about it. 

const arr1 = [3, -1.5, 7, -8, 2.5, 4, -0.9, 10.1, -6, 5];
const arr2 = [-12, 4.2, 0, 8, -7.7, 3.6, 9, -3, 6.5, 1];
const arr3 = [5.5, -4, 2, -0.3, 11, -9.2, 7.8, -6.1, 3, 0.5];


function bubbleSort(unsortedArray) {

  let n = unsortedArray.length;
  let swapped = true;

  while (swapped) {
    swapped = false;
    for (let i = 0; i < n; i++) {
      if (unsortedArray[i] > unsortedArray[i + 1]) {
        let temp = unsortedArray[i];
        unsortedArray[i] = unsortedArray[i + 1];
        unsortedArray[i + 1] = temp;
        swapped = true;
      }
    }
    n--;
  }
  
  return unsortedArray;
}

console.log(bubbleSort(arr1));
console.log(bubbleSort(arr2));
console.log(bubbleSort(arr3));

console.log("%%%%%%%%%%%%%%%%");

///Slightly different version of the bubble sort

function bubbleSort2(unsortArr) {

  let n = unsortArr.length;
  let swapped = true;

  do{
    swapped = false;

    for (let i = 0; i < 0; i++) {

      if (unsortArr[i] > unsortArr[i + 1]) {
        unsortArr[i], unsortArr[i + 1] = unsortArr[i + 1], unsortArr[i];
        swapped = true;
      }
    }
    n--;
  } while (swapped);

  return unsortArr;
}

console.log(bubbleSort2(arr1));
console.log(bubbleSort2(arr2));
console.log(bubbleSort2(arr3));