function spaceBar() {
  let spaceBar = "";

  for (let i = 0; i <= 19; i++) {
    spaceBar += "%";
  }
  console.log(spaceBar);
}

// 5) Write a function that takes in an array of strings and joins them together to make a single string separated by commas.

// Array 1: Names of fruits
const arr1 = ['apple', 'banana', 'cherry', 'date', 'fig', 'grape', 'kiwi'];

// Array 2: Names of animals
const arr2 = ['lion', 'tiger', 'elephant', 'giraffe', 'zebra', 'bear', 'wolf', 'fox', 'deer'];

// Array 3: Random adjectives
const arr3 = ['quick', 'lazy', 'happy', 'sad', 'brave', 'calm', 'bright', 'dark', 'silent', 'loud'];


function joinStringsWithCommas(stringArray) {
  //join the strings from the array (.join())
  // console.log(typeof stringArray.join(','));  THIS IS THE SHORT WAY
  let commaString = "";

  stringArray.forEach(word => {
    if (stringArray.indexOf(word) == stringArray.length - 1) {
      commaString += word;
    } else {
      commaString += word + ", ";
    }
  });
  
  return commaString;
} 
console.log(joinStringsWithCommas(arr1));
console.log(joinStringsWithCommas(arr2));
console.log(joinStringsWithCommas(arr3));

spaceBar();

// 7) Write a function that takes in an array of numbers and returns the two smallest numbers.
