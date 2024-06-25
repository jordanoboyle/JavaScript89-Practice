// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

function getIndexToIns(arr, num) {
  let sortArray = arr.sort(function(a, b) {return a - b});
  if (!sortArray.length) { 
    sortArray.push(num);
  } else if (num <= sortArray[0]) {
    sortArray.splice(0, 0, num);
  } else if (num >= sortArray[sortArray.length - 1]) {
    sortArray.splice(sortArray.length, 0, num);
  } else {
    for (let i = 0; i < sortArray.length; i++) {
      if (num >= sortArray[i] && num <= sortArray[i + 1]) {
        sortArray.splice(sortArray.indexOf(sortArray[i + 1]), 0, num);
        break;
      }
    }
  }
  return sortArray.indexOf(num);
}

console.log(getIndexToIns([], 17 )); // return 0
console.log(getIndexToIns([10, 20, 30, 40, 50], 35)); ///return 3
console.log(getIndexToIns([10, 20, 30, 40, 50], 30)); // return 2
console.log(getIndexToIns([5, 3, 20, 3], 5)); // return 2

// You can do this:
function indexToInsert (arr, num) {
  let sorted = arr.sort((a, b) => {a - b});
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] >= num) {
      return i;
    }
  }
  return arr.length
}

let number = 8;
console.log(number > undefined);

// for (let i = 0; i < sortArray.length; i++)