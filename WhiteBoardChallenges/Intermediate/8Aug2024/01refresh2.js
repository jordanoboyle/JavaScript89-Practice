function spaceBar() {
  let space = "";
  for (let i = 0; i < 20; i++) {
    space += "%";
  }
  return console.log(space);
}

// 5) Write a function that takes in an array of strings and joins them together to make a single string separated by commas.
let joinThese = ["I", "am", "going", "to", "join", "these", "strings", "."];

function joinStringArray(strings) {
  let joinedString = "";
  strings.forEach(element => {
    if (strings.indexOf(element) === strings.length - 1) {
      joinedString += element;
    } else {
      joinedString += element + ", ";
    }
  });
  return console.log(joinedString);
}

joinStringArray(joinThese);

spaceBar();

// 6) Write a function that takes in an array of numbers and returns the product of all the numbers (each number multiplied by each other).
let findProduct = [1, 2, 3, 4, 5]; //=> 96

function getProductMath(numArray) {
  let i = 0;
  let product = 1;
  do {
    product *= numArray[i];
    i ++;
  }
  while (i < findProduct.length);

  return console.log(product);
}
getProductMath(findProduct);
spaceBar();
// 7) Write a function that takes in an array of numbers and returns the two smallest numbers.

// 8) Write a function that takes in an array of numbers and returns a count of how many zeros are in the array.

// 9) Write a function that takes in an array of numbers and returns true if all the numbers are bigger than 10, otherwise returns false.

// 10) Write a function that takes in an array of words and returns the number of times the letter “a” appeared in total.