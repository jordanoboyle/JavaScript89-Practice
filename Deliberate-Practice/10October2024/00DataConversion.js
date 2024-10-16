// 3. Convert a string into a hash with keys for each letter in the string and values for the number of times the letter appears in the string.
// For example, "bookkeeper" becomes {"b" => 1, "o" => 2, "k" => 2, "e" => 3, "p" => 1, "r" => 1}.

function convertHashStringLetters(strWord) {
  let compForCases = strWord.toLowerCase();
  let letterCounts = {};

  compForCases.split('').forEach(letter => {
    if (letterCounts[letter] === undefined) {
      letterCounts[letter] = 1;
    } else {
      letterCounts[letter] += 1;
    }
  })

  return letterCounts;
}

console.log(convertHashStringLetters("bookkeeper"));