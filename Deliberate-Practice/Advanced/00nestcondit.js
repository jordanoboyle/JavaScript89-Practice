// SET 1 Write nested conditionals.
function spaceBar() {
  let space = "";
  for (let i = 0; i < 20; i++) {
    space += "#";
  }
  return console.log(space);
}

// 1. Write a program that stores a customer's age and a movie's time in two separate variables. Then calculate the price of a movie ticket based on the following conditions:

// If the age is 12 years old or younger, the ticket price is $5.
// If the age is between 13 and 59 years old and the movie is before 6 PM, the ticket price is $7. After 6 PM, the ticket price is $10.
// If the customer is 60 years old or older, the ticket price is $7. 
let personAge = 60;
let movieTime = 18.5;
function addTax(basePrice, taxRate) {
  let decTaxRate = taxRate / 100;
  let total = basePrice + (basePrice * decTaxRate);
  return total;
}

function moviePrice(age, time) {
  let ticketPrice = 0;
  if (age < 12) {
    ticketPrice = 5;
  } else if (age > 12 && age < 60) {
    if (time < 18) {
      ticketPrice = 7;
    } else {
      ticketPrice = 10;
    }
  } else if (age >= 60) {
    ticketPrice = 7;
  }
  return console.log(`The ticket will be $${addTax(ticketPrice, 12)}.`); 
}
moviePrice(personAge, movieTime);
spaceBar();

// 2. Write a program to store the type of book (regular, reference, or special collection) and the number of days its overdue. Then calculate the fine amount based on the following conditions:

// If the book is a regular book and overdue by up to 7 days, the fine is $1 per day.
// If the book is a regular book and overdue by more than 7 days, the fine is $2 per day.
// If the book is a reference book, there is no fine, regardless of the number of days overdue.
// If the book is a special collection book, the fine is $5 per day, regardless of the number of days overdue.
function fineTotal(bookType, daysOver, taxRate) {
  let fine = 0;
  if (bookType === "regular") {
    if (daysOver <= 7) {
      fine = daysOver;
    } else {
      fine = 7 + ((daysOver - 7) * 2);
    }
  } else if (bookType === "special collection") {
    fine = daysOver * 5;
  } else {
    fine = 0;
  }
  let total = fine + (fine * (taxRate / 100));
  return console.log(`Your total fine, including tax is ${total.toFixed(2)}`);
}
fineTotal("regular", 10, 10);
spaceBar();
// BONUS: write a method that generates a random book type, and random number of days for overdue to test your other method. 

// 3. Write a program that stores a person's order value and membership level (regular or premium). Then calculate a discount amount based on the following conditions:

// If the total order value is less than $50, there is no discount.
// If the total order value is between $50 and $100, the discount is 5% for regular customers and 10% for premium customers.
// If the total order value is greater than $100, the discount is 10% for regular customers and 15% for premium customers.
function memberPrice(memberLevel, orderValue, taxRate) { 
  if (memberLevel === "reg" || memberLevel === "prem") { 
    let preTaxTotal = 0;
    if (orderValue < 50) {
      preTaxTotal = orderValue;
    } else if (orderValue > 50 && orderValue <= 100) {
      if (memberLevel === "reg") {
        preTaxTotal = (orderValue - (orderValue * 0.05));
      } else {
        preTaxTotal = (orderValue - (orderValue * 0.10));
      }
    } else {
      if (memberLevel === "reg") {
        preTaxTotal = (orderValue - (orderValue * 0.10));
      } else {
        preTaxTotal = (orderValue - (orderValue * 0.15));
      }
    }
    let totalWithTax = preTaxTotal + (preTaxTotal * (taxRate / 100));
    return console.log(`You total plus tax is : $${totalWithTax.toFixed(2)}`);
  } else {
    return console.log("Please enter a valid membership level.");
  }
}
memberPrice("reg", 120, 10);
spaceBar();
// 4. Write a Ruby program that stores the weight of a package and the destination (domestic or international). Then calculate the shipping fee based on the following conditions:

// If the destination is domestic:
// If the weight is less than or equal to 1 kg, the shipping fee is $5.
// If the weight is greater than 1 kg, the shipping fee is $10.
// If the destination is an international shipment:
// If the weight is less than or equal to 1 kg, the shipping fee is $15.
// If the weight is greater than 1 kg, the shipping fee is $25.

function packagePrice(weight, destination, taxRate) {
  let decTaxRate = taxRate / 100;
  if (destination === "domestic" || destination === "international") {
    if (destination === "domestic") {
      console.log("domestic pass");
    } else {
      console.log("international pass");
    }
  } else {
    console.log("Please enter valid destination");
  }
}

packagePrice(1.2, "domestic", 10);