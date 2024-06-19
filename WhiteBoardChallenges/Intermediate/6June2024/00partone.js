// # Standard Technical:
function spaceBar() {
  let space = "";
  for (let i = 0; i < 20; i++) {
    space += "%";
  }
  return console.log(space);
}


// # 1) Write a function that takes in an array of numbers and returns its sum.

// # 2) Write a function that takes in an array of strings and returns the smallest string.
let smallStrings = ["rubber", "duck", "noctis", "clive", "barret", "kefka"]; // => duck

function findSmallestString(strArray) {
  let smallest = strArray[0];
  strArray.forEach(function(str) {
    if (str.length < smallest.length) {
      smallest = str;
    }
  });
  return console.log(smallest);
}
findSmallestString(smallStrings);

// # 3) Write a function that takes in an array of numbers and returns a new array with the numbers in reverse order.

// # 4) Write a function that takes in an array of words and returns the number of words that begin with the letter “a”.

// # 5) Write a function that takes in an array of strings and joins them together to make a single string separated by commas.

// # 6) Write a function that takes in an array of numbers and returns the product of all the numbers (each number multiplied by each other).

// # 7) Write a function that takes in an array of numbers and returns the two smallest numbers.

// # 8) Write a function that takes in an array of numbers and returns a count of how many zeros are in the array.

// # 9) Write a function that takes in an array of numbers and returns true if all the numbers are bigger than 10, otherwise returns false.

spaceBar();
// # 10) Write a function that takes in an array of words and returns the number of times the letter “a” appeared in total.
let arrayOfWordsWithA = ["array", "takes", "appeared", "total", "batman"]; // => 8

function findTheATotal(strArray) {
  let countAs = 0;
  strArray.join().split("").forEach(function(letter) {
    if (letter === "a") {
      countAs += 1;
    }
  }); 
  return countAs;
}

console.log(findTheATotal(arrayOfWordsWithA));


