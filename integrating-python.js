// Just for an advanced asside we are going to quick go over how we could use python to solve the 
//=== (strict equivalency) issue of Map Objects

/* To strictly discuss this. There are three options. 
1: write the backend code in python then pass the data to JavaScript on the front end. (always viable)
2: Integrate Python into Node.js code using 'python-shell', allows for integration of python scripts in node.js
3: Maintain both Python code and javascript components and use as needed. Python for data processing, pass results back to JS

Example of using 2: */


const { PythonShell } = require('python-shell');

//Here we define the Python Script
const pythonScript =`
print("this is a string printed from the python shell")
`; // back ticks are needed here


console.log("print this for error check");
//Run the python script in node.js
PythonShell.runString(pythonScript, null, function (err, results){
  if (err) throw err;
  console.log('Python script output: ', results);
  //parse the output if needed
});

console.log("this comes after the shell output")

//this should work, but as of right now I am out of luck