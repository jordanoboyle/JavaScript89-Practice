// Set 4 Write an array, read items from the array, and add new items to existing array. 

// # 1 Create an array to store 3 words. Then add two more words to the array and print the array on one line.

let words = ["guitar", "flute", "drums"];
words.push("piano");
words.push("barrels");
console.log(words); 

console.log("----------");
// # 2 Create an array to store 4 letters. Then change the second letter to a number and print the array on one line.
let letters = ['a', 'b', 'c', 'd'];
letters[1]  = 2;
console.log(letters)
console.log(letters[1])

//two ways
let browserType = "mozilla";
console.log(browserType);
browserType = browserType.replace("moz", "van");
console.log(browserType);

console.log("---------------");
//other option
const browserType2 = "mozilla";  // IMPORTANT TO REMEMBER CONST WILL NOT ALLOW THINGS TO CHANGE
const update = browserType2.replace("moz", "van");
console.log(update);
console.log(browserType2);

console.log("---------------");
// # 3 Create an array to store 5 numbers. Then print out each number on separate lines with a while loop.
const numbers = [1, 2, 3, 4, 5];
var i = 0;
while (i < numbers.length)  {
  console.log(numbers[i]);
  i += 1;
}
console.log("---------------");

const numbers2 = [5, 6, 7, 8, 9,];
var i = 0;
while (i < numbers2.length) {
  console.log(numbers2[i]);
  i += 1;
}
console.log("---------------");

const numbers3 = [10, 11, 12, 13, 14];
var n = 0;
while (n < numbers3.length) {
  console.log(numbers3[n]);
  n += 1;
}
console.log("---------------");

// # 4 Create an array to store 1 number. Then add three more numbers to the array and print the array on one line.
let nums1 = [1];
var i = 0;
while (i < 4) {
  nums1.push(i);
  i += 1;
}
console.log(nums1)

console.log("---------------");
// # 5 Create an array to store 3 strings with lower case letters. Then change the third string to have all capital letters and print the array on one line.
let theseStrings = ["this", "can", "be", "fun", "sometimes"];
theseStrings[4] = theseStrings[4].toUpperCase();
console.log(theseStrings);
theseStrings[0] = theseStrings[0].toUpperCase();
console.log(theseStrings);
theseStrings[1] = theseStrings[1].toUpperCase();
console.log(theseStrings);
theseStrings[2] = theseStrings[2].toUpperCase();
console.log(theseStrings);
theseStrings[3] = theseStrings[3].toUpperCase();
console.log(theseStrings);

console.log("---------------");

// # 6 Create an array to store 3 names. Then print out each name on separate lines with a while loop.
let theseNames = ["Jackline", "Perry", "Jennifer"]
var i = 0
while (i < theseNames.length) {
  console.log(theseNames[i]);
  i += 1;
}
var n = 0;
while (n < theseNames.length) {
  console.log(theseNames[n]);
  n += 1;
}

console.log("---------------");

// # 7 Create an array to store 2 strings. Then add one string to the array and print the array on one line.

let newStrings = ["here is a ", "new set of"];
newStrings.push("strings made by me");
console.log(newStrings);

//with a constant var
const newLines = ["this is", "a constant", "variable"];
let update1 = newLines.push("but if you assign an update var it can");
console.log(newLines);

console.log("---------------");

// # 8 Create an array to store 5 numbers. Then change the first number to 10 times its original value and print the array on one line.
let theseNumbers = [1, 2, 3, 4, 5]
var i = 0
while (i < theseNumbers.length) {
  theseNumbers[i] = theseNumbers[i] * 10;
  i += 1;
}
console.log(theseNumbers)

console.log("---------------");

// # 9 Create an array to store 2 numbers. Then print out each number on separate lines with a while loop.
let newNumbers = [1, 2, 3, 4];
var i = 0;
while (i < newNumbers.length) {
  console.log(newNumbers[i]);
  i += 1;
}
// # 10 Create an array to store names of 3 different countries. Then add one more country and print the array one line.
let theseCountries = ["Ghana", "Ethiopia", "Egypt"];
theseCountries.push("Morroco");
console.log(theseCountries.join(", "));
