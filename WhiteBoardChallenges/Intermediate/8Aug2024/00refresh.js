// Standard Technical:

function spaceBar() {
  let space = "";
  for (let i = 0; i < 20; i++) {
    space += "%";
  }
  return console.log(space);
}
spaceBar();
// 1) Write a function that takes in an array of numbers and returns its sum.

let basicNumArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];  //=>55
function findSum(numArray) {
  let sum = 0;
  numArray.forEach(number => {
    sum += number;
  });
  return console.log(sum);
}
console.log("First Method");
findSum(basicNumArray);

function findSumTwo(numArray) {
  let sum = 0;
  for (let i = 0; i < numArray.length; i++) {
    sum += numArray[i];
  }
  return console.log(sum);
}
findSumTwo(basicNumArray);
spaceBar();



// 2) Write a function that takes in an array of strings and returns the smallest string.
let basicStringArray = ["cat", "snake", "james", "soda can", "         ", "string"] //=> "cat"
let testOne = ["aaaaaaaa10", "aaaaaaaa10", "aaaaaaaa10", "aaaaa6"]; //=> aaaaa6

function findShortest(strArray) {
  let shortest = strArray[0];

  strArray.forEach(function(str) {
    if (str.length < shortest.length) {
      shortest = str;
    }
  });
  return console.log(shortest);
}

//method 2
function findShortestTwo(strArray) {
  let shortest = strArray[0];
  let index = 0;
  while(index < strArray.length) {
    if (strArray[index].length < shortest.length) {
      shortest = strArray[index];
    }
    index ++;
  }
  return console.log(shortest);
}

console.log("FIRST METHOD");
findShortest(basicStringArray);
findShortest(testOne);

console.log("SECOND METHOD");
findShortestTwo(basicStringArray);
findShortestTwo(testOne);

spaceBar();




// 3) Write a function that takes in an array of numbers and returns a new array with the numbers in reverse order.


// 4) Write a function that takes in an array of words and returns the number of words that begin with the letter “a”.

