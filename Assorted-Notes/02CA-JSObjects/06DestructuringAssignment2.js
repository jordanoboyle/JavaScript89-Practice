import { spaceBar } from "../../Utilities/utils.js";

//Here we are showing what can be done with object properties and methods.

const robot = {
  model: "C3PO",
  energyLevel: 100,
  functionality: {
    introduce() {
      console.log("I am C3PO, human cyborg relations.");
    },
    fluency() {
      console.log("I am fluent in over 4 billion forms of communication.");
    }
  }
};


console.log(robot.energyLevel);
console.log(robot.model);

spaceBar();

const {functionality} = robot;

functionality.introduce();

functionality.fluency();