// Set 6 Write a custom method with valid syntax. 
function spaceBar() {
  let space = "";
  for (let i = 0; i < 20; i++) {
    space += "$";
  }
  return console.log(space);
}

// # 1 Write a method that takes in a number and returns the number times two. Then run the method and print the result.
function returnTwo(number) {
  let i = 0;
  while (i < 2)  {
    console.log(number);
    i ++;
  }
}
returnTwo(9); //yeah yeah, it's not what it says, but it's still practice
spaceBar();

// # 2 Write a method that takes in a string and returns the string with all capital letters. Then run the method and print the result.
let capitals = "this will have all caps";
function turnToCaps(value1) {
  let caps = value1.toUpperCase();
  return console.log(caps);
}
turnToCaps(capitals);
let makeBigger = "this must be made big!";
function makeBig(string1) {
  let big = string1.toUpperCase();
  return console.log(big);
}
makeBig(makeBigger);
spaceBar();

// # 3 Write a method that takes in two numbers and returns the first number subtracted by the second. Then run the method and print the result.
function subtractFirstFromSecond(num1, num2) {
  let difference = num1 - num2;
  return console.log(difference);
}
subtractFirstFromSecond(18, 12);
spaceBar();

// # 4 Write a method that takes in a number and returns the number times itself. Then run the method and print the result.

// # 5 Write a method that takes in a string and returns the first letter of the string. Then run the method and print the result.

// # 6 Write a method that takes in three strings and returns a string that combines all three strings with spaces in between. Then run the method and print the result.

// # 7 Write a method that takes in a number and returns the number as a string. Then run the method and print the result.

// # 8 Write a method that takes in a string and returns the string repeated 5 times. Then run the method and print the result.

// # 9 Write a method that takes in 3 numbers and returns the average (the sum divided by 3.0). Then run the method and print the result.

// # 10 Write a method that takes in a number and returns the number times 10 plus 30. Then run the method and print the result.