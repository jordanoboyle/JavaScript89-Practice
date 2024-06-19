function countAInString(str) {
  if (str.length === 0) {
    return 0;
  }
  return (str[0] === 'a' ? 1 : 0) + countAInString(str.slice(1));
}

function countAInArray(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return countAInString(arr[0]) + countAInArray(arr.slice(1));
}

// Example usage
const words = ["array", "takes", "appeared", "total", "batman"];
console.log(countAInArray(words)); // Output should be 8

//I need to study this. 