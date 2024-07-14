// Here we will cover implentation of selection sort. Selection sort is faster in the worst case than bubbl sort due to the lack of need to make a swap every time, as you will see in the code. The idea here is that you only swap if you find a lower value, but in bubble sort if you have a completely inverted array you will have to make a swap on each and every comparison. 
//Interestingly they will each have the same Big O because constants are removed in order actual written notation. However here is what it would look like with constants. 
// Bubble = O(n^2)  Selection = O(n^2 / 2)

let numerals = [0, 1, 2, 10, 9, 30, 25, 16]

function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let lowestNumberIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[lowestNumberIndex]) {
        lowestNumberIndex = j;
      }
      if (lowestNumberIndex !== i) {
        let temp = array[i];
        array[i] = array[lowestNumberIndex];
        array[lowestNumberIndex] = temp;
      }
    }
  }
  return array;
}

console.log(selectionSort(numerals));

//QA: We are effectively shifting around the elements assigned to a particular index. We only swap when it is necessary as dictated by the second if conditional. 

//QB (quick breakdown): We don't need to run the last value since the array will be fully sorted by that point. We assign lowestNumberIndex to i unless the value at index j is less that array[lowesIndexValue]. In that case we assign the lowestIndexValue to j. With the final conditional, we check if lowestNumberIndex has been swapped, if so, we reassign array elements to their proper ordered index value. 