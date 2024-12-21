import {spaceBar} from "../../Utilities/utils.js";

const person = {
  _firstName: 'John',
  _lastName: 'Doe',
  get fullName() {
    if (this._firstName && this._lastName){
      return `${this._firstName} ${this._lastName}`;
    } else {
      return 'Missing a first name or a last name.';
    }
  }
}

// To call the getter method: 
console.log(person.fullName); // 'John Doe'



spaceBar();
//This is some practice for the getter or Getter Methods.
//Basically they get and return internal object properties. 

const robot = {
  _model: "1E78V2",
  _energyLevel: 100,

  //HERE IS THE GETTER METHOD

  get energyLevel() {
    if (typeof(this._energyLevel) === "number") {
      
      return `My current energy level is ${this._energyLevel}`;
      //WE NEED TO ACCOUNT FOR WETHER THE OBJECT DOES NOT HAVE CERTAIN PROPERTIES.
    } else {
      return "System Malfunction: Cannot retrieve the energy level";
    }
  }
};

console.log(robot.energyLevel);