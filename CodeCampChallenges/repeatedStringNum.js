// Here we wanted to write the building blocks of return a string repeated multip times (number provided) 
// if the number provided to the function was greater than 0


// for (let i = 0; i < 3; i++) {
//   string += "4";
// }
// console.log(string);

let string = "";
let number = 0;

if (number <= 0) {
  console.log('');
} else {
  for (let i = 0; i < number; i++) {
    string += "abc";
  }
}

console.log("Below will be full if number > 0");
console.log(string);