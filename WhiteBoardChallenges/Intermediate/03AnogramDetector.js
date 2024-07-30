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
 

const word = "listen";
const wordsArray = ["enlist", "google", "inlets", "banana"];

function detectAnagogram(word, comparisonArray) {
  //BELOW WE ARE USING  Array.prototype.reduce; UNDER THE HOOD STILL A LOOP, BUT MORE ELEGANT THAN WRITING OUT ENTIRE LOOP TO ACCOMPLISH SAME THING (EXAMPLE OF THAT ON LINE 32)
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

  
  return [anaObjects, source];
}

console.log(detectAnagogram(word, wordsArray));



// let wordTwo = "thisisastring"
// let source = wordTwo.split("").reduce((acc, char) => {
//   acc[char] = (acc[char] || 0) + 1;
//   return acc;
// }, {});
// console.log(source)

let obOne = {"h": 2, "j": 3};
let obTwo = {"h": 2, "j": 3};

console.log(obOne === obTwo);