// Here we are covering insertion sort. In insertion sort we are temporarily removing a value, creating a gap in the array and moving the left value to the right accordingly. This is an exceedingly simple explanation, but it is effectively what is happening (refere to Chap 6 Common Sense DSA for more in depth)

let numerals = [0, 1, 2, 10, 9, 30, 25, 16];

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let tempValue = array[i];
    let position = i - 1;
    
    while (position >= 0) {
      if (array[position] > tempValue) {
        array[position + 1] = array[position];
        position = position - 1;
      } else {
        break;
      }
      array[position + 1] = tempValue;
    }
  }
  return array;
}

console.log(insertionSort(numerals));

//QA Here we are taking the value "out" of the array and assigning it to tempValue. If the value on the left is less than temp value, we shift it to the right. We then compare it to every value to its left. If we reach a point where the value on the left is less than temp value we "reinsert" the temp value into the gap we created by shifting the last value to the right. Reach index 0, then we just insert it. Position will always return to being determined in the outer loop, which is key to understanding what is going on here. 

//QB If the comparison to the left is a failed via the then we reinsert the tempValue back into position + 1. This is coverd by lines 15 and 17.