// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

// Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.

function mutation(arr) {
  let stringOne = arr[0].toLowerCase();
  let splitParamTwo = arr[1].toLowerCase().split("");
  let trueFalse = true;
  for (let i = 0; i < splitParamTwo.length; i++) {
    if (stringOne.includes(splitParamTwo[i])) {
      trueFalse = true;
    } else {
      trueFalse = false;
      break;
    }
  }
  return trueFalse;
}

console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));

'''COME BACK TO THIS ONE'''
// //RECURSIVE ANSWER
// function recursiveMutation(arr) {
//   let elementOne = arr[0].toLowerCase();
//   let elementTwo = arr[0].toLowerCase().split("");
//   function mutation(x, y) {
//     let trueFalse = true
//     if (y.length === 0) {
//       trueFalse = true;
//       return trueFalse;
//     } else if (x.inlcudes(y[0])) {
//       return mutation(x, y.splice(0, 1));
//     } else {
//       trueFalse = false;
//       return trueFalse;
//     }
//   }
//   return mutation(elementOne, elementTwo);
// }

// console.log(recursiveMutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
