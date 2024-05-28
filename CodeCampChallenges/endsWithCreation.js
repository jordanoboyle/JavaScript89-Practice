//Create a method that performs the same action as ES6 .endsWith() method

let stringOne = "bastian";
let target = "n";

console.log(stringOne.split(''));
console.log(stringOne.split('').slice(-(target.length)));

let answer = false;

if (stringOne.split('').slice(-(target.length)).join('') === target) {
  answer = true;
} else { 
  answer = false;
}
console.log(answer);

// Just wrap this in function and it is then what it needs to be