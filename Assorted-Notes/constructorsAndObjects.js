function spaceBar() {
  let space = "";
  for (let i = 0; i < 20; i++) {
    space += "%";
  }
  return console.log(space);
}
let Dog = function() {
  this.name = "Harley";
  this.color = "black and white";
  this.numLegs = 4;
};
let Bird = function() {
  this.name = "Bruno";
  this.color = "red";
  this.numLegs = 2;
}
// Notes: Here we are covering the convention of constructors and their ability to produce instances of an object.
//This instance/object can be changed, but the constructor will not be modified as exampled below
let bully = new Dog();
console.log(bully);
spaceBar();

let terrier = new Dog();
terrier.name = "Kili";
terrier.color = "black";
console.log("This is bully instance");
console.log(bully);
console.log("This is terrier instance");
console.log(terrier);

spaceBar();

let parrot = new Bird();
console.log(terrier instanceof Bird); //=> false
console.log(terrier instanceof Dog); //=> true
console.log(parrot instanceof Dog); // => false
console.log(parrot instanceof Bird); //=> true