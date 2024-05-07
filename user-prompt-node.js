// Here we are going to go over the intricasies obtaining user prompts in node.js
//We will also do a brief syntax summary of what we would write if we were searching fro prompts from user on a web page:

// //First the JaveScript Front End:

// var nameF   = prompt("What is your name?")  //these snag the input in string form from the user.
// var number = prompt("What is your favorite number?")  // you can use window.prompt here as well.

// //To print 

// println("Hello " + nameF + "!")
// println("Your favorite number is " + number + "!")


// //This will print out the variable type

// println("Name is a " + typeof nameF)   //Normally we would not use these, but these will specifically go to the user in window. 
// println("Number is a " + typeof number)

// // You can also snag changes from the chosen 'prompt' function
// var num1   = readInt("What is your age?") 
// var first  = readLine("What is your first name?")
// var float1 = readFloat("Put a decimal number down:")

// // ALL OF THIS IS USEFUL, VERY USEFUL WHEN NEEDING TO GRAB INPUTS FROM USERS AND MODIFY THEM AS NEEDED.

/*NOW LET'S COVER WHAT WE NEED TO DO IN NODE.JS; SIMILAR BUT INVOLVES A CALLBACK.*/

const readline = require('readline').createInterface ({
  input: process.stdin,
  output: process.stdout
});

readline.question("Who are we?", name => {
  console.log(`Hey there ${name}!`);
  readline.close();
});
//This requires the calling of readline.queston() and a callback function evertime you want to use it for an input. 

//WE COULD DO IT THIS WAY. WHICH IS MUCH SIMPLER, BUT HAS A LITTLE LESS UTILITY IN ITS POWER. 
// However, this requires the ablity of a module called 'prompt-sync' loaded through npm

const prompt = require('prompt-sync')({sigint: true});  //the second part is important to allow a user to exit the program (send SIGINT, or signal interrupt)

const name1 = prompt("what is your name?");
console.log(`hey there my friend ${name1}`);

//WE CAN WORK WITH NUMBERS AS WELL
const number1 = prompt("enter a number:")
console.log("your number + 4 = ")
console.log(Number(number1) + 4)


// Alright let's quick copy a guessing game so we have something to reference later:

const numberToGuess = Math.floor(Math.random() * 10) + 1;
let foundCorrectNumber = false;

while (!foundCorrectNumber) {
  //user input here
  let guess = prompt('Guess a number from 1 to 10');
  //convert the input
  guess = Number(guess)

  //Now we compare
  if (guess === numberToGuess) {
    console.log("Well done, you got it!");
    foundCorrectNumber = true;
  } else {
    console.log("sorry, guess again.");
  }
}
//Now, normally we would put some logic in here to kill the program, but maybe we want it to continue. 







