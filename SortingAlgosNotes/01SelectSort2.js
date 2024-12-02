//Practicing Selection sort




function selectionSort(unsortedNumArr) {
  const n = unsortedNumArr.length;

  for (let i = 0; i < n - 1; i++) {

    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (unsortedNumArr[j] < unsortedNumArr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      let temporary = unsortedNumArr[i];
      unsortedNumArr[i] = unsortedNumArr[minIndex];
      unsortedNumArr[minIndex] = temporary;
    }
  }

  return unsortedNumArr;
}

console.log(selectionSort(arr2));
console.log(selectionSort(arr3));
console.log(selectionSort(arr1));

