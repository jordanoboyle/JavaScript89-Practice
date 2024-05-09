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
  console.log("this function works")
}
add()