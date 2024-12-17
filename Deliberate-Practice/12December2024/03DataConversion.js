//THIS IS A BIT OF A REFRESH TO KNOCK THE RUST OFF. 

// 8. Combine data from a hash with names and prices and an array of hashes with names, colors, and weights to make a new hash.
// For example, {"chair" => 75, "book" => 15, "table" => 85} and [{name: "chair", color: "red", weight: 10}, {name: "book", color: "black", weight: 1}, {name: "table", color: "green", weight: 25}] becomes {"chair" => {price: 75, color: "red", weight: 10}, "book" => {price: 15, color: "black", weight: 1}, "table" => {price: 85, color: "green", weight: 25}}.



const prices = { apple: 3, banana: 1, carrot: 2 };
const details = [
  { name: "apple", color: "red", weight: 0.2 },
  { name: "banana", color: "yellow", weight: 0.25 },
  { name: "carrot", color: "orange", weight: 0.3 }
];
// {
//   apple: { price: 3, color: "red", weight: 0.2 },
//   banana: { price: 1, color: "yellow", weight: 0.25 },
//   carrot: { price: 2, color: "orange", weight: 0.3 }
// }

const prices2 = { pen: 2, notebook: 5, eraser: 1 };
const details2 = [
  { name: "pen", color: "blue", weight: 0.05 },
  { name: "notebook", color: "green", weight: 0.5 },
  { name: "eraser", color: "white", weight: 0.1 }
];
// {
//   pen: { price: 2, color: "blue", weight: 0.05 },
//   notebook: { price: 5, color: "green", weight: 0.5 },
//   eraser: { price: 1, color: "white", weight: 0.1 }
// }

const prices3 = { phone: 500, laptop: 1000, tablet: 300 };
const details3 = [
  { name: "phone", color: "black", weight: 0.4 },
  { name: "laptop", color: "silver", weight: 2.5 },
  { name: "tablet", color: "gray", weight: 0.8 }
];

// {
//   phone: { price: 500, color: "black", weight: 0.4 },
//   laptop: { price: 1000, color: "silver", weight: 2.5 },
//   tablet: { price: 300, color: "gray", weight: 0.8 }
// }


function addPricesToItem(priceList, objectDetails) {
  let pricesToDetails = {};

  for (let i = 0; i < objectDetails.length; i++) {
    let name = objectDetails[i].name;
    
    pricesToDetails[name] = {
      price : priceList[name],
      color : objectDetails[i].color,
      weight : objectDetails[i].weight
    };
  }

  return pricesToDetails;
}

console.log(addPricesToItem(prices, details));
console.log(addPricesToItem(prices2, details2));
console.log(addPricesToItem(prices3, details3));