// SET 2 MAP AN ARRAY TO A NEW ARRAY WITH SOME COMPUTATION PERFORMED ON EACH ITEM
function spaceBar() {
  let i = 0;
  let space = "";
  while (i < 20) {
    space += "#";
    i ++;
  }
  return console.log(space);
}
// # 1 Start with an array of numbers and create a new array with each number times 3. For example, [1, 2, 3, 4] becomes [3, 6, 9, 16].
let numbersOne = [1, 2, 3, 4];
let newNumbersOne = [];
let i = 0;
while ( i < numbersOne.length) {
  newNumbersOne.push(numbersOne[i] * 3);
  i ++;
}
console.log(newNumbersOne);
spaceBar();
console.log("Option 2");
// Option 2
let newNumbersTwo = [];
numbersOne.forEach(function(number) {
  newNumbersTwo.push(number * 3);
});
console.log(newNumbersTwo);

//Option 3
console.log("Option 3");
spaceBar();
let newNumbersThree = numbersOne.map(number => {
  return number * 3;
});
console.log(newNumbersThree);

spaceBar();
// # 2 Start with an array of strings and create a new array with each string upcased. For example, ["hello", "goodbye", "later"] becomes ["HELLO", "GOODBYE", "LATER"].
let wordsOne = ["hello", "goodbye", "later"]
let capWordsOne = [];
wordsOne.forEach(word => {
  capWordsOne.push(word.toUpperCase());
});
console.log(capWordsOne);

// Option 2
let capWordsTwo = wordsOne.map(word => {
  return word.toUpperCase();
});
console.log(capWordsTwo);

spaceBar();
// # 3 Start with an array of hashes and create a new array of string values from each hash's :name key. For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}, {name: "Cloud", age: 25}] becomes ["Alice", "Blane", "Cloud"].
let namesAgesOne = [{name: "Alice", age: 27}, {name: "Blane", age: 16}, {name: "Cloud", age: 25}];
let namesOne = [];
namesAgesOne.forEach(person => {
  namesOne.push(person.name);
});
console.log(namesOne);

//option2
let namesTwo = namesAgesOne.map(person => {
  return person.name;
});
console.log(namesTwo);

spaceBar();
// # 4 Start with an array of numbers and create a new array with each number plus 7. For example, [1, 2, 3, 5] becomes [8, 9, 10, 12].
let numsOne = [1, 2, 3, 5];
let newNumsOne = [];
numsOne.forEach(number => {
  newNumsOne.push(number + 7);
});
console.log(newNumsOne);

//option 2
let newNumsTwo = numsOne.map(number => {
  return number + 7;
})
console.log(newNumsTwo);

spaceBar();

// # 5 Start with an array of strings and create a new array with each string's length. For example, ["hello", "goodbye", "frog", "bull horn"] becomes [5, 7, 4, 9].
let wordsThree = ["hello", "goodbye", "frog", "bull horn"];
let wordLength = [];
wordsThree.forEach(function(word) {
  wordLength.push(word.length);
});
console.log(wordLength);

//option 2
let wordLengthTwo = wordsThree.map(function(word) {
  return word.length;
});
console.log(wordLengthTwo);


spaceBar();
// # 6 Start with an array of hashes and create a new array of number values from each hash's :age key. For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [27, 16]. (bonus: use string interpolation to print out a coherent sentence)
let namesAgesTwo = [{name: "Alice", age: 27}, {name: "Blane", age: 16}, {name:"Cloud", age: 27}, {name: "Noctis", age: 27}];
let agesOne = [];
namesAgesTwo.forEach(person => {
  agesOne.push(person.age);
});
console.log(`${namesAgesTwo[3].name} is ${agesOne[3]} years old at the time of the main story.`);

let agesTwo = namesAgesTwo.map(function(person) {
  return person.age;
});
console.log(agesTwo);


// # 7 Start with an array of numbers and create a new array with each number divided by 2. For example, [1, 2, 3, 4] becomes [0.5, 1.0, 1.5, 2.0]. (BONUS) Try making an array of hashes like this {1: {0.5: "Is 1 / 2"}}
let theseNumbers = [1, 2, 3, 4];
let hashNumbers = {};
theseNumbers.forEach(function(num) {
  let halfNum = (num / 2);
  hashNumbers[num] = {[halfNum]: `Is ${num} / 2`};
});
console.log(hashNumbers);

spaceBar();
// # 8 Start with an array of strings and create a new array with each string's first letter only. For example, ["hello", "goodbye", "guten tag"] becomes ["h", "g"]. BONUS: make a hash yielding [{first_l: "h", last_l: "o", whole: "hello"}]
let theseWords = ["hello", "goodbye", "guten tag"];
let m = 0;
let arrayOfWordObjects = [];
while (m < theseWords.length) {
  arrayOfWordObjects.push(
    {first_l: theseWords[m].charAt(0),
      last_l: theseWords[m].charAt(-1),
      whole: theseWords[m]
    }
  );
  m++;
}
console.log(arrayOfWordObjects);
spaceBar()
// # 9 Start with an array of hashes and create a new array of number values from each hash's :age key times 2. For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}, {name: "Barret", age: 33}] becomes [54, 32, 66].
let agesNamesTwo = [{name: "Alice", age: 27}, {name: "Blane", age: 16}, {name: "Barret", age: 33}];
let agesThree = [];
agesNamesTwo.forEach(person => {
  agesThree.push(person.age);
});
console.log(agesThree);

//option 2
let agesFour = agesNamesTwo.map(person => {
  return person.age;
});
console.log(agesFour);

spaceBar();
// # 10 Start with an array of numbers and create a new array with each number converted into a string. For example, [1, 2, 3, 4] becomes ["1", "2", "3", "4"].
let convertToString = [1, 2, 3, 4];
let areConverted = [];
let j = 0;
while (j < convertToString.length) {
  areConverted.push(convertToString[j].toString());
  j++;
}
console.log(areConverted);

let areConvertedTwo = [];
convertToString.forEach(function(number) {
  areConvertedTwo.push(number.toString());
});
console.log(areConvertedTwo);

let areConvertedThree = convertToString.map(function(number) {
  return number.toString();
});
console.log(areConvertedThree);
