function attemptOne() {
  console.log("Here is the first GET!");
}
function attemptTwo() {
  console.log("Here is the second GET");
}
function attemptThree() {
  console.log("Here is the results of the POST");
}

//First method
setTimeout(attemptOne, 1500);
setTimeout(attemptTwo, 3000);
setTimeout(attemptThree, 4500);

function printFruit() {
  setTimeout(function() {
    console.log("print pears");
  }, 3000);
}
printFruit();

// Second Method
setTimeout(function() {
  console.log("I am first!");
  setTimeout(function() {
    console.log("I am the second!");
    setTimeout(function() {
      console.log("Got to be honest, this is a bit confusing!");
    }, 2000);
  }, 2000);
}, 2000);