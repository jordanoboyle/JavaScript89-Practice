function spaceBar() {
  let space = "";
  let i = 0;
  while (i < 20) {
    space += "%";
    i++;
  }
  return console.log(space);
}

// 8. Combine data from a hash with names and prices and an array of hashes with names, colors, and weights to make a new hash.
// For example, {"chair" => 75, "book" => 15} and [{name: "chair", color: "red", weight: 10}, {name: "book", color: "black", weight: 1}] becomes {"chair" => {price: 75, color: "red", weight: 10}, "book" => {price: 15, color: "black", weight: 1}}.
let itemPrice = {"chair": 75, "book": 15};
let prodTraits = [{name: "chair", color: "red", weight: 10}, {name: "book", color: "black", weight: 1}];
let combineTraitPrice = {};


let i = 0;
Object.entries(itemPrice).forEach(([key, value]) => {
  prodTraits[i].price = value;
  delete prodTraits[i].name;
  combineTraitPrice[key] = prodTraits[i];
  i++;
});
console.log(combineTraitPrice);

spaceBar();
// 9. Convert an array of hashes into a hash of arrays, using the author as keys and the titles as values.
// For example, [{author: "Jeff Smith", title: "Bone"}, {author: "George Orwell", title: "1984"}, {author: "Jeff Smith", title: "RASL"}] becomes {"Jeff Smith" => ["Bone", "RASL"], "George Orwell" => ["1984"]}.
let authorTitles = [{author: "Jeff Smith", title: "Bone"}, {author: "George Orwell", title: "1984"}, {author: "Jeff Smith", title: "RASL"}];
let writerBook = {};

authorTitles.forEach(element => {
  let author = element.author;
  let title = element.title;
  if (writerBook[author] === undefined) {
    writerBook[author] = [title];
  } else {
    writerBook[author].push(title);
  }
});
console.log(writerBook);

// 10. Given a hash, create a new hash that has the keys and values switched.
// For example, {"a" => 1, "b" => 2, "c" => 3} becomes {1 => "a", 2 => "b", 3 => "c"}.



// 2. Write a function to generate/print/store the first “n” prime numbers.
// function firstNPrimes(n) {

// }
//need to check wether and number is prime first
// then write a loop that continuously checks prime and inserts it into array
//compar array length to n




// 2. Write a Product class that stores the name, price, and metadata, where metadata is a hash that stores additional information about the product.