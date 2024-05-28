function spaceBar() {
  let space = "";
  for(let i = 0; i < 20; i++) {
    space += "%";
  }
  return console.log(space);
}

// Here let's cover different function syntax and ability (each has applicable aspects)

//Function Declaration
function greetOne(name) {
  console.log(`Hello, ${name}. How are you?`);
}

greetOne("Jimmy");
spaceBar();

//Function Expression
let greetTwo = function(name) {
  console.log(`Hello, ${name}. What's going on with you?`);
};
greetTwo('Bethany');
greetTwo('putting all this here lets you know how crazy strings are');
spaceBar();

// ARROW Functions were introduced in ES6 (2015 update). 

let balance = (balanceNum) => {
  if (balanceNum === Number(`${balanceNum}.00`)) {
    console.log(`Your balance is: ${balanceNum}.00`);
  } else {
    console.log(`Your balance is: ${balanceNum}`);
  }
};
balance(687);
balance(500.56);
balance(45.45);
balance(4);
balance(30000);
spaceBar();
/* if the function only has one parameter it can be shorters */
let goodbye = name => console.log(`Goodbye for today ${name}.`);

goodbye("Frank");
goodbye("Jimmy Beam");
spaceBar();
//THERE IS A FUNCTION TYPE CALLED Imediately Invoked Function Expression...I will cover this in it's own section

//Functions as Object Methods (functions within an object are called methods)

let dogOne = {
  name: "Harley",
  sayHello: function() {
    console.log(`Hello, ${this.name}.`);
  },
  goodDog: function() {
    console.log(`${this.name}, you are a good dog.`);
  }
};
console.log(dogOne.name);
dogOne.sayHello();
dogOne.goodDog();
dogOne["name"] = "Sherlock";
dogOne.sayHello();
dogOne.goodDog();

dogOne.treat = function() {
  console.log(`${this.name}, would you like a treat?`);
}; // here we added a function to the object
console.log(dogOne);
dogOne.treat();  //don' forget the parantheses
spaceBar();

/* Higher Order Functions take other functions as arguments or return functions. */

function sayHello() {
  return function () {
    console.log("Here we will say hello!");
  };
}
let hello = sayHello();  //here we are assigning the return of the function to what hello will do. Althought you need parantheses. 
hello();
// take a look
let thisVariableIsNotRelatedToThisFunctionAtAll = sayHello();
thisVariableIsNotRelatedToThisFunctionAtAll();
spaceBar();

// You can combine Objects and Functions to create more complex structures:
let calculator = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  },
  divide: function(a, b) {
    if (b !== 0) {
      return a / b;
    } else {
      return "Division by zero is not allowed.";
    }
  },
  multiply: function(a, b) {
    return a * b;
  },
};

console.log(calculator.add(6, 5)); //=> 11
console.log(calculator.subtract(4, 8)); // => -4
console.log(calculator.multiply(3, 4)); // => 12
console.log(calculator.divide(10, 0)); // => Division by zero no allowed
console.log(calculator.divide(10, 2)); // => 5


/* General Summary: 
Functions: Used to encapsulate reusable code blocks:
Creating--> using function declarations, expressions, or arro functions
Executing--> by calling the function with parantheses
Methods--> functions stored as object properties
Higher-Order Functions--> Functions that take and return other functions
*/
