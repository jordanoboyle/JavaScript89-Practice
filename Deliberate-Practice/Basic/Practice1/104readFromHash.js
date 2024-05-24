// Set 5 Write a hash, read items from a hash, and add new items to existing hash. 
function spaceBar() {
  let i = 0;
  space = "";
  while (i < 20) {
    space += "#";
    i++;
  }
  return console.log(space);
}

// # 1 Make a hash to store a person's first name, last name, and email address. Then print each attribute on separate lines.

let personInfo = {
  first: "Jordan",
  last: "O'Boyle",
  email: "jmcmcode@gmail.com"
};
console.log(personInfo.first, personInfo.last);
console.log(personInfo.email);

let space = "$"
let spaceRepeat = ""
for (let i = 0; i < 20; i ++) {
  spaceRepeat += space;
}
console.log(spaceRepeat);
// # 2 Make an array of hashes to store the first name and last name for 3 different people. Then print out the first person's info.
let people = [
  {first: "John", last: "Wick"},
  {first: "Jick", last: "Wick"},
  {first: "Jordan", last: "O'Boyle"},
];
console.log(people[0]);
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
};

// # 3 Make a hash to store prices for 3 different menu items. Then add a new menu item and price and print the hash to see the result.
let menu = {
  fries: 5,
  burger: 15,
  cordoneBleu: 25
};
menu["steakFrites"] = 35
console.log(menu);

let total = 0

// # 4 Make a hash to store a book's title, author, number of pages, and language. Then print each attribute on separate lines.
const bookInfo = {
  title: "Harry Potter and the Order of the Phoenix",
  author: "JK Rowlling",
  numPages: 871,
  language: "english"
};
console.log(bookInfo.title);
console.log(bookInfo.author);
console.log(bookInfo.numPages);
console.log(bookInfo.language);

spaceBar();

// # 5 Make an array of hashes to store the title and author for 3 different books. Then print out the third book's author.


// # 6 Make a hash to store 3 different states and their capitals. Then add a new state and capital and print the hash to see the result.

// # 7 Make a hash to store a laptop's brand, model, and year. Then print each attribute on separate lines.

// # 8 Make an array of hashes to store the brand and model for 3 different laptops. Then print out the second laptop's model.

// # 9 Make a hash to store definitions for 2 different words. Then add a new word and definition and print the hash to see the result.

// # 10 Make a hash to store a shirt's brand, color, and size. Then print each attribute on separate lines.