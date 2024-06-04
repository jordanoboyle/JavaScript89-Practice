// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like the and of.

// function titleCase(str) {
//   return str;
// }

// titleCase("I'm a little tea pot");

let sentence = "HERE IS MY HANDLE HERE IS MY SPOUT";

console.log(sentence.split(" "));

let splitSentence = sentence.split(" "); 

let capitalizeSplit = [];
for (let i = 0; i < splitSentence.length; i++) {
  let word = splitSentence[i].toLowerCase();
  capitalizeSplit.push(
    word.replace(word[0], word[0].toUpperCase())
  );
}
console.log(typeof(capitalizeSplit.join(" ")));

// let word = "hElLo";
// console.log(word.replace(word[0], word[0].toUpperCase()));

/* split the sentence
capitalize the first letter of each word
join the sentence back together  */