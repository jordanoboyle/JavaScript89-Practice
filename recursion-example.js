function reverseString(str) {
  if (str === '')
    return '';
  else
    return  console.log(reverseString(str.substring(1)) + str.charAt(0));
}

console.log(reverseString("hello my name is"))
/* Very basically, the function continuously calls itself here until it meets the predetermined condition!
I won't pretend this is easy to visualize, but I will write a second recursive function below to further illustrate.
Let's also annotate.*/

function add(n) {
  if (n === 1) {
    return 1;
  } 
  
  // return n + (n - 1)
}

console.log(add(1))

// first make the function (this will go away with pratice)
// now lets get the result n + (n - 1)
// add conditional that says if n is 1, we don't use the function and return 1
// add recursive function call in else statement  COMMIT EACH OF THESE CHANGES.