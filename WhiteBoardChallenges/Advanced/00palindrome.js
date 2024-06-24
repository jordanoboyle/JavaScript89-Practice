// 1. Write a function that accepts a string and returns whether it’s a palindrome.

let palindrome = "Tacocat";
function isPalindrome(word) {
  let testAgainst = word.toLowerCase();
  let testee = "";
  for (let i = testAgainst.split("").length - 1; i >= 0; i--) {
    testee += testAgainst.split("")[i];
  }
  if (testee === testAgainst) {
    return "Palindrome positive";
  } else {
    return "Palindrome negative";
  }
}

console.log(isPalindrome(palindrome));

console.log(palindrome.toLowerCase().split(""));
