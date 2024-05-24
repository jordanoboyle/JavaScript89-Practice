
// SET 1 INSERT A VARIABLE INTO A STRING USING EITHER CONCATENATION OR INTERPOLATION.
function spaceBar() {
  let space = "";
  let i = 0;
  while (i < 20) {
    space += "%";
    i ++
  }
  return console.log(space);
}
spaceBar();
// # 1 Write a program that uses variables to store a first and last name, then prints the full name in one line using string concatenation (the + operator).
let firstOne = "Trevor";
let lastOne = "Belmont";
console.log(`My name is ${firstOne} ${lastOne}, last son of the house of ${firstOne}`);

spaceBar();

// # 2 Write a program that uses variables to store a first and last name, then prints the full name in one line using string interpolation (the #{} operator).
let tigerOne = "Tony";
let speciesOne = "Tiger";
console.log(`From ${tigerOne} the ${speciesOne}, Frosted Flakes are great!`);

spaceBar();
// # 3 Write a program that asks the user to input a word. If the word is "marco", print "polo".
let adventureOne = "Marco";
let lastAdventure = "Polo";
console.log(`Let's play a game of ${adventureOne} ${lastAdventure}.`);

// # 4 Write a program that uses variables to store three different colors, then prints out a sentence using the colors with string concatenation (the + operator).
let colorOne = "red";
let colorTwo = "black";
let colorThree = "white";
console.log(`Alucard often wears ${colorOne} and ${colorTwo}, wielding a ${colorThree} shield.`);
spaceBar();

// # 5 Write a program that uses variables to store three different colors, then prints out a sentence using the colors with string interpolation (the #{} operator).

// # 6 Write a program that asks the user to enter a name. If the name is not "Santa", print "You're not Santa."

// # 7 Write a program that uses variables to store a book's title and author, then prints out a sentence using that information with string concatenation (the + operator).

// # 8 Write a program that uses variables to store a book's title and author, then prints out a sentence using that information with string interpolation (the #{} operator).

// # 9 Write a program that asks the user to enter a password. If the password is "Joshua", the program responds "Shall we play a game?". For any other password, the program responds "Access denied"

// # 10 Write a program that uses variables to store the names of three cities, then prints out a sentence using that information with string concatenation (the + operator).