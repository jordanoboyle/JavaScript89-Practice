const higherOrderFunc = param => {
  console.log(param());
  return `I just invoked ${param.name} as a callback function.`;
};

const anotherFunction = () => {
  return 'I\'m being invoked by the higher order function.';
};

console.log(higherOrderFunc(anotherFunction));

//This is how higher order functions work. On a high level they can call a function as a parameter and then invoke that function within the code block contained within. Notice above how it works. First we define the high order function, and give it a parameter.
//This parameter is designed to be another function, but in order to invoke it as a CALLBACK we need to give it the parantheses to invoke it within the higher order function. 
//Callback functions are a frequent occurrence in web development, but not uncommon elsewhere either. 


//While redundant, the function below invokes a callback and is a high order function. 
const checkIfEven = (func, value) => {
  let isEven = func(value);

  return isEven;
};

function checkForEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(checkIfEven(checkForEven, 8));

console.log("%%%%%%%%%%%%%%%%%%");


//Here is another example of a high order function that checks the results of the callback function
const addTwo = num => {
  return num + 2;
}

const checkConsistentOutput = (func, val) => {
  let checkA = val + 2;
  let checkB = func(val);

  if (checkA === checkB) {
    return func(val);
  } else {
    return "inconsistent result"
  }
}

console.log(checkConsistentOutput(addTwo, 3));




