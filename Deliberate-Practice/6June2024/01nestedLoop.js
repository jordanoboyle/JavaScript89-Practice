function spaceBar() {
  let space = "";
  for (let i = 0; i < 20; i++) {
    space += "%";
  }
  return console.log(space);
}

// 1. Use a nested loop to convert an array of number pairs into a single flattened array.
// For example, [[1, 3], [8, 9], [2, 16]] becomes [1, 3, 8, 9, 2, 16].
let pairs = [[1, 3], [8, 9], [2, 16]];
let singleArray = []
pairs.forEach(function(pair) {
  pair.forEach(number => {
    singleArray.push(number);
  });
});
console.log(singleArray);
spaceBar();

// 2. Use a nested loop with two arrays of strings to create a new array of strings with each string combined.
// For example, ["a", "b", "c"] and ["d", "e", "f", "g"] becomes ["ad", "ae", "af", "ag", "bd", "be", "bf", "bg", "cd", "ce", "cf", "cg"].
let lettersOne = ["a", "b", "c"];
let lettersTwo = ["d", "e", "f", "g"];
let combinedLetters = [];
lettersOne.forEach(letOne => {
  lettersTwo.forEach(letTwo => {
    combinedLetters.push(letOne + letTwo);
  });
});
console.log(combinedLetters);
spaceBar();
// 3. Use a nested loop with one array of strings to create a new array that contains every combination of each string with every other string in the array.
// For example, ["a", "b", "c", "d"] becomes ["ab", "ac", "ad", "ba", "bc", "bd", "ca", "cb", "cd", "da", "db", "dc"].

let startLetters = ["a", "b", "c", "d"];
let combineSingleLetArray = [];
let i = 0;
while (i < startLetters.length) {
  let secondLetters = startLetters;
  let j = 0;
  while (j < secondLetters.length) {
    if (startLetters[i] !== secondLetters[j]) {
      combineSingleLetArray.push(startLetters[i] + secondLetters[j]);
    }
    j++;
  }
  i++;
}
console.log(combineSingleLetArray);
spaceBar();


// 4. Use a nested loop to find the largest product of any two different numbers within a given array.
// For example, [5, -2, 1, -9, -7, 2, 6] becomes 63.
let numbersOne = [5, -2, 1, -9, -7, 2, 6];
let greatestProduct = 1;
numbersOne.forEach(numOne => {
  numbersOne.forEach(numTwo => {
    if (numOne !== numTwo) {
      let product = numOne * numTwo;
      if (product > greatestProduct) {
        greatestProduct = product;
      }
    }
  });
});
console.log(greatestProduct);


// 5. Use a nested loop to compute the sum of all the numbers in an array of number pairs.
// For example, [[1, 3], [8, 9], [2, 16]] becomes 39.

// 6. Use a nested loop with two arrays of numbers to create a new array of the sums of each combination of numbers.
// For example, [1, 2] and [6, 7, 8] becomes [7, 8, 9, 8, 9, 10].

