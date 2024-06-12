let numbers = [3,7,2,8,1];

console.log(numbers.sort());

//But this does not work entirely...observe

let numbersTwo = [65, 25, 100, 45]; //sort works with "strings"...soooo you need to do a little compare function

console.log(numbersTwo.sort(function(a, b){return a - b}));
