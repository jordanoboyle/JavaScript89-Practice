// 6. Convert an array of strings into a hash with keys as the strings and values as the lengths of the strings.
// Example: ["apple", "banana", "cherry", "dragonfruit", "coconut"] becomes {"apple": 5, "banana": 6, "cherry": 6, "dragonfruit": 11, "coconut": 7}.

let stringArr = ["apple", "banana", "cherry", "dragonfruit", "coconut"];
let stringArr1 = ["kiwi", "grapefruit", "blueberry", "raspberry", "mango"];
let stringArr2 = ["strawberry", "pineapple", "blackberry", "watermelon", "fig"];
let stringArr3 = ["papaya", "peach", "pomegranate", "nectarine", "tangerine"];


function stringLengthObject(arr) {
  let lenObj = {};
  for (const str of arr) {
    if (lenObj[str] === undefined) {
      lenObj[str] = str.length;
    } else {
      continue;
    }
  }
  return lenObj;
}
console.log(stringLengthObject(stringArr));
console.log(stringLengthObject(stringArr1));
console.log(stringLengthObject(stringArr2));
console.log(stringLengthObject(stringArr3));

