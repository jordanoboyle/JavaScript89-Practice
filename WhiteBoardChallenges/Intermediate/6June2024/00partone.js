// # Standard Technical:
function spaceBar() {
  let space = "";
  for (let i = 0; i < 20; i++) {
    space += "%";
  }
  return console.log(space);
}

spaceBar();
// # 1) Write a function that takes in an array of numbers and returns its sum.

let sumThese = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //=>50
function sumNumbers(numArray) {
  let sum = 0;
  numArray.forEach(number => {
    sum += number;
  });
  return console.log(sum);
}
sumNumbers(sumThese);
spaceBar();
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
spaceBar();
// # 3) Write a function that takes in an array of numbers and returns a new array with the numbers in reverse order.
//Notes: in JS we need to remember that it does not have "traditional" decrament ability. 
let numbers = [1, 2, 3, 4, 5, 6, 7,];

function reverseNumArray(numArr) {
  let reversedArray = [];
  for (let i = numArr.length - 1; i >= 0; i --) {
    reversedArray.push(numArr[i]);
  }
  return reversedArray;
}
console.log(reverseNumArray(numbers));
spaceBar();
// # 4) Write a function that takes in an array of words and returns the number of words that begin with the letter “a”.
//Notes: this requires one loop and is likely O(n)
let wordsBeginWith = ["Aaron", "big", "anaconda", "cat", "james", "array"];

function findWordsWithA (wordArr) {
  let count = 0;
  wordArr.forEach(function(word) {
    if (word.toLowerCase()[0] === "a") {
      count += 1;
    }
  });
  return count;
}
console.log(findWordsWithA(wordsBeginWith));
spaceBar();

// # 5) Write a function that takes in an array of strings and joins them together to make a single string separated by commas.
let words = ["Luke", "Han", "Lando", "Chewie"];

function separateWithCommas (wordArr) {
  let commaSeparation = "";
  wordArr.forEach(word => {
    if (wordArr.indexOf(word) === wordArr.length - 1) {
      commaSeparation += word;
    } else {
      commaSeparation += word + ", ";
    }
  });
  return console.log(commaSeparation);
}
console.log("answer 5")
separateWithCommas(words);
spaceBar();
// # 6) Write a function that takes in an array of numbers and returns the product of all the numbers (each number multiplied by each other).

// # 7) Write a function that takes in an array of numbers and returns the two smallest numbers.
let numbersOne = [3, 5, -10, 7, 9, 10, 1, -3, 7.0]; // ==> -3, 1
function findTwoSmallest (numArr) {
  if (numArr.length < 2) throw new Error("Array must have two elements");
  let smallest    = numArr[0];
  let secSmallest = numArr[0];
  numArr.forEach(num => {
    if (num === smallest) {
      secSmallest = num;
    } else if (num < smallest) {
      secSmallest = smallest;
      smallest = num;
    } else if (num <= secSmallest && num !== smallest) {
      secSmallest = num;
    }
  });
  return console.log(`The smallest number is ${smallest} and next smallest ${secSmallest}`);
}
console.log("Answer 7");
findTwoSmallest(numbersOne);
//Notes: You can easily run a sort function here to get the answers you seek, however this will be O(n^2) despite being an optimized algorithm called Timsort which combines merge sort and insertion sort. 

spaceBar();
// # 8) Write a function that takes in an array of numbers and returns a count of how many zeros are in the array.
let numbersThree = [505, 40, 306, 23, 200]; // => 5
//first we should join the entire array and turn everything into strings
function countZeros(numArray) {
  let stringNumArray = numArray.join("");
  let countZero = 0;
  for (let i = 0; i < stringNumArray.split("").length; i++) {
    if (stringNumArray.split("")[i] === "0") {
      countZero += 1;
    }

  }
  return countZero;
}
console.log(countZeros(numbersThree));
spaceBar();
// # 9) Write a function that takes in an array of numbers and returns true if all the numbers are bigger than 10, otherwise returns false.
let numbersFour = [100, 11, 20, 10.01, 50, 10.0001, 13, 59, 13];
function greaterThanTen(numArray) {
  let tF = true
  numArray.forEach(num => {
    if (num < 10) {
      tF = false;
    }
  })
  return tF;
}
console.log(greaterThanTen(numbersFour));
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


