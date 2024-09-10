// 1: Reverse a String: Write a program that takes a string as input and outputs the string in reverse order. For example, if the input is "hello", the output should be "olleh".  

const str1 = "This will be in reverse";

function reverseString(str) {
  let outputString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    outputString += str[i];
  }
  return outputString;  
}

console.log(reverseString(str1));

