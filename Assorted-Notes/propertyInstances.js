function Bird(name, color) {
  this.name    = name;
  this.color   = color;
  this.numLegs = 2;
}

let canary = new Bird("Tweety", "yellow");

let canaryProps = [];

for (let property in canary) {
  if (canary.hasOwnProperty(property)) {
    canaryProps.push(property);
  }
}
console.log(canaryProps);

Bird.prototype.numWings  = 4;
Bird.prototype.beakExist = true;

console.log("The whole OwnProperty Object");
console.log(canary);
console.log("The prototypeProperty stored in all birds above.");
console.log(canary.numWings);

console.log("-----------------");

let ownProperties       = []
let prototypeProperties = []
for (let property in canary) {
  if (canary.hasOwnProperty(property)) {
    ownProperties.push(property);
  } else {
    prototypeProperties.push(property);
  }
}

console.log("For comparison, here is instance");
console.log(canary);
console.log("Here are the prototype properties");
console.log(canary.numWings); // => 4
console.log(canary.beakExist); // => true
console.log("OwnProperties of constructor");
console.log(ownProperties);
console.log("Prototypes");
console.log(prototypeProperties);
