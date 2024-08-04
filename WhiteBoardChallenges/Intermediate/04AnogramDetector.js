// Description:
// Write a function findAnagrams that takes a word and an array of words. The function should return an array of all words from the input array that are anagrams of the given word.

const word1 = "listen";
const wordsArray1 = ["enlist", "google", "inlets", "banana"];
const word2 = "listen";
const wordsArray2 = ["gemini", "google", "results", "banana"];
// const result = findAnagrams(word, wordsArray);
// console.log(result);

// // ["enlist", "inlets"]

function detectAnogram(word, wordsArray) {
  const sortTheWord = w => {
    let sortedWord = w.split("").sort().join();
    return sortedWord;
  };
  const sorted = sortTheWord(word);
  let isAnogram = [];

  wordsArray.forEach(w => {
    if (sortTheWord(w) === sorted) {
      isAnogram.push(w);
    }
  });

  if (isAnogram.length > 0) {
    return isAnogram;
  } else {
    return "There are no anograms in the array.";
  }
}

console.log(detectAnogram(word1, wordsArray1));
console.log(detectAnogram(word2, wordsArray2));

