// Simplified JavaScript implementation of array sort
Array.prototype.simpleSort = function(comparator) {
  if (typeof comparator !== 'function') {
    // Default comparator function if none provided
    comparator = function(a, b) {
      a = String(a);
      b = String(b);
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    };
  }

  // Implementation of QuickSort
  function quickSort(arr, left, right) {
    if (left < right) {
      const pivotIndex = partition(arr, left, right);
      quickSort(arr, left, pivotIndex - 1);
      quickSort(arr, pivotIndex + 1, right);
    }
  }

  function partition(arr, left, right) {
    const pivot = arr[right];
    let i = left;
    for (let j = left; j < right; j++) {
      if (comparator(arr[j], pivot) < 0) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
      }
    }
    [arr[i], arr[right]] = [arr[right], arr[i]];
    return i;
  }

  quickSort(this, 0, this.length - 1);
  return this;
};

// Example usage
let numbers = [3, 5, 2, 7, 9, 10, 1, -3, 7.0];
numbers.simpleSort((a, b) => a - b);
console.log(numbers); // Output: [-3, 1, 2, 3, 5, 7, 7, 9, 10]

// Explanation
// Default Comparator:

// If no comparator function is provided, it uses a default function to compare elements as strings.
// This matches the behavior of the native .sort() method when no comparator is provided.
// QuickSort Algorithm:

// A recursive QuickSort algorithm is implemented.
// quickSort function sorts the array by partitioning it into smaller arrays.
// partition function rearranges the elements in the array so that all elements less than the pivot come before it, and all elements greater than the pivot come after it.
// Actual Implementation in V8 (Google's JavaScript Engine)
// The real implementation in V8 is much more complex and optimized. It uses Timsort, a hybrid sorting algorithm derived from merge sort and insertion sort. The source code for V8 is written in C++ and JavaScript. You can find the relevant files in the V8 repository on GitHub. Here is an example link to the relevant part of the V8 source code: