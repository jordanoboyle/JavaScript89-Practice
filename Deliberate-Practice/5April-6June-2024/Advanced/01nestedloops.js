// SET 2 Write Nested Loops
function spaceBar() {
  let space = "";
  for (let i = 0; i < 20; i++) {
    space += "%";
  }
  return console.log(space);
}

// 1. Use a nested loop to convert an array of number pairs into a single flattened array.
// For example, [[1, 3], [8, 9], [2, 16]] becomes [1, 3, 8, 9, 2, 16].

let arrayOFArrayNums = [[1, 3], [8, 9], [2, 16]];
let flattenedNumArray = [];

arrayOFArrayNums.forEach(small => {
  small.forEach(num => {
    flattenedNumArray.push(num);
  });
});
console.log(flattenedNumArray);
spaceBar();

// 2. Use a nested loop with two arrays of strings to create a new array of strings with each string combined.
// For example, ["a", "b", "c"] and ["d", "e", "f", "g"] becomes ["ad", "ae", "af", "ag", "bd", "be", "bf", "bg", "cd", "ce", "cf", "cg"].
let lettersOne = ["a", "b", "c"];
let lettersTwo = ["d", "e", "f", "g"];
let combinedLetters = [];

for (let j = 0; j < lettersOne.length; j++) {
  for (let k = 0; k < lettersTwo.length; k++) {
    let twoLetter = lettersOne[j] + lettersTwo[k];
    combinedLetters.push(twoLetter);
  }
}
console.log(combinedLetters);
spaceBar();
// 3. Use a nested loop with one array of strings to create a new array that contains every combination of each string with every other string in the array.
// For example, ["a", "b", "c", "d"] becomes ["ab", "ac", "ad", "ba", "bc", "bd", "ca", "cb", "cd", "da", "db", "dc"].

let lettersThree = ["a", "b", "c", "d"];
let runCombineOne = [];

lettersThree.forEach(let1 => {
  lettersThree.forEach(let2 => {
    if (let1 !== let2) {
      runCombineOne.push(let1 + let2);
    }
  });
});
console.log(runCombineOne);
spaceBar();

let combineOneHere = [];

let index1 = 0;
while (index1 < lettersThree.length) {
  let index2 = 0;
  while (index2 < lettersThree.length) {
    if (index1 !== index2) {
      combineOneHere.push(lettersThree[index1] + lettersThree[index2]);
    }
    index2 += 1;
  }
  index1 += 1;
}
console.log(combineOneHere);
spaceBar();


// 4. Use a nested loop to find the largest product of any two different numbers within a given array.
// For example, [5, -2, 1, -9, -7, 2, 6] becomes 63.

let numbersOne = [5, -2, 1, -9, -7, 2, 6];
let largest = 1;
numbersOne.forEach(num => {
  numbersOne.forEach(num2 => {
    if (num !== num2) {
      let compare = num * num2;
      if (compare > largest) {
        largest = compare;
      } else {
        largest = largest;
      }
    }
  });
});
console.log(largest);
spaceBar();

// 5. Use a nested loop to compute the sum of all the numbers in an array of number pairs.
// For example, [[1, 3], [8, 9], [2, 16]] becomes 39.

let numberedPairs = [[1, 3], [8, 9], [2, 16]];
let sumTwo = 0;

for (let f = 0; f < numberedPairs.length; f++) {
  let pair = numberedPairs[f];
  for (let g = 0; g < pair.length; g++) {
    sumTwo += pair[g];
  }
}
console.log(sumTwo);
spaceBar();


// 6. Use a nested loop with two arrays of numbers to create a new array of the sums of each combination of numbers.
// For example, [1, 2] and [6, 7, 8] becomes [7, 8, 9, 8, 9, 10].
let twoArray = [1, 2];
let threeArray = [6, 7, 8];
let combinedSum = [];

let set1 = 0;
while (set1 < twoArray.length) {
  let set2 = 0;
  while (set2 < threeArray.length) {
    combinedSum.push(twoArray[set1] + threeArray[set2]);
    set2 += 1;
  }
  set1 += 1;
}
console.log(combinedSum);
spaceBar();


// 7. Use a nested loop with an array of numbers to compute an array with every combination of products from each number.
// For example, [2, 8, 3] becomes [4, 16, 6, 16, 64, 24, 6, 24, 9].
let findTheProducts = [2, 8, 3];
let theProductsArray = [];

findTheProducts.forEach(function(num) {
  findTheProducts.forEach(function(num2) {
    theProductsArray.push(num * num2);
  });
});

console.log(theProductsArray);
spaceBar();



// 8. Use a nested loop to find the largest sum of any two different numbers within an array.
// For example, [1, 8, 3, 10] becomes 18.
// In this case a forEach is easier to read

let letsFindLargestSum =  [1, 8, 3, 10];
let biggest = 0;

letsFindLargestSum.forEach(x => {
  letsFindLargestSum.forEach(y => {
    if (x !== y) {
      if (x + y > biggest) {
        biggest = x + y;
      } else {
        biggest = biggest;
      }
    }
  });
});
console.log(`The largest sum of different numbers is ${biggest}`);
spaceBar();

// 9. Use nested loops with an array of numbers to compute a new array containing the first two numbers (from the original array) that add up to the number 10. If there are no two numbers that add up to 10, return false.
// For example, [2, 5, 3, 1, 0, 7, 11] becomes [3, 7].

let whatAddsToTen = [2, 5, 3, 1, 0, 7, 11];
let theyAddToTen = [];
let result = false;

whatAddsToTen.forEach(x => {
  whatAddsToTen.forEach(y => {
    if (x !== y) {
      if (x + y === 10 && result === false) {
        result = [x, y];
      }
    }
  });
});
if (result === false) {
  console.log("There are no numbers that equal 10.");
} else {
  console.log(`The first numbers to add to 10 were: ${result}`);
}


// 10. Use a nested loop to convert an array of string arrays into a single string.
// For example, [["a", "man"], ["a", "plan"], ["a", "canal"], ["panama"]] becomes "amanaplanacanalpanama".
let smallWords = [["a", "man"], ["a", "plan"], ["a", "canal"], ["panama"]];
let combineTheWords = "";

smallWords.forEach(pair => {
  pair.forEach(word => {
    combineTheWords += word;
  });
});

console.log(combineTheWords);