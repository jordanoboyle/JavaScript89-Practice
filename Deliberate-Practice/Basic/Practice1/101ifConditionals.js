// 1 Use a variable to store a number, then write a condition that prints 0 if the number is equal to 10, and prints -1 otherwise.

const numberOne = 20

if (numberOne < 10) {
  console.log("Less than 10");
} else {
  console.log("greater than 10");
}

// 2  Use a variable to store a number, then write a condition that prints -1 if the number is less than 10, 
//    prints 1 if the number is greater than 10, and prints 0 if the number is equal to 10. 

const numOne = 10

if (numOne < 10) {
  console.log(-1);
} else if (numOne > 10) {
  console.log(1);
} else {
  console.log(0);
}

if (numOne > 10) {
  console.log(1);
} else if (numOne < 10) {
  console.log(-1);
} else {
  console.log(0);
}

if (numOne < 10) {
  console.log("less than");
} else if (numOne > 10) {
  console.log("greater than");
} else {
  console.log("there be a zero here");
}

// 3 Use variables to store two numbers, then write a condition that prints 1 if the numbers are both less than 10, and prints 0 otherwise.


const int1 = 5
const int2 = 8

if (int2 < 10 & int1 < 10) {
  console.log("both less");
} else {
  console.log("at least one isn't")
}


if (int1 < 10 & int2 < 10) {
  console.log("both less...yesh!");
} else {
  console.log("at least one is not");
}

// 4 se a variable to store a number, then write a condition that prints 9 if the number is less than 10, prints 19 if the number is less than 20,
// prints 29 if the number is less than 30, and prints -1 otherwise (only one print statement should occur).

const value1 = 30

if (value1 < 10) {
  console.log("less than 10");
} else if (value1 < 20) {
  console.log("less than 20");
} else if (value1 < 30) {
  console.log("less than 30");
} else {
  console.log("here be a -1");
}

// 5 Use a variable to store a number, then write a condition that prints 1 if the number is over 9000, and prints -1 otherwise.

const powerLevel = 9003

if (powerLevel < 9000) {
  console.log("Puny");
} else {
  console.log("Ha, Vegita is scared of Goku in Saiyan Saga");
}

// 6 Use variables to store two numbers, then write a condition that prints 100 if either number is greater than 10, and prints -100 otherwise.

const num4 = 11
const num5 = 9

if (num4 > 10 & num5 > 10) {
  console.log("greater than 10");
} else {
  console.log("one is less than");
}

// 7 Use a variable to store a number, then write a condition that prints 1776 if the number is less than 0, and prints 1979 otherwise.

let batman = -6

if (batman < 0) {
  console.log("less than 0");
} else {
  console.log("0 or better");
}

//8 Use a variable to store a number, then write a condition that prints 100 if the number equals 100, 
// prints 99 if the number is equal to 99, and prints 0 otherwise.

let robin = 100

if (robin === 100) {
  console.log("number 100");
} else if (robin === 99) {
  console.log("number is 99");
} else {
  console.log("number is neither 100 or 99");
}

// 9 Use variables to store two numbers, then write a condition that prints 1 if the first number is less than zero 
// and the second number is greater than 0, and prints 0 otherwise.
let catwoman = -8
let poison = 8

if (catwoman < 0 & poison > 0) {
  console.log("Opposite sides of zero");
} else {
  console.log("the alignment of positive or negative");
}

// 10 Use a variable to store a number, then write a condition that prints 5 if the number is greater than 80, prints 4 if the number is greater than 60, 
// prints 3 if the number is greater than 40, prints 2 if the number is greater than 20, and prints 1 otherwise (only one print statement should occur).

let redHood = 9

if (redHood > 80) {
  console.log(5);
} else if (redHood > 60) {
  console.log(4);
} else if (redHood > 40) {
  console.log(3);
} else if (redHood > 20) {
  console.log(2);
} else {
  console.log(1);
}
