import { spaceBar } from "../../Utilities/utils.js"

// 6. Convert an array of strings into a hash with keys for each string in the array and values for the number of times the string appears in the array.
// For example, ["do", "or", "do", "not", "do", "or", "do", "not"] becomes {"do" => 4, "or" => 2, "not" => 2}.

// Example Set 1
const strings1 = [
  "A", "b", "a", "C", "B", "a", "D", "A", "b", "c", 
  "D", "a", "B", "c", "b", "d", "C", "B", "A", "c"
];
// Expected Output:
// {
//   a: 6,
//   b: 6,
//   c: 5,
//   d: 3
// }

// Example Set 2
const strings2 = [
  "X", "y", "z", "x", "Y", "X", "Z", "x", "Y", "z",
  "X", "Z", "y", "X", "z", "Y", "x", "y", "Z", "X"
];
// Expected Output:
// {
//   x: 7,
//   y: 6,
//   z: 7
// }

// Example Set 3
const strings3 = [
  "M", "n", "O", "m", "N", "o", "M", "P", "n", "O",
  "m", "N", "p", "O", "M", "o", "P", "n", "M", "P"
];
// Expected Output:
// {
//   m: 6,
//   n: 5,
//   o: 5,
//   p: 4
// }


function countLetterTypes(letterString) {
  let letterTypes = {}

  letterString.forEach(letter => {
    let letterLower = letter.toLowerCase();
    
    if (letterTypes[letterLower] === undefined) {
      letterTypes[letterLower] = 1;
    } else {
      letterTypes[letterLower] += 1;
    }
  });

  return letterTypes;
}

console.log(countLetterTypes(strings1));
console.log(countLetterTypes(strings2));
console.log(countLetterTypes(strings3));


// 7. Convert a hash into a flat array containing all the hash’s keys and values.
// For example, {"a" => 1, "b" => 2, "c" => 3, "d" => 4, "e" => 5, "f" => 6} becomes ["a", 1, "b", 2, "c", 3, "d", 4, "e",  5, "f",  6].