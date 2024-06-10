// SET 4 WRITE CUSTOM CLASS WITH COMPLEX ATTRIBUTES
function spaceBar() {
  let space = "";
  for (let i = 0; i < 20; i++) {
    space += "%";
  }
  return console.log(space);
}
// 1. Write a ShoppingCart class that stores an array of items with methods to add an item, remove an item, and display all the items.
class ShoppingCart {
  constructor(items = []) {
    this.items = items;
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(itemToRemove) {
    const index = this.items.indexOf(itemToRemove);
    if (index > -1) {
      this.items.splice(index, 1);
    } else {
      console.log("Item must be in list to remove.");
    }
  }

  displayItems() {
    console.log("Items in the cart: ");
    this.items.forEach(item => {
      console.log("- " + item);
    });
  }
}

let listOne = new ShoppingCart(["apples", "pears", "rasberries", "carrots"]);
listOne.displayItems();
listOne.removeItem("pears");
listOne.displayItems();
listOne.addItem("salmon");
listOne.displayItems();
listOne.removeItem("salmons");

spaceBar();

// 2. Write a Product class that stores the name, price, and metadata, where metadata is a hash that stores additional information about the product.

class Product {
  constructor(name, price, metadata = {brand: "", color: ""}) {
    this.name = name;
    this.price = price;
    this.metadata = metadata;
  }

  displayMetaData() {
    console.log(`${this.name} is made by ${this.metadata.brand} and has the color ${this.metadata.color}`);
  }

  adjustColor(diffColor) {
    this.metadata.color = diffColor;
  }
}
let itemOne = new Product("Lounge Chair", 56, {brand: "Lay-Z-Boy", color: "Shiny Black"});
console.log(itemOne);
itemOne.displayMetaData();
itemOne.adjustColor("Red Suade");
console.log(itemOne);


// 3. Write a Playlist class that stores a name and an array of songs with methods to add a song, remove a song, shuffle the songs into a random order, and display all the songs.

// 4. Write a Contact class that stores the name, age, and contact_info, where contact_info is a hash that stores any additional information about the contact.