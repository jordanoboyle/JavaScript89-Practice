const { PythonShell } = require('python-shell');

// Define your Python script
const pythonScript = `
print('Hello from Python!')
`;

// Run the Python script
PythonShell.runString(pythonScript, null, function (err, results) {
  if (err) throw err;
  console.log('Python script output:', results);
});
