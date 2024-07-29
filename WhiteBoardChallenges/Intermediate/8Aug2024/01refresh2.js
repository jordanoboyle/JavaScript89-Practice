function spaceBar() {
  let space = "";
  for (let i = 0; i < 20; i++) {
    space += "%";
  }
  return console.log(space);
}

// 5) Write a function that takes in an array of strings and joins them together to make a single string separated by commas.
let joinThese = ["I", "am", "going", "to", "join", "these", "strings", "."];

function joinStringArray(strings) {
  let joinedString = "";
  strings.forEach(element => {
    if (strings.indexOf(element) === strings.length - 1) {
      joinedString += element;
    } else {
      joinedString += element + ", ";
    }
  });
  return console.log(joinedString);
}

joinStringArray(joinThese);

spaceBar();

// 6) Write a function that takes in an array of numbers and returns the product of all the numbers (each number multiplied by each other).
let findProduct = [1, 2, 3, 4, 5]; //=> 96

function getProductMath(numArray) {
  let i = 0;
  let product = 1;
  do {
    product *= numArray[i];
    i ++;
  }
  while (i < findProduct.length);

  return console.log(product);
}
getProductMath(findProduct);
spaceBar();
// 7) Write a function that takes in an array of numbers and returns the two smallest numbers.
const findSmall = [1.00, 1.01, -3, 0, 6, 10, 0.5, 20]; // => -3, 0
const findSmall2 = [10, 0, -5, -5.5, 6, -1, 12, 8];
const findSmall3 = [1];

function findTheTwoSmallest(numArray) {
  let smallest = numArray[0];
  let smallestTwo = numArray[0];

  if (numArray.length < 2) {
    throw new Error("The array must contain two elements, sorry.");
  } // Here I am running a quick check to make sure we have more than two elements in the array. This is a Fail Loudly Check

  numArray.forEach(number => {
    if (number <= smallest) {
      smallestTwo = smallest;
      smallest = number;
    } else if (number > smallest && number <= smallestTwo) {
      smallestTwo = number;
    }
  })
  return console.log(`smallest: ${smallest}, secondSmall: ${smallestTwo}`);
}

findTheTwoSmallest(findSmall);
findTheTwoSmallest(findSmall2);
spaceBar();

// 8) Write a function that takes in an array of numbers and returns a count of how many zeros are in the array.
const arrayWithZeros1 = [0, 1, 2, 0, 3, 0, 4, 5, 0];
// Expected Output: 4
const arrayWithZeros2 = [10, 0, 0, 20, 30, 0, 40, 50, 0, 60, 0];
// Expected Output: 5
const arrayWithZeros3 = [0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6];
// Expected Output: 5

function countTheZeroes(numArray) {
  let numZeroes = 0;
  let index = 0;
  while (index < numArray.length) {
    if (numArray[index] === 0) {
      numZeroes += 1;
    }
    index ++;
  }
  return console.log(numZeroes);
}
countTheZeroes(arrayWithZeros1);
countTheZeroes(arrayWithZeros2);
countTheZeroes(arrayWithZeros3);
spaceBar();


// 9) Write a function that takes in an array of numbers and returns true if all the numbers are bigger than 10, otherwise returns false.

// 10) Write a function that takes in an array of words and returns the number of times the letter “a” appeared in total.