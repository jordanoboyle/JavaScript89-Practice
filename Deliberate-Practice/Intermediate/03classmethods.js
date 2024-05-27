// SET 5 WRITE A CUSTOM CLASS WITH CUSTOM METHODS

function spaceBar() {
  let space = "";
  for (let i = 0; i < 20; i++) {
    space += "#";
  }
  return console.log(space);
}

// # 1 Write a Song class with attributes and reader/writer methods for name, artist, and duration. Then write a method that prints the name, artist, and duration in a single sentence.
class Song {
  constructor(title, artist, duration) {
    this.title = title;
    this.artist = artist;
    this.duration = duration;
  }

  printInfo() {
    console.log(`The song ${this.title} was made by ${this.artist} and lasted a duration of ${this.duration}.`);
  }
}
let songOne = new Song("In The End", "Linkin Park", "3:45");
console.log(songOne);
songOne.printInfo();
spaceBar();
// # 2 Write a Rectangle class with attributes and reader/writer methods for width and height. Then write a method that returns the area of the rectangle.
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  areaCalc() {
    return this.width * this.height;
  }
}
let rectOne = new Rectangle(15, 9);
console.log(rectOne);
console.log(rectOne.areaCalc());
console.log("The area of the first rectangle is " + rectOne.areaCalc() + " square feet.");
console.log(`The area of the first rectangle is ${rectOne.areaCalc()}.`);
spaceBar();
// # 3 Write a Person class with attributes and reader/writer methods for name and age. Then write a method that returns the person's name in all capital letters.
class Person {
  constructor(first, last, age) {
    this.first = first;
    this.last = last;
    this.age = age;
  }
  showName() {
    console.log(`First name: ${this.first}, Last name: ${this.last}.`);
  }
  showAgeInfo() {
    console.log(`${this.first} ${this.last} is ${this.age} years old.`);
  }
}

let personOne = new Person("James", "Kirk", 35);
console.log(personOne);
personOne.showName();
personOne.showAgeInfo();
spaceBar();

// # 4 Write a Coordinate class with attributes and reader/writer methods for latitude and longitude. Then write a method that prints out the latitude and longitude in a single sentence.
class Coordinates {
  constructor(latitude, longitude) {
    this.latitude = latitude;
    this.longitude = longitude;
  }
  localInfo() {
    console.log(`The city's coordinates are lat: ${this.latitude}, long: ${this.longitude}.`);
  }

}

let localOne = new Coordinates(40.888, 100.999);
console.log(localOne);
console.log(localOne.latitude);
console.log(localOne.longitude);

localOne.latitude = 50.999;
localOne["longitude"] = 90.888;
console.log(`This has been changed properly if not 'undefined' ${localOne.latitude}.`);
console.log(`This has been changed properly if not 'undefined' ${localOne.longitude}.`);
localOne.localInfo();
spaceBar();
// # 5 Write an Account class with attributes and reader/writer methods for name and balance. Then write a method that prints a warning if the balance is below $100.
class Account {
  constructor(acctNum, balance = 0) {
    this.acctNum = acctNum;
    this.balance = balance;
  }

  warning() {
    let threshhold = 500;
    let lastFour = String(this.acctNum).split('').slice(-4).join("");
    if (this.balance < threshhold) {
      console.log(`Warning, your account ending in ${lastFour}  balance is below the $${threshhold}.00 threshold.`);
    }
  }
  deposit(deposit = 0) {
    if (deposit > 0) {
      this.balance = this.balance + deposit;
      console.log(`Thank you for your deposit of ${deposit}. We will send notification of posting.`); 
    } else {
      console.log(`You must deposit a sum greater than ${deposit}.00.`);
    }
  }
 
}
let acctOne = new Account(5556667890, 3000);
let acctTwo = new Account(4445551234);
// console.log(acctOne);
// console.log(acctTwo);
// acctOne.warning();
// acctTwo.warning();
acctTwo.deposit(750);
acctOne.deposit(345.45);
console.log(`The balance for account one is ${acctOne.balance}`);
console.log(`The balance for account one is ${acctTwo.balance}`);


spaceBar();

class Playlist {
  constructor(name, list = []) {
    this.name = name;
    this.list = list;
  }
}

let playlistOne = new Playlist("Running Mix");
console.log(playlistOne);
playlistOne.list.push("Marnies Battle Theme Remix");
console.log(playlistOne);
playlistOne.list.push("Bloody Tears", "Chemical Plant Zone: by Family Jules7x");
console.log(playlistOne);

