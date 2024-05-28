function spaceBar() {
  let space = "";
  for (let i = 0; i < 20; i++) {
    space += "%";
  }
  return console.log(space);
}

// Here we are going to cover the basics of Objects...fundamental to JavaScript

let personOne = {
  name: "John Wick",
  first: "Jonathan",
  last: "Wick",
  age: 40,
  greet: function() {
    console.log("Hello, " + this.first);
  }
};

// other method to do this:
let personTwo = new Object();
personTwo.name = "James T. Kirk";
personTwo.first = "Jimmy";
personTwo.last = "Kirk";
personTwo.title = "Captain";
personTwo.age = 42;
personTwo.greetTwo = function() {
  console.log("Herro, " + personTwo.title + " " + personTwo.last);
};

// Accessing a few traits. 

//Dot notation
console.log(personOne.name);
console.log(personTwo.name);
spaceBar();

//Bracket notation
console.log(personOne["last"]);
console.log(personTwo["last"]);
spaceBar();

//Let's add to each one
personOne.job = "Assassin";
personTwo["job"] = "Leads the Enterprise";
console.log(personOne);
console.log(personTwo);
spaceBar();

// Let's delete properties and then give them back
delete personOne.age;
delete personTwo["age"];
console.log(personOne.age);
console.log(personTwo["age"]);
spaceBar();
personOne.ageTwo = 47;
personTwo["ageTwo"] = 43;
console.log(personOne.ageTwo);
console.log(personTwo["ageTwo"]);
spaceBar();

//loop through the properties
for (let key in personOne) {
  if (personOne.hasOwnProperty(key)) {
    console.log(key + ": " + personOne[key]);
  }
}
spaceBar();

for (let item in personTwo) {
  if (personTwo.hasOwnProperty(item)) {
    console.log(item + ": " + personTwo[item]);
  }
}
spaceBar();

//Use the functions in the Object
personOne.greet();
personTwo.greetTwo();
