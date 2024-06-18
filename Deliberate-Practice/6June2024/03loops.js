// 1. Write a ShoppingCart class that stores an array of items with methods to add an item, remove an item, and display all the items.

class ShoppingCart {
  constructor(items = []) {
    this.items = items;
  }

  addItem(item) {
    let newItem = item.toLowerCase();
    this.items.push(newItem);
  }

  removeItem(itemToRemove) {
    let newItem = itemToRemove.toLowerCase();
    let index = this.items.indexOf(newItem);
    this.items.splice(index, 1);
  }

  displayItems() {
    console.log("You have these items in the shoppingcart:");
    this.items.forEach(function(item) {
      console.log(item);
    });
  }
}

let listOne = new ShoppingCart(["bread", "milk", "cheese"]);

listOne.displayItems();
listOne.addItem("ORANGE JUICE");
listOne.displayItems();
listOne.removeItem("cheese");
listOne.displayItems();
