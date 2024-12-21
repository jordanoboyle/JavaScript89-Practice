// Here we are going to do a quick overview of how scope works within JavaScript

//Here we are covering const and its general use. (problems that occur when not used specifically)
//const and let we introduced to compensate for vairable hoisting. 

const pi = 3.14;
console.log(pi);  // now let's try to reassign it?
//pi = 3.14159  //==> TypeError, assignment to constant variable

const pi1 = 3.14159
console.log(pi, pi1);  //you can assign to two different variables. 

//however, let's take a look at assigning to a const to an object (similar to python dict)

const person = {name: "John", lastName: "Snow"};
person.age = 30;
console.log(person);
// try changing a name within the object
person.lastName = "Billingsworth";
console.log(person);
//but we cannot reassign the variable 
//person = "John Snow";  //==> TypeError, you cannot reassign the const even if you can manipulate the object within

//check out an array example
const standardNums = [5, 4, 3, 2, 1];
console.log(standardNums);
standardNums.push("always found it weird that you can add a string this long  :-)");
console.log(standardNums);
// we have already established that we will be unable to reassign or redeclare. 


//Here let's cover the use of let for a better understanding of how variables work in JavaScript.

let count = 10;
console.log(count);

count = "We reassigned 'count' here to a string";
console.log(count);
// log is block scoped, so if defined within a block, it will not work outside the block. 



