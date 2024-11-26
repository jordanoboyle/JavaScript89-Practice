const { values } = require("lodash");

function spaceBar() {
  let space = "";
  for (let i = 0; i < 20; i ++) {
    space += "$";
  }
  return console.log(space);
}

// 5. Group an array of hashes by multiple keys.
// Example: [{type: "fruit", color: "red", name: "apple"}, {type: "vegetable", color: "green", name: "carrot"}, {type: "fruit", color: "yellow", name: "banana"}] by type and color becomes {fruit: {red: [{name: "apple"}], yellow: [{name: "banana"}]}, vegetable: {green: [{name: "carrot"}]}}.
const items = [
  { type: "fruit", color: "red", name: "apple" },
  { type: "vegetable", color: "green", name: "carrot" },
  { type: "fruit", color: "yellow", name: "banana" },
  { type: "fruit", color: "red", name: "cherry" },
  { type: "vegetable", color: "red", name: "beet" },
  { type: "vegetable", color: "green", name: "lettuce" },
  { type: "fruit", color: "yellow", name: "mango" },
  { type: "fruit", color: "red", name: "strawberry" },
  { type: "grain", color: "brown", name: "rice" },
  { type: "grain", color: "yellow", name: "corn" },
  { type: "grain", color: "brown", name: "wheat" }
];
function groupArrByTypeKey(arrWithType) {
  let typeHash = {};

  arrWithType.forEach(item => {
    let type = item.type;
    let color = item.color;
    let name = item.name;

    if (!typeHash[type]) {
      typeHash[type] = {};
    }

    if (!typeHash[type][color]) {
      typeHash[type][color] = [];
    }

    typeHash[type][color].push({name: item.name});
  });

  return JSON.stringify(typeHash);
}

console.log(groupArrByTypeKey(items));

spaceBar();

// 4. Convert a nested hash into a flat array with each combination of keys and values.
// Example: {"a": {"b": 1, "c": 2}, "d": {"e": 3, "f": 4}} becomes ["a.b", 1, "a.c", 2, "d.e", 3, "d.f", 4].
const nestedHash = {
  a: {
    b: 1,
    c: 2
  },
  d: {
    e: 3,
    f: 4
  },
  g: {
    h: {
      i: 5,
      j: 6
    },
    k: 7
  }
};


function flattenNestedHash(obj, parentKey = "") {
  let result = [];

  for (let key in obj) {
    //create a new key by appending the current key to parent key
    let newKey = parentKey ? `${parentKey}.${key}` : key;

    if (typeof obj[key] === "object" && obj[key] !== null) {
      result = result.concat(flattenNestedHash(obj[key], newKey));
    } else {
      result.push(newKey, obj[key]);
    }
  }

  return result;
}

console.log(flattenNestedHash(nestedHash));

spaceBar();

//Always a bubble sort just for fun!
const positiveIntegers = [42, 7, 18, 95, 23, 56, 3, 89, 11, 60];
const mixedNumbers = [15, -3, 22, -8, 7, -42, 0, 25, -19, 4];
const decimals = [12.5, 47.3, 3.8, 15.2, 29.9, 88.1, 6.7, 19.4, 45.8, 72.6];




function bubbleSort(unsortedArr) {
  let sortedArr = unsortedArr;

  let n = sortedArr.length - 1;
  let swapped = true;

  while (swapped) {
    swapped = false;
    for (let i = 0; i < n; i++) {
      if (sortedArr[i] > sortedArr[i + 1]) {
        let temp = sortedArr[i];
        sortedArr[i] = sortedArr[i + 1];
        sortedArr[i + 1] = temp;
        
        swapped = true;
      }

    }
    n += 1;
  }
  return sortedArr;
}

console.log(bubbleSort(positiveIntegers));
console.log(bubbleSort(mixedNumbers));
console.log(bubbleSort(decimals));