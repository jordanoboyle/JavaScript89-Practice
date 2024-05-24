setTimeout(function() {
  console.log('First task done!');
  setTimeout(function() {
    console.log("Hello second task");
    setTimeout(function() {
      console.log("third time now!");
    }, 2000);
  }, 2000);
}, 2000);

function taskOne() {
  console.log("First task done!");
};
function taskTwo() {
  console.log("Second task done!");
};
function taskThree() {
  console.log("Third task done!");
};


setTimeout(taskOne, 2000);
setTimeout(taskTwo, 4000);
setTimeout(taskThree, 6000);