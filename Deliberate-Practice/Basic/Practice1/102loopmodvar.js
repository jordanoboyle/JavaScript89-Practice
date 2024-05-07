// Set 3 Write a loop which modifies a variable each time the loop runs. 

// # 1 Write a while loop to print the numbers 1 through 10.

let i = 1;
while (i <= 10) {
  console.log(i);
  i += 1;
}


// # 2 Write a while loop that prints the word "hello" 5 times.

let num = 1;
while (num <= 5) {
  console.log("hello");
  num += 1;
}


// # 3 Write a while loop that asks the user to enter a word and will run forever until the user enters the word "stop".
// ""Some quick practice writing some prompts needed from the user""
// import PromptSync from "prompt-sync";

// var userHello = PromptSync("Give me a greeting please: ");
// console.log(userHello);

// var userGoodbye = PromptSync("Give me an adios phrase: ");
// console.log(userGoodbye);

// var userPirate = PromptSync('Are you a pirate? ');
// console.log(userPirate);
// //LET'S WRITE THE LOOP NOW

// while(true) {
//   var userInput = PromptSync("Please enter a word, note 'stop' will end loop: ");
//   if (userInput === "stop") {
//     break;
//   }
// }

// # 4 Write a while loop that prints the numbers 0 through 100, increasing by 5 each time.

let num1 = 0;
while (num1 <= 100) {
  console.log(num1);
  num1 += 5;
}


// # 5 Write a while loop that prints the number 9000 ten times.

let powerLevel = 9000;
let index = 0;
while (index < 10) {
  console.log(String(powerLevel));
  index += 1;
}

// # 6 Write a while loop that asks the user to enter a number and will run forever until the user enters a number greater than 10.

// var infiniteUnlessTen = window.prompt("Please give us a number: ")

// while (true) {
//   var infiniteUnlessTen = window.prompt("Please give us a number: ")
//   if (parseInt(infiniteUnlessTen) > 10){
//     console.log("Well done you typed 10");
//     break;
//   }
// }


// while (true) {
//   var userGive = window.prompt("please give me a number:");
//   if (parseInt(userGive) > 10) {
//     console.log("good job on typing 10");
//     break;
//   }
// }

// # 7 Write a while loop that prints the numbers 50 to 70.

let numberTwo = 5;
while (numberTwo <= 7) {
  console.log(numberTwo * 10);
  numberTwo += 1
}

// # 8 Write a while loop that prints the phrase "Around the world" 144 times.
let daftPunk = []
let count2 = 0
while (count2 < 144) {
  console.log("Around the World");
  daftPunk.push(count2)
  count2 += 1;
}

console.log(daftPunk.length)

// # 9 Write a while loop that asks the user to enter a word and will run forever until the user enters a word with more than 5 letters.


// while (true) {
//   let user5Letter = window.prompt("please enter a word:")
//   if (user5Letter.length > 5) {
//     console.log("thank you for a word longer than 5 letters");
//     break;
//   }
// }

// # 10 Write a while loop that prints the even numbers from 2 to 40.

let evenNumbers = 2
while (evenNumbers <= 40) {
  console.log(evenNumbers);
  evenNumbers += 2;
}