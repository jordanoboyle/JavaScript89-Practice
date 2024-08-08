// SET 4 CONVERT DATA FROM ONE DATA TYPE TO ANOTHER. 

function spaceBar() {
  let space = "%";
  for (let i = 0; i < 20; i++) {
    space += "%";
  }
  return console.log(space);
}

// 1. Convert an array of arrays into a hash.
// For example, [[1, 3], [8, 9], [2, 16]] becomes {1 => 3, 8 => 9, 2 => 16}.co 

const nestedNumArray = [[1, 3], [8, 9], [2, 16]];

function convertedNestToHash(nestArray) {
  let convert = {};
  nestArray.forEach(arrMini => {
    let key = arrMini[0];
    let value = arrMini[1];
    convert[key] = value;
  });
  return convert;
}
console.log(convertedNestToHash(nestedNumArray));
spaceBar();

// 2. Convert an array of hashes into a hash using the :id key from the array's hashes as the keys in the new hash.
// For example, [{id: 1, color: "blue", price: 32}, {id: 2, color: "red", price: 12}, {id: 3, color: "green", price: 13}] becomes {1 => {id: 1, color: "blue", price: 32}, 2 => {id: 2, color: "red", price: 12}, 3 => {id: 3, color: "green", price: 13}}.
const itemColorPrice = [{id: 1, color: "blue", price: 32}, {id: 2, color: "red", price: 12}, {id: 3, color: "green", price: 13}];

function addIdNumbers(arrayHashes) {
  let assignIds = {};

  let i = 0;
  while (i < arrayHashes.length) {
    assignIds[arrayHashes[i].id] = arrayHashes[i];
    i += 1;
  }
  return assignIds;
} 
console.log(addIdNumbers(itemColorPrice));

//ANOTHER OPTION IS TO CREATE A MAP WITHIN JS IN ORDER TO NOT HAVE THE KEYS BE STRINGS (KEYS ARE ALWAYS STRINGS)
const itemColorPrice1 = [{id: 1, color: "blue", price: 32}, {id: 2, color: "red", price: 12}, {id: 3, color: "green", price: 13}];

function addIdNumbers1(arrayHashes) {
  let assignIds = new Map();

  let i = 0;
  //below is where we will be assigning the map values and keys. When we are creating a new map we use new Map() and to set values within we use .set(mapKey, mapValue)
  while (i < arrayHashes.length) {
    assignIds.set(arrayHashes[i].id, arrayHashes[i]);
    i += 1;
  }
  return assignIds;
}
console.log(addIdNumbers1(itemColorPrice1));
spaceBar();

// 3. Convert a string into a hash with keys for each letter in the string and values for the number of times the letter appears in the string.
// For example, "bookkeeper" becomes {"b" => 1, "o" => 2, "k" => 2, "e" => 3, "p" => 1, "r" => 1}.
const word = "bookkeeper";
const word1 = "Ultimately it will count the spaces as well"

function hashLettersInWord(wordInput) {
  let letterList = wordInput.split("");
  let wordHash = {};

  for (let i = 0; i < letterList.length; i++) {
    if (wordHash[letterList[i]] === undefined) {
      wordHash[letterList[i]] = 1;
    } else {
      wordHash[letterList[i]] += 1;
    }
  }
  return wordHash;
}

console.log(hashLettersInWord(word));
console.log(hashLettersInWord(word1));
spaceBar();

// 4. Convert a hash into an array of arrays.
// For example, {"chair" => 100, "book" => 14, "desk" => 98, "footstool" => 133} becomes [["chair", 100], ["book", 14], ["desk", 98], ["footstool", 133]].
let itemsHash = {"chair": 100, "book": 14, "desk": 98, "footstool": 133};

//THIS IS THE DRIEST I HAVE EVER MADE FOR THIS PROBLEM FROM MEMORY.
function hashToArray(hashedItems) {
  let itemsArray = [];

  Object.entries(hashedItems).forEach(([key, value]) => {
    itemsArray.push([key, value]);
  });
  return itemsArray;
}
console.log(hashToArray(itemsHash));


// 5. Convert a hash into an array of hashes using the keys from each hash as the :id key in each of the array's hashes.
// For example, {321 => {name: "Alice", age: 31}, 322 => {name: "Maria", age: 27}} becomes [{id: 321, name: "Alice", age: 31}, {id: 322, name: "Maria", age: 27}].

// 6. Convert an array of strings into a hash with keys for each string in the array and values for the number of times the string appears in the array.
// For example, ["do", "or", "do", "not"] becomes {"do" => 2, "or" => 1, "not" => 1}.

// 7. Convert a hash into a flat array containing all the hash’s keys and values.
// For example, {"a" => 1, "b" => 2, "c" => 3, "d" => 4} becomes ["a", 1, "b", 2, "c", 3, "d", 4].

// 8. Combine data from a hash with names and prices and an array of hashes with names, colors, and weights to make a new hash.
// For example, {"chair" => 75, "book" => 15} and [{name: "chair", color: "red", weight: 10}, {name: "book", color: "black", weight: 1}] becomes {"chair" => {price: 75, color: "red", weight: 10}, "book" => {price: 15, color: "black", weight: 1}}.

// 9. Convert an array of hashes into a hash of arrays, using the author as keys and the titles as values.
// For example, [{author: "Jeff Smith", title: "Bone"}, {author: "George Orwell", title: "1984"}, {author: "Jeff Smith", title: "RASL"}] becomes {"Jeff Smith" => ["Bone", "RASL"], "George Orwell" => ["1984"]}.

// 10. Given a hash, create a new hash that has the keys and values switched.
// For example, {"a" => 1, "b" => 2, "c" => 3} becomes {1 => "a", 2 => "b", 3 => "c"}.