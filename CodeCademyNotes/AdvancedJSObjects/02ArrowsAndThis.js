//Covering using arrow functions with keyword 'this'

import { spaceBar } from "../../Utilities/utils.js";

// Using the arrow functions make more complicated in a few ways, thought still manageable. 

spaceBar();
//EXAMPLE:

const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet: () => {
    // console.log(this.dietType); //Why does this not work?
  }
};

goat.diet();
//Explanation: 
// On a high level, arrow functions bind/tie an already defined 'this' value to the function itself. NOT CALLING OBJECT
// above, 'this' is a global object (global scope), which does not have dietType property. Returning undefined. 


