// Description:
// Write a function findAnagrams that takes a word and an array of words. The function should return an array of all words from the input array that are anagrams of the given word.

// const word = "listen";
// const wordsArray = ["enlist", "google", "inlets", "banana"];
// const result = findAnagrams(word, wordsArray);
// console.log(result);

// // ["enlist", "inlets"]

//write the function
//loop through the array and print results
// loop through the array and create object for each that records the number of letters
// log the results from above to the console.
// create a log for the original word and log this to console as well.
//use this data collection to compare the objects and see if they are identical, if so, log true
// push elements that create identical objects into their own array and return this array 
 

 //BELOW WE ARE USING  Array.prototype.reduce; UNDER THE HOOD STILL A LOOP, BUT MORE ELEGANT THAN WRITING OUT ENTIRE LOOP TO ACCOMPLISH SAME THING (EXAMPLE OF THAT ON LINE 32)
const word = "listen";
const wordsArray = ["enlist", "google", "inlets", "banana"];

function detectAnagogram(word, comparisonArray) {
  let source = word.split("").reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});

  let anaObjects = [];

  comparisonArray.forEach(element => {
    let object = {};
    element.split("").forEach(letter => {
      if (object[letter] === undefined) {
        object[letter] = 1;
      } else {
        object[letter] += 1;
      }
    });
    anaObjects.push(object);
  });

  let anagrams = [];
  let index = 0;
  anaObjects.forEach(obj => {
    let isAna = true;
    let index2 = 0;
    for (let [key, value] of Object.entries(obj)) {
      if (obj[key] !== source[key]) {
        isAna = false;
        break;
      } else {
        index2 += 1;
      }
    }
    if (isAna) {
      anagrams.push(comparisonArray[index]);
    }
    index += 1;
  });

  return anagrams;
}

console.log("My clever solution that is slow, but does have use case theory in it.");
console.log(detectAnagogram(word, wordsArray));



// let wordTwo = "thisisastring"
// let source = wordTwo.split("").reduce((acc, char) => {
//   acc[char] = (acc[char] || 0) + 1;
//   return acc;
// }, {});
// console.log(source)

// let obOne = {"h": 2, "j": 3};
// let obTwo = {"h": 2, "j": 3};

// console.log(obOne === obTwo);


//THIS IS A BETTER METHOD. ABOVE IS CLEVER, AND COULD BE USEFUL IN CERTAIN SPECIFIC USE CASES, BUT IT IS WILDY BAD IN TIME COMPLEXITY (TECHNICALLY IT IS 3N^4, BUT WE CAN MODIFY THIS USING THE SORT METHOD!)
const wordTwo = "listen";
const wordsArrayTwo = ["enlist", "google", "inlets", "banana"]; //=> enlist, inlets
const word1 = "evil";
const wordsArray1 = ["vile", "live", "veil", "villain", "levi"]; //==> vile, live, veil, levi
const word2 = "conversation";
const wordsArray2 = ["voices rant on", "consternation", "racon", "serotonin", "conserve a ton"]; // ==> no anagrams

function detectAnagramTwo(wordToCompare, wordsArray) {
  //we need a helper function here
  const sortedWord = (word) => word.split("").sort().join();

  let compString = sortedWord(wordToCompare);
  let anagrams = [];

  wordsArray.forEach(w => {
    if (sortedWord(w) === compString) {
      anagrams.push(w);
    }
  });

  if (anagrams.length > 0) {
    return anagrams;
  } else {
    return "There are no anagrams in the given dataset.";
  }
}

console.log("USING HELPER FUNCTION sortWord to compare words");
console.log(detectAnagramTwo(wordTwo, wordsArrayTwo));
console.log(detectAnagramTwo(word1, wordsArray1));
console.log(detectAnagramTwo(word2, wordsArray2));

// You can also use the .filter() method here as well.  Let's build that real quick for some practice

function detectAnagramThree (wordToCompare, wordsArray) {
  // build our little helper function

  const sortWord = (word) => word.split("").sort().join();
  const sortedWord = sortWord(wordToCompare);

  let anagrams = wordsArray.filter(w => sortWord(w) === sortedWord);

  if (anagrams.length > 0) {
    return anagrams;
  } else {
    return "This dataset does not have an anagram in it.";
  }
}

console.log("Uses helper function, and .filter() method");
console.log(detectAnagramThree(wordTwo, wordsArrayTwo));
console.log(detectAnagramThree(word1, wordsArray1));
console.log(detectAnagramThree(word2, wordsArray2));