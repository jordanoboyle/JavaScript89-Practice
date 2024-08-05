function spaceBar() {
  let space = "";
  for (let i = 0; i < 20; i++) {
    space += "%";
  }
  return console.log(space);
}

// # 9 Write a Book class with attributes and reader/writer methods for title, author, and year. Then write a method that returns "Classic" if the book is older than 2000, otherwise it returns "Modern".
spaceBar();

class Book {
  constructor(title, author, year) {
    this.title  = title;
    this.author = author;
    this.year   = year;
  }

  modernOrClassic() {
    if (this.year < 2000) {
      return console.log("Classic");
    } else {
      return console.log("Modern");
    }
  }

  whoIsAuthor() {
    return `The author of ${this.title} is ${this.author}`;
  }

}
let book1 = new Book("Harry Potter", "JK Rowling", 1997);
console.log(book1);
book1.modernOrClassic();
let book2 = new Book("Artemis Fowl", "Eion Colfer", 2003);
console.log(book1);
book2.modernOrClassic();
console.log(book1.whoIsAuthor());
console.log(book2.whoIsAuthor());
spaceBar();

// # 5 Write an Account class with attributes and reader/writer methods for name and balance. Then write a method that prints a warning if the balance is below $100.



// # 7 Write a Car class with attributes and reader/writer methods for make, model, year, and color. Then write a method that returns the make and model as a single sentence in all lowercase letters.

// 3. Write a Playlist class that stores a name and an array of songs with methods to add a song, remove a song, shuffle the songs into a random order, and display all the songs.