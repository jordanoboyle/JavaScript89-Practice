// 8. Combine data from a hash with names and prices and an array of hashes with names, colors, and weights to make a new hash.
// For example, {"chair": 75, "book": 15, "table": 85} and [{name: "chair", color: "red", weight: 10}, {name: "book", color: "black", weight: 1}, {name: "table", color: "green", weight: 25}] 
// becomes {"chair" : {price: 75, color: "red", weight: 10}, "book" : {price: 15, color: "black", weight: 1}, "table" : {price: 85, color: "green", weight: 25}}.

let namePrice = {"chair": 75, "book": 15, "table": 85};
let description = [{name: "chair", color: "red", weight: 10}, {name: "book", color: "black", weight: 1}, {name: "table", color: "green", weight: 25}];

function addingPrice(priceNameHash, description) {
  let itemDetails = {};

  for (let i = 0; i < description.length; i++) {
    itemDetails[Object.keys(priceNameHash)[i]] = 
      {
        "price" : Object.values(priceNameHash)[i],
        "color" : description[i]["color"],
        "weight": description[i]["weight"]
      };
  }
  return itemDetails;
}

console.log(addingPrice(namePrice, description));


//This is a pretty easy read, though you could turn it into a nested loop for situations where
//you want to test the item in namePrice against the item in description (make sure for matching)
//Dry it out by introducing variables and making it more readable. 