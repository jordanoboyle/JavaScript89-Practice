import { spaceBar } from "../../Utilities/utils.js";

const vampire = {
  name: 'Dracula',
  residence: 'Transylvania',
  preferences: {
    day: 'stay inside',
    night: 'satisfy appetite'
  }
};


//A standard way to extract a value from an object is as follows:

const residence = vampire.residence;
console.log(residence);

spaceBar();

//There is a way to extract a little simpler. Meant to save some keystrokes

const { name } = vampire;
console.log(name);

spaceBar();

//we can also use it to grab nested objects

const {day} = vampire.preferences;
console.log(day);

const {night} = vampire.preferences;
console.log(night);