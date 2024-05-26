// SET 7 WRITE A CUSTOM CLASS WITH VALID SYNTAX
function spaceBar() {
  let space = "";
  let j = 0;
  while (j < 20) {
    space += "#";
    j++;
  }
  return console.log(space);
}
// # 1 Write a Song class with attributes for name, artist, and duration.

class Song {
  constructor(name, artist, duration) {
    this.name = name;
    this.artist = artist;
    this.duration = duration;
  }
}
let song1 = new Song("Get Low", "Usher", "4:35");
console.log(song1); //this pulls the actual object
console.log(song1.name, song1.artist, song1.duration); //this will pull individual pieces.
spaceBar();

// # 2 Write a Rectangle class with attributes for width and height.
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}
let rectOne = new Rectangle(32, 15);
console.log(rectOne.width);
console.log(rectOne.height);
let areaRect = rectOne.width * rectOne.height;
console.log(areaRect);
spaceBar();
// # 3 Write a Person class with attributes for name and age.

class Person {
  constructor (name, age, hair) {
    this.name = name;
    this.age = age;
    this.hair = hair;
  }
}
let personOne = new Person("Jeffery", 37, 'blonde');
console.log(personOne.name);
console.log(`${personOne.name} has ${personOne.hair} hair. He is ${personOne.age}.`);
spaceBar();

// # 4 Write a Location class with attributes for latitude and longitude.
class Location {
  constructor(latitude, longitude) {
    this.longitude = longitude;
    this.latitude = latitude;
  }
}
let locationOne = new Location(47.6097, -122.3330);
console.log(locationOne.latitude);
console.log(locationOne.longitude);
spaceBar();
// # 5 Write an Account class with attributes for name and balance.
class Account {
  constructor(name, balance = 500) {
    this.name = name;
    this.balance = balance;
  }
}
let jamesAcct = new Account("James");
console.log(jamesAcct.balance);
console.log(`${jamesAcct.name} has a default balance of $${jamesAcct.balance}.`);
spaceBar();
// # 6 Write a Movie class with attributes for title, director, and year.
class Movie {
  constructor(title, director, year) {
    this.title    = title;
    this.director = director;
    this.year     = year;
  }
}
let movieOne = new Movie("Gladiator", "Ridley Scott", 2000);
console.log(`${movieOne.title} came out in ${movieOne.year} and was directed by ${movieOne.director}.`);
spaceBar();

// # 7 Write a Car class with attributes for make, model, year, and color.
class Car {
  constructor(make, model, year, color = "Silver") {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
  }
}
let car1 = new Car("Honda", "Civic", "2007", "Gunmetal Grey");
console.log(car1.color);
console.log(`I once owned a ${car1.year} ${car1.make} ${car1.model}.`);
spaceBar();

// # 8 Write a Point class with attributes for x, y, and z coordinates.
class Point {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
}
let pointOne = new Point(15.5, 8.2, 4.5);
console.log(`X coordinate: ${pointOne.x}; Y coordinate: ${pointOne.y}; Z coordinate: ${pointOne.z}.`);
console.log("There has to be a graphing library.");
spaceBar();

// # 9 Write a Book class with attributes for title, author, and year.
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
}
let bookOne = new Book("Ringworld", "Larry Niven", "1970");
console.log(`The book ${bookOne.title} by ${bookOne.author} was published in ${bookOne.year}.`);

// # 10 Write a Plant class with attributes for name, size, and price.
class Plant {
  constructor(name, size, price) {
    this.name = name;
    this.size = size;
    this.price = price;
  }
}
console.log(Plant);
let potOne = new Plant("hyacinths", "medium", 23.99);
console.log(`The ${potOne.name} ${potOne.size} costs $${potOne.price}.`);