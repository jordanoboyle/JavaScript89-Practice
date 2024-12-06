import { spaceBar } from "../../Utilities/utils.js";

//Here we will discuss the privacy convention for JS Objects. 

//Accessing and updating objects is pivotal in working with objects (in any language);
//However, we often do not want other code screwing with object properties. 
//Other languages have built in measures, JS does not. '_' is often the convention to imply this. 

//General convention:

const bankAccount = {
  _amount: 1000,
};

// while _ denotes the idea that it should not be altered, we can still change it. 

bankAccount._amount = 15000;

console.log(bankAccount._amount);

spaceBar();


//This will produce a funky string, which is an unwanted side-effect of mutating objects and their properties. 
const robot = {
  _energyLevel: 100,
  recharge() {
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
};


robot._energyLevel = 'high'

robot.recharge()

