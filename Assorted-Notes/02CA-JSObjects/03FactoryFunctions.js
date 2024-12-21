import { spaceBar } from "../../Utilities/utils.js";

const monsterFactory = (name, age, energySource, catchPhrase) => {
  return { 
    name: name,
    age: age, 
    energySource: energySource,
    scare() {
      console.log(catchPhrase);
    } 
  };
};


//Factory functions are designs to make lives easier. They can have parameters allowing us to customize the object that gets returned. 

//We can create a quite object in memory. 

const ghost = monsterFactory(
  "Ghouly",
  251,
  "ectoplasm",
  "BOO!"
);

spaceBar();

//Let us build our own factory. 

const robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep(phrase) {
      console.log(phrase);
    }
  };
};

const whiteClone = robotFactory("TK421", true);

console.log(whiteClone);

whiteClone.beep("I work on the death star");


