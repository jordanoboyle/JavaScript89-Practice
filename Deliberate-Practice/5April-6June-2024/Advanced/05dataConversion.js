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

spaceBar();


// 5. Convert a hash into an array of hashes using the keys from each hash as the :id key in each of the array's hashes.
// For example, {321 => {name: "Alice", age: 31}, 322 => {name: "Maria", age: 27}} becomes [{id: 321, name: "Alice", age: 31}, {id: 322, name: "Maria", age: 27}].
let people = {321: {name: "Alice", age: 31}, 322: {name: "Maria", age: 27}};
let peopleArray = [];

Object.entries(people).forEach(([key, value]) => {
  value.id = key;
  peopleArray.push(value);
});

console.log(peopleArray);
spaceBar();

// 6. Convert an array of strings into a hash with keys for each string in the array and values for the number of times the string appears in the array.
// For example, ["do", "or", "do", "not"] becomes {"do" => 2, "or" => 1, "not" => 1}.
let words = ["do", "or", "do", "not"];
let wordsObject = {};

for (let i = 0; i < words.length; i++) {
  if (wordsObject[words[i]] === undefined) {
    wordsObject[words[i]] = 1;
  } else {
    wordsObject[words[i]] += 1;
  }
}
console.log(wordsObject);
spaceBar();

// 7. Convert a hash into a flat array containing all the hash’s keys and values.
// For example, {"a" => 1, "b" => 2, "c" => 3, "d" => 4} becomes ["a", 1, "b", 2, "c", 3, "d", 4].
let lettersNumbers = {"a": 1, "b": 2, "c": 3, "d": 4};
let letsNumsArray = [];

Object.entries(lettersNumbers).forEach(([key, value]) => {
  letsNumsArray.push(key);
  letsNumsArray.push(value);
});

console.log(letsNumsArray);

spaceBar();

// 8. Combine data from a hash with names and prices and an array of hashes with names, colors, and weights to make a new hash.
// For example, {"chair" => 75, "book" => 15} and [{name: "chair", color: "red", weight: 10}, {name: "book", color: "black", weight: 1}] becomes {"chair" => {price: 75, color: "red", weight: 10}, "book" => {price: 15, color: "black", weight: 1}}.
let itemSpecs = [{name: "chair", color: "red", weight: 10}, {name: "book", color: "black", weight: 1}];
let thingPrice = {"chair": 75, "book": 15};
let itemSpecObject = {};

let i = 0;
Object.entries(thingPrice).forEach(([key, value]) => {
  itemSpecs[i].price = value;
  delete itemSpecs[i].name;
  itemSpecObject[key] = itemSpecs[i];
  i++;
})
console.log(itemSpecObject);

spaceBar();



// 9. Convert an array of hashes into a hash of arrays, using the author as keys and the titles as values.
// For example, [{author: "Jeff Smith", title: "Bone"}, {author: "George Orwell", title: "1984"}, {author: "Jeff Smith", title: "RASL"}] becomes {"Jeff Smith" => ["Bone", "RASL"], "George Orwell" => ["1984"]}.
let writerBook = [{author: "Jeff Smith", title: "Bone"}, {author: "George Orwell", title: "1984"}, {author: "Jeff Smith", title: "RASL"}];
let authors = {};

writerBook.forEach((book) => {
  if (authors[book.author] === undefined) {
    authors[book.author] = [book.title];
  } else {
    authors[book.author].push(book.title);
  }
});
console.log(authors);


// 10. Given a hash, create a new hash that has the keys and values switched.
// For example, {"a" => 1, "b" => 2, "c" => 3} becomes {1 => "a", 2 => "b", 3 => "c"}.
let letterNumberHash = {a: 1, b: 2, c: 3};
let reverseIt = {};

Object.entries(letterNumberHash).forEach(([key, value]) => {
  reverseIt[value] = key;
});
console.log(reverseIt);