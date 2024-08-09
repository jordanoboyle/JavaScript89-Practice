function spaceBar() {
  let space = "";
  for (let i = 0; i < 20; i++) {
    space += "%";
  }
  return console.log(space);
}
module.exports = spaceBar;

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

class BankAccount {
  constructor (accountOwnerFirst, accountOwnerLast, accountAmount) {
    this.accountOwnerFirst = accountOwnerFirst;
    this.accountOwnerLast  = accountOwnerLast
    this.accountAmount     = accountAmount * 100;
  }

  ammountInPennies() {
    console.log(`We store money in the smallest unit. ${this.accountOwnerFirst} ${this.accountOwnerLast}
      has ${this.accountAmount} pennies in there account.`);
  }

  accountBalance() {
    const balance = (this.accountAmount / 100).toFixed(2);  //.toFixed(x) is necessary to add needed decimal points
    if (balance > 100) {
      return balance;
    } else {
      return `Warning, your balance is ${balance}, which is below your withdrawal limit.`;
    }
  }

  depositMoney(depositAmount) {
    this.accountAmount += (depositAmount * 100);
    return `Your deposit is confirmed. Current balance: ${(this.accountAmount / 100).toFixed(2)}`;
  }

  withdrawalMoney(withdrawalAmount) {
    if (withdrawalAmount % 20 !== 0) {
      return "Your withdrawal amount must be in multiples of 20";
    } else if (withdrawalAmount > 600) {
      return "You can only withdrawal up to $600.00.";
    } else {
      this.accountAmount -= (withdrawalAmount * 100);
      return `Thank you for your withdrawal. \n
      Your remaing balance is: ${this.accountBalance()}`;
    }
  }


}

let account1 = new BankAccount("Jordan", "O'Boyle", 315.00);
console.log(account1);
console.log(account1.accountBalance());
console.log(account1.depositMoney(451.89));
console.log(account1.accountBalance());

console.log(account1.withdrawalMoney(150));
console.log(account1.withdrawalMoney(700));
console.log(account1.withdrawalMoney(200));




spaceBar();
spaceBar();
// # 7 Write a Car class with attributes and reader/writer methods for make, model, year, and color. Then write a method that returns the make and model as a single sentence in all lowercase letters.

class Car {
  constructor (make, model, year) {
    this.make = make.charAt(0).toUpperCase() + make.slice(1);
    this.model = model.charAt(0).toUpperCase() + model.slice(1);
    this.year = year.toString();
  }

  displayMakeModel() {
    return `Make: ${this.make.toLowerCase()}, Model: ${this.model.toLowerCase()}.`;
  }

  changeYear(newModelYear) {
    this.year = newModelYear.toString();
    return this.year;
  }

}

let car1 = new Car("honda", "civic", 2007);
console.log(car1);
console.log(car1.displayMakeModel());
car1.changeYear(2019);
console.log(car1);
// 3. Write a Playlist class that stores a name and an array of songs with methods to add a song, remove a song, shuffle the songs into a random order, and display all the songs.

class Playlist {
  constructor(name = "New Playlist", playlist = [{song: "", artist: ""}]) {
    this.name = name;
    this.playlist = playlist;
  }

  addSingleSong(songName, artistName) {
    if (songName === undefined || artistName === undefined) {
      return "Error: you must have bother artist and song name";
    } else if (this.playlist[0]["song"] === "" && this.playlist[0]["artist"] === '') {
      this.playlist[0]["song"]   = songName;
      this.playlist[0]['artist'] = artistName;
    } else {
      this.playlist.push({song: songName, artist: artistName});
      return this.playlist;
    }
  }
}

let playlist1 = new Playlist("Platonic Chill Lounge");
console.log(playlist1);
playlist1.addSingleSong("Starlight", "Tune In with Chewie");
console.log(playlist1);
console.log(playlist1.addSingleSong("Studytime"));
playlist1.addSingleSong("Rusty Ruin Zone, ft: Houndtrack and Jona Fuller", "Tune In With Chewie");
console.log(playlist1);