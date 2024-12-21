const monsterFactory = (name, age) => {
  return { 
    name: name,
    age: age
  }
};


//We are going to cover the act of destructuring. 

const monsterFactory2 = (name, age) => {
  return { 
    name,
    age 
  }
};


//THINK ABOUT IT LIKE THIS. It shortens the structuring. 

const robotFactory = (model, mobile) => {
  return {
    model,
    mobile,
    beep(phrase) {
      console.log(phrase);
    }
  };
};

const newRobot = robotFactory("C3-PO", false);

console.log(newRobot.model);
console.log(newRobot.mobile);
newRobot.beep("I am C3-PO, human cyborg relations.");


//This has been used in some of the small projects I have done. 