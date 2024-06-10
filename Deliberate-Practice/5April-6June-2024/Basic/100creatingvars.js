// Write a program that uses a variable to store a number,
// then prints that number plus 10.

var sumNumPlusTen = 10

console.log(sumNumPlusTen + 10);

// Write a program that uses a variable to store a word,
// then prints that word with all capital letters.

var WordStored = "How am I doing here? Good thing I installed node.js.";
console.log(WordStored);


// Write a program that uses variables to store two numbers, 
// then prints the numbers added together.

var WordOne = "Here is the number one, ";
var numeralOne = 1;

console.log(WordOne + numeralOne.toString());

console.log(numeralOne)
console.log(numeralOne.toString())  // notice the difference here. One prints as a string, one as numeral. Color difference

// assign a string toa variable and convert it to capital letters.
//Assign that result to a new variable, or convert and print in lower case

var stringManip = "This Is A String I Want To Change The Case OF!";

console.log(stringManip.toUpperCase());
stringManip.toUpperCase();

console.log(stringManip);

var changeToUpper = stringManip.toUpperCase();

console.log(changeToUpper);

console.log(changeToUpper.toLowerCase()); //don't forget the semi colon and paranthesis for functions

// Write a program that uses variables to store two numbers, 
// then prints the numbers added together.

var numJ = 75;
var numK = 75;

console.log(numJ + numK);

console.log((numJ * 2) - numK * 3)

// Write a program that uses a variable to store a word, then prints that word in reverse order.

var stringToReverse = "We are going to log this to the console in reverse!";

console.log(stringToReverse.split('').reverse().join(''));

// note the chaining of methods/functions together in order to make this work. 
// let's have a little fun

var printedBackward = stringToReverse.split('').reverse().join('');

console.log(printedBackward + " This has be reassigned.")

console.log(printedBackward.split('').reverse().join('') + "THIS WAS PUT BACK TOGETHER")

// Write a program that uses a variable to store a number, 
// then prints the number times 10.

var theNumTen = 10;

var index = 0;
while (index < 10) {
  console.log(theNumTen)
  index += 1
};

console.log("_________________")
//Syntax of a while loop provided above!   MIGHT BE ABLE TO DO IT WITH A FOR LOOP


for (let i = 0; i < 10; i++ /*this is a positive increment*/) {
  console.log(theNumTen)
};


// Write a program that uses variables to store two words, 
//then prints both words on the same line in all capital letters.
var word1 = "Sonic", word2 = "Knuckles"
console.log(word1)
console.log(word2)

console.log((word1 + " & " + word2).toUpperCase())


//Write a program that uses a variable to store a word, then prints the number of letters in the word.
var stringLength = "How long is this string is what we want to know!";

 console.log(stringLength.length);

 //Write a program that uses a variable to store a number with decimals, then prints the number as an integer.
var floatNumber = 5.68;

console.log(parseInt(floatNumber));
console.log(parseInt(floatNumber));
console.log(parseInt(floatNumber));
console.log(parseInt(89.989));  //this will always "round down to the lowest neumber"

console.log(5.67.toFixed());  // .toFixed() bases it's decisions on directional rounding, but RETURNS STRING
console.log(5.45.toFixed());

// Write a program that uses a variable to store a word, then prints the word with all lowercase letters.

var needsLowered = "HERE WE ARE GOING TO TURN THIS INTO A LOWERCASE STRING AND REVERSE IT.";
const letterArray = needsLowered.split('')

console.log(needsLowered.toLowerCase().split('').reverse().join(''));


for (var i = 0; i < needsLowered.length; i++) {  //This is the acceppted answer, though there are other ways to do the same thing. 
  console.info(needsLowered[i]);                //Remember that i++ is incrementing the loop.
}

// ANOTHER OPTION with forEach: This is a functional approach

let result = '';
needsLowered.split('').forEach(letter => {
  console.log(result += letter);
});  //observe result, this is not perfec

console.log("Test String"[6])
console.log("Test String".charAt(6))











