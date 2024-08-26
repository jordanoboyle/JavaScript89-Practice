// 1. Check if an array is a palindrome.
// Description: Write a function that checks if an array is a palindrome using two-point iteration (i.e., comparing elements from both ends of the array).
// Example: [1, 2, 3, 2, 1] returns true, [1, 2, 3, 4, 5] returns false.

let arr1 = [1, 2, 3, 2, 1];
let arr2 = [1, 2, 3, 4, 5];
let string = "tenet";

function palindromeTwoPoint(arr) {
  //use two pointer solution to find the solution

  let leftPointer  = 0;
  let rightPointer = arr.length - 1;
  let isPalindrome = true;

  while (leftPointer <= rightPointer) {
    if (arr[leftPointer] !== arr[rightPointer]) {
      isPalindrome = false;
      break;
    }
    leftPointer ++;
    rightPointer --;
  }

  return isPalindrome;
}

console.log(palindromeTwoPoint(arr1));
console.log(palindromeTwoPoint(arr2));
console.log(palindromeTwoPoint(string));
