import { spaceBar } from "../../Utilities/utils.js";


//These are notes pertaining to practicing with "this" keyword in JS

const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  }
};
//Like above, js objects can store data and functionality as desired. Functionality in the form of methods. 

//Example:
goat.makeSound(); //--> "baaa"

spaceBar();

const sheep = {
  dietType: 'herbivore',
  makeSound() {
    console.log('bleeeet');
  },
  diet() {
    // console.log(dietType) //uncomment this to try out what happens.
    console.log(this.dietType); //this keyword is required. refers to local variables/values in object. 
  }
}

sheep.diet();

//On a high level, THIS references the 'calling object', or the object we are within. 
//The calling object in this case is 'sheep'. this.dietType, or dot notation

const robot = {
  model: "1E78V2",
  energyLevel: 100,
  provideInfo() {
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
  }
};

console.log(robot.provideInfo())