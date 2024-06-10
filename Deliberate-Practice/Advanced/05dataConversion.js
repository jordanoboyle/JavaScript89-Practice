function spaceBar () {
  let space = "";
  for (let i = 0; i < 21; i++) {
    space += "%";
  }
  return console.log(space);
}


// 1. Convert an array of arrays into a hash.
// For example, [[1, 3], [8, 9], [2, 16]] becomes {1 => 3, 8 => 9, 2 => 16}.co 
let doubleArrays = [[1, 3], [8, 9], [2, 16]];
let numbersObject = {};

doubleArrays.forEach(array => {
  let key = array[0];
  let value = array[1];
  numbersObject[key] = value;
});
console.log(numbersObject);

spaceBar();
// 2. Convert an array of hashes into a hash using the :id key from the array's hashes as the keys in the new hash.
// For example, [{id: 1, color: "blue", price: 32}, {id: 2, color: "red", price: 12}] becomes {1 => {id: 1, color: "blue", price: 32}, 2 => {id: 2, color: "red", price: 12}}.
let itemsObject = [{id: 1, color: "blue", price: 32}, {id: 2, color: "red", price: 12}];
let assignId = {};

itemsObject.forEach(item => {
  assignId[item.id] = item;
});
console.log(assignId);

spaceBar();
// 3. Convert a string into a hash with keys for each letter in the string and values for the number of times the letter appears in the string.
// For example, "bookkeeper" becomes {"b" => 1, "o" => 2, "k" => 2, "e" => 3, "p" => 1, "r" => 1}.
let booker = "bookkeeper";
let countLetters = {};

booker.split("").forEach(letter => {
  if (countLetters[letter] === undefined) {
    countLetters[letter] = 1;
  } else {
    countLetters[letter] += 1;
  }
});
console.log(countLetters);

spaceBar();

// 4. Convert a hash into an array of arrays.
// For example, {"chair" => 100, "book" => 14} becomes [["chair", 100], ["book", 14]].
let things = {"chair": 100, "book": 14};
let itemArray = [];

Object.entries(things).forEach(([key, value]) => {
  itemArray.push(key, value);
});
console.log(itemArray);



// 5. Convert a hash into an array of hashes using the keys from each hash as the :id key in each of the array's hashes.
// For example, {321 => {name: "Alice", age: 31}, 322 => {name: "Maria", age: 27}} becomes [{id: 321, name: "Alice", age: 31}, {id: 322, name: "Maria", age: 27}].