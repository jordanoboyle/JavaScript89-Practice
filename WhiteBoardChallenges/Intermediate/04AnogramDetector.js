// Description:
// Write a function findAnagrams that takes a word and an array of words. The function should return an array of all words from the input array that are anagrams of the given word.

const word1 = "listen";
const wordsArray1 = ["enlist", "google", "inlets", "banana"];
// const result = findAnagrams(word, wordsArray);
// console.log(result);

// // ["enlist", "inlets"]

function detectAnogram(word, wordsArray) {
  const sortTheWord = w => {
    let sortedWord = w.split("").sort().join();
    return sortedWord;
  };
  return sortTheWord(word);
}

console.log(detectAnogram(word1, wordsArray1));