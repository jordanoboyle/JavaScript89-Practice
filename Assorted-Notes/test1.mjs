import { PythonShell } from 'python-shell';

// Define your Python script
const pythonScript = `
print('Hello from Python!')
`;

// Run the Python script
PythonShell.runString(pythonScript, null, function (err, results) {
  if (err) { 
    console.log("error: ", err);
    return;
  } 
  console.log("Python executed properly.");
  console.log('Python script output:', results);
  
});


//There is an interesting quark with JS here. CommonJS and ES modules are different. Node will run both, but in the syntax for importing is different between CommonJS and ES.

// CommonJS

// module.exports.add = function(a, b) {
//   return a + b;
// }

// module.exports.subtract = function(a, b) {
//   return a - b;
// }

// To import these in another CommonJS file:

// const {add, subtract} = require('./<path to file>')

// If we want to use modern ES importing feature (think REACT and other frameworks)
// We simply change the file from .js to .mjs 
// This allows us to:

// //utils.mjs
// export function add(a, b) {
//   return a + b;
// }
// export function subtract(a, b) {
//   return a - b;
// }


// //app.mjs
// import {add, subtract} from "./utils.mjs"

// //The above should look very familiar considering this is how we import features and functions within jsx formatting and syntax. 