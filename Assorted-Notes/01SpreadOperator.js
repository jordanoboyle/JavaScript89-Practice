// In JS the spread operator is a pretty powerfull tool
// Allows for the expansion of elements of an iterable into individual elements
// Only in ES6 

//1 Expanding Arrays:
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6];
console.log('Expanding arrays');
console.log(arr2);  // ==> [1, 2, 3, 4, 5, 6]
// spreads array1 into arr2, resulting in a new array


//2 Copying Arrays: (making a shallow copy)
const original = [1, 2, 3];
const copy = [...original];

console.log("Shallow copies that are different");
console.log(copy);
//here's a fun part
console.log(original === copy);
//These are not the same array


//3 Merging Arrays: concatenate arrays
const arr3 = [1, 2, 3];
const arr4 = [4, 5, 6];

const merged = [...arr3, ...arr4];
console.log("Merging arrays here:")
console.log(merged); //==> [1, 2, 3, 4, 5, 6]


// 4 Spreading strings like they are an array being split:
const str1 = "Hello World";
const chars = [...str1];

console.log('Spreading a string');
console.log(chars);


//5 Using Spread with function args: the abilit to pass elements of array as arguments
function sum(x, y, z) {
  return x + y + z;
}

const numbers1 = [1, 2, 3];

console.log('Passing array elements as function args');
console.log(sum(...numbers1)); //==> 6

//6 Copying objects: use spread op to create shallow copy
const obj1 = {a: 1, b: 2};
const obj2 = {...obj1};

console.log("Shallow copues of objects");
console.log(obj2);
// despite similarities, they are diff
console.log(obj2 === obj1);


// 7 Merging Objects: merge multipl objects into new!
const obj3 = {a: 1, b: 2};
const obj4 = {c: 3, d: 4};

const mergedObj = {...obj3, ...obj4};
console.log("Merging objects");
console.log(mergedObj);


//8 Overriding Properties:  Properties can be overidden
const arrPeople = [
  {name: "Jim Kirk", money: 1000},
  {name: "Jean Luc Picard", money: 2000}
];
const newArrPeople = arrPeople.map(person => {
  return {...person, money: person.money * 2};
});

console.log(
  "Shows what we can do with spread opps if we need \noverride values in an object."
);
console.log(arrPeople);
console.log(newArrPeople);


//As a side note

console.log("This is what is needed to write a longer string \n\
without the need to worry about triple quotes like in python. \
the \\  provides the ability. ");

console.log(66666666);

console.log(`You can also use backticks instead.
And your problem will be solved relatively easily.
Just it was with the log to the console.`);



