import { spaceBar } from "../../Utilities/utils.js";

const person = {
  _age: 37,
  set age(newAge) {
    if (typeof newAge === 'number') {
      this._age = newAge;
    } else {
      console.log('You must assign a number to age');
    }
  }
};

console.log(person._age);

person.age = 45;

console.log(person._age);
// This should be remembered from creating objects in Ruby and Python. Each language having a different way to define methods and properties. 

//Syntactically it is like we are reassigning the value of a property. 

//Setter methods that include checking input, performing actions on properties, and displaying a clear intention for how the object is to be used. 

//NOTICE WE CAN STILL CHANGE IT DIRECTLY.

person._age = 'forty-five';

console.log(person._age); //notice the slight difference here. 


spaceBar();

//THIS IS A BUILD TO PRACTICE SETTER METHODS
const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,

  set numOfSensors(number) {
    if (typeof(number) === 'number' && number >= 0) {
      this._numOfSensors = number;
    } else {
      console.log("Pass in a number that greater than or equal to 0.");
    }
  },

  set addEnergyLevel(levelNumber) {
    if (typeof(levelNumber) === "number" && this._energyLevel > 0) {
      this._energyLevel += levelNumber;
    } else { 
      console.log("You must add energy in positive amounts.");
    }
  }

};

console.log(robot._numOfSensors);

robot.numOfSensors = 55;

console.log(robot._numOfSensors);

spaceBar();

console.log(robot._energyLevel);

robot.addEnergyLevel = 30;

console.log(robot._energyLevel);