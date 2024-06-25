
//Finders Keepers
// Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.
function findElement(arr, func) {
  let num = 0;
  let trueFalse = false;
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i]) === true) {
      num = arr[i];
      trueFalse = true;
      break;
    }
  }
  if (trueFalse === true) {
    return num;
  } else {
    return undefined;
  }
}

//refactor
function findTheElement(arr, func) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));
console.log(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }))
console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }));


function recursiveFindElement(arr, func) {
  if (arr.length > 0 && !func(arr[0])) {
    return recursiveFindElement(arr.slice(1), func);
  } else {
    return arr[0];
  }
}

let monkey = [1, 2, 3, 4, 5];
console.log(monkey.slice(1));