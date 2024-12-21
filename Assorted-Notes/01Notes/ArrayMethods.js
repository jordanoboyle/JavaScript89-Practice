function spaceBar() {
  let space = "";
  for (let i = 0; i < 20; i++) {
    space += "%";
  }
  return console.log(space);
}

//using Array.isArray() to check if variable is array
const array = [1, 2, 3];
const notArray = "Hello, World!";

console.log(Array.isArray(array));
console.log(Array.isArray(notArray));
spaceBar();

// check if array is empty using .length
const emptyArray = [];
const nonEmptyArray = [1, 2, 3];

console.log(emptyArray.length === 0);
console.log(nonEmptyArray.length === 0);
spaceBar();

//check the length of an array using .length property
const arrayOne = [1, 2, 3, 4, 5];

console.log(arrayOne.length);
spaceBar();

//check if an Array Contains a specific ELement
const arrayTwo = [1, 2, 3, 4, 5];

console.log(arrayTwo.includes(3));
console.log(arrayTwo.includes(6));
spaceBar();

//find the specific index of element using .indexOf()
const arrayThree = [1, 2, 3, 4, 5];

console.log(arrayThree.indexOf(4)); // ==> 3
console.log(arrayThree.indexOf(6)); // ==> -1
console.log(arrayThree.indexOf(7));  // ==> -1 always returns negative 1 if the element is not present in the array
spaceBar();


// devise a function that can give you a great status of an array

function checkArrayStatus(arr) {
  if (!Array.isArray(arr)) {
    return "the var is not an array";
  }
  if (arr.length === 0) {
    return "The array is empty.";
  }

  const status = {
    length: arr.length,
    containsTen: arr.includes(10),
    firstElement: arr[0],
    lastElementh: arr[arr.length - 1],
    allGreaterThanTen: arr.every(num => num > 10)
  };
  return status;
}

const testArray = [10, 15, 20, 25];
const testArrayTwo = [45, 15, 20, 25, 51, 60];
const result = checkArrayStatus(testArray);
const resultTwo = checkArrayStatus(testArrayTwo);

console.log("first test:", result);
console.log("second test", resultTwo)



