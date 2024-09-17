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

// Array 1: Length 10
const arr4 = [-5, 3.7, -2, 4, 0.5, -8, 12, 6.1, 9, -0.2];

// Array 2: Length 5
const arr5 = [7.3, -3, 1.1, 0, -1];

// Array 3: Length 2
const arr6 = [-4.5, 2.9];


function smallestTwoNumbers(numArray) {
  if (numArray.length < 2) {
    return "Array must have two elements.";
  }

  let small1 = numArray[0];
  let small2 = numArray[0];

  //get the smallest number
  // use a HOAM forEach
  // get the second smallest number\

  numArray.forEach(val => {
    if (val <= small1 && val < small1) {
      small2 = small1;
      small1 = val;
      
    } else if (val > small1 && val <= small2) {
      small2 = val;
    }
  });
  
  let smallest = [small1, small2];
  return smallest;
}

console.log(smallestTwoNumbers(arr4))
console.log(smallestTwoNumbers(arr5))
console.log(smallestTwoNumbers(arr6))