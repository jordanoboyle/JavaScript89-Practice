// 1. Write a function that accepts a string and returns whether it’s a palindrome.

// The input must be a string, but may contain any form of text including special symbols and numbers. 

// Hint: need to use high order array methods to make sure everything is compact. 

const testCase1 = "madam";
const testCase2 = "A man a plan a canal Panama";
const testCase3 = "1@#$@1";
const testCase4 = "No 'x' in Nixon";
const testCase5 = "OpenAI rocks!";


//This is one way to do it with a loop 
function isPalindrome(stringToTest) {
  let cleanedString = stringToTest.replace(/'/g, "");

  let comparableStr = cleanedString.split(" ").join("").toLowerCase();
  
  
  let LP = comparableStr.length - 1;
  let isPalin = true;

  for (let i = 0; i < LP; i++) {
    if (comparableStr[i] !== comparableStr[LP]) {
      isPalin = false;
      break;
    } else {
      LP--;
    }
  }
  return isPalin;
}

console.log(isPalindrome(testCase1));
console.log(isPalindrome(testCase2));
console.log(isPalindrome(testCase3));
console.log(isPalindrome(testCase4));
console.log(isPalindrome(testCase5));


console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%");
console.log("This is a second option with high order methods");

function isPalindrome2(stringToTest) {
  let cleanedString = stringToTest.replace(/'/g, "").split(" ").join("").toLowerCase();

  // console.log(cleanedString);
  // console.log("The reverse", cleanedString.split("").reverse().join(""));
  
  return cleanedString === cleanedString.split("").reverse().join("");
}

console.log(isPalindrome2(testCase1));
console.log(isPalindrome2(testCase2));
console.log(isPalindrome2(testCase3));
console.log(isPalindrome2(testCase4));
console.log(isPalindrome2(testCase5));