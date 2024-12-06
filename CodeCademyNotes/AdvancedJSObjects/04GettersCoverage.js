//Here we talk about Getters which are methods that get and return internal properties of an object. 

//EXAMPLE:
const person = {
  _firstName: 'John',
  _lastName: 'Doe',
  get fullName() {
    if (this._firstName && this._lastName) {
      return `${this._firstName} ${this._lastName}`;
    } else {
      return "Missing a first or last name.";
    }
  }
};


console.log(person.fullName);

//Pretty self explanatory, we are using get + a function with a conditional. Checking to make sure first and last exist. 
// access the properties with .this keyword. 
// Generally getter methods do not need parantheses, though there are exceptions to this rule.

//Benefits:
//Getters can perform an action on the data
//Getters can return different values using conditionals. 
//can access properties of calling object using .this
//functionality of the code is easier for others to understand. 

//DO NOT HAVE PROPERTIES SHARE SAME NAME AS GETTER FUNCTION (INFINITE STACK ERROR)

const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel() {
    if (typeof this._energyLevel === "number") {
      return `My energy level is ${this._energyLevel}.`;
    } else {
      return 'System malfunction: cannot retrieve energy level.';
    }
  }
};

console.log(robot.energyLevel);

//This is great example where we are using a getter to essentially protect the data in a way. 
//You can't have the data be anything but a number, otherwise the object will not 'respond' properly.
//We are essentiall throwing the error. 


