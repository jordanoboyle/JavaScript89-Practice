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

// # 3 Write a Person class with attributes for name and age.

// # 4 Write a Location class with attributes for latitude and longitude.

// # 5 Write an Account class with attributes for name and balance.

// # 6 Write a Movie class with attributes for title, director, and year.

// # 7 Write a Car class with attributes for make, model, year, and color.

// # 8 Write a Point class with attributes for x, y, and z coordinates.

// # 9 Write a Book class with attributes for title, author, and year.

// # 10 Write a Plant class with attributes for name, size, and price.
