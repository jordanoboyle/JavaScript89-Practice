// SET 3 SELECT ITEMS FROM AN ARRAY INTO A NEW ARRAY WITH ITEMS THAT MATCH A CERTAIN CONDITION


function spaceBar() {
  let space = "";
  for (let i = 0; i < 20; i++) {
    space += "$";
  }
  return console.log(space);
}

// # 1 Start with an array of numbers and create a new array with only the numbers less than 20. For example, [2, 32, 80, 18, 12, 3] becomes [2, 18, 12, 3].
let theseNumbers = [2, 32, 80, 18, 12, 3];
let lessThanTwenty = [];
theseNumbers.forEach(function(num) {
  if (num < 20) {
    lessThanTwenty.push(num);
  }
});
console.log(lessThanTwenty);
spaceBar();
//option 2 with .filter()
let lessThanTwenty2 = theseNumbers.filter(function(num) {
  return num < 20;
});
console.log(lessThanTwenty2);
spaceBar();

// # 2 Start with an array of strings and create a new array with only the strings that start with the letter "w". For example, ["winner", "winner", "chicken", "dinner"] becomes ["winner", "winner"].
let wordsOne = ["winner", "winner", "chicken", "dinner"];
let startsWithW = [];
wordsOne.forEach(word => {
  if (word[0] === "w") {
    startsWithW.push(word);
  }
});
console.log(startsWithW);
spaceBar();
//option 2 .filter()
let startsWithW2 = wordsOne.filter(word => {return word[0] === "w"} );  ///Freaking do not do this...just for fun

console.log(startsWithW2);
spaceBar();
// # 3 Start with an array of hashes and create a new array with only the hashes with prices greater than 5 (from the :price key). For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "leather wallet", price: 15}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}, {name: "leather wallet", price: 15}].
let itemPrice = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "leather wallet", price: 15}, {name: "book", price: 4}];
let itemOver5 = [];
itemPrice.forEach(item => {
  if (item.price > 5) {
    itemOver5.push(item.name);
  }
});
console.log(itemOver5);
spaceBar();
//option2 .filter()
let itemOver5Two = itemPrice.filter(function(item) {
  return item.price > 5;
});
console.log(itemOver5Two);
spaceBar();

// # 4 Start with an array of numbers and create a new array with only the even numbers. For example, [2, 4, 5, 1, 8, 9, 7] becomes [2, 4, 8].
let numbersOne = [2, 4, 5, 1, 8, 9, 7];
let evensOne = [];
numbersOne.forEach(num => {
  if (num % 2 === 0) {
    evensOne.push(num);
  }
});
console.log(evensOne);
spaceBar();

//option 2 .filter()
let evensTwo = numbersOne.filter(function(num) {
  return num % 2 === 0;
});
console.log(evensTwo);

// # 5 Start with an array of strings and create a new array with only the strings shorter than 4 letters. For example, ["a", "man", "a", "plan", "a", "canal", "panama"] becomes ["a", "man", "a", "a"].
let randStrings = ["a", "man", "a", "plan", "a", "canal", "panama"];
let shorterThanFour = [];
randStrings.forEach(str => {
  if (str.length < 4) {
    shorterThanFour.push(str);
  }
});
console.log(shorterThanFour);

//option 2 .filter()
let shorterThanFourTwo = randStrings.filter(function(str) {
  return str.length < 4;
});
console.log(shorterThanFourTwo);
spaceBar();

// # 6 Start with an array of hashes and create a new array with only the hashes with names shorter than 6 letters (from the :name key). For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}, {name: "book", price: 4}].
let itemsPrice = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}];
let namesLessSix = [];
itemsPrice.forEach(function(item) {
  if (item.name.length < 6) {
    namesLessSix.push(item.name);
  }
});
console.log(namesLessSix);
//option 2 .filter()
let namesLessSixTwo = itemsPrice.filter(item => {
  return item.name.length < 6;
})
console.log(namesLessSixTwo);
spaceBar();
// # 7 Start with an array of numbers and create a new array with only the numbers less than 10. For example, [8, 23, 0, 44, 1980, 3, 10, 9] becomes [8, 0, 3, 9].
let numbersTwo = [8, 23, 0, 44, 1980, 3, 10, 9];
let lessThanTen = [];
numbersTwo.forEach(number => {
  if (number < 10) {
    lessThanTen.push(number);
  }
});
console.log(lessThanTen);

//option 2 .filter()
let lessThanTenTwo = numbersTwo.filter(number => {
  return number < 10;
});
console.log(lessThanTenTwo);

spaceBar();
// # 8 Start with an array of strings and create a new array with only the strings that don't start with the letter "b". For example, ["big", "little", "good", "bad", "ball", "Catherine"] becomes ["little", "good", "Catherine"].
let wordsTwo = ["big", "little", "good", "bad", "ball", "Catherine"];
let startWithB = [];
wordsTwo.forEach(function(word) {
  if (word.toLowerCase()[0] !== "b") {
    startWithB.push(word);
  }
});
console.log(startWithB);

//option 2 filter

let startWithBTwo = wordsTwo.filter(word => {
  return word.toLowerCase()[0] !== "b";
});
console.log(startWithBTwo);
spaceBar();

// # 9 Start with an array of hashes and create a new array with only the hashes with prices less than 10 (from the :price key). For example, [{name: "chair", price: 100}, {name: "bird feeder", price: 9},{name: "rubber duck", price: 10}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "bird feeder", price: 9}, {name: "pencil", price: 1}, {name: "book", price: 4}].
let itemsPriceTwo = [{name: "chair", price: 100}, {name: "bird feeder", price: 9},{name: "rubber duck", price: 10}, {name: "pencil", price: 1}, {name: "book", price: 4}];
let priceLessThanTen = [];
itemsPriceTwo.forEach(function(item) {
  if (item.price < 10) {
    priceLessThanTen.push(item.name);
  }
});
console.log(priceLessThanTen);

//option 2 .filter()
let priceLessThanTentwo = itemsPriceTwo.filter(item => {
  return item.price < 10;
});
console.log(priceLessThanTentwo);
spaceBar();

// # 10 Start with an array of numbers and create a new array with only the odd numbers. For example, [2, 4, 5, 1, 8, 9, 7] becomes [5, 1, 9, 7].
let findTheOdds = [2, 4, 5, 1, 8, 9, 7];
let oddNumbers = [];
findTheOdds.forEach(function(number) {
  if (number % 2 !== 0) {
    oddNumbers.push(number);
  }
});
console.log(oddNumbers);

let oddNumbersTwo = findTheOdds.filter(function(number) {
  return number % 2 !== 0;
});
console.log(oddNumbersTwo);