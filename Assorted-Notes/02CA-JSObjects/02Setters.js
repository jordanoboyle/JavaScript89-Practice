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

