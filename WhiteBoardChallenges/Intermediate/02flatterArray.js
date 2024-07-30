// Description:
// Write a function flattenArray that takes an array containing nested arrays and returns a new array with all elements flattened to a single level.

const nestedArray = [1, [2, 3], [4, [5, 6]], 7, [[8, 9], 10]];
// const result = flattenArray(nestedArray);
// console.log(result);

// // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function flattenTheArray(arr) {
//   let nArr = [];
//   let ogArr = arr;
//   if (arr.includes(Array) !== true) {
//     return arr;
//   } else {
//     arr.forEach(nest => {
//       if (Array.isArray(nest)) {
//         nest.forEach(element => {
//           nArr.push(element);
//         });
//       } else {
//         nArr.push(nest);
//       }
//     });
//     return flattenTheArray(nArr);
//   }
// }
// console.log(flattenTheArray(nestedArray));
//ABOVE I WAS VERY CLOSE. EFFECTIVELY RECURSION WAS THE ANSWER BUT I WAS IMPLEMENTING THE RECURSIVE CALL IN THE WRONG SPOT. TWO METHODS SUPPLIED BELOW ARE HOW TO SOLVE THIS ISSUE

//using concat (which combines flattened arrays into a single array)
function flattenArrayOne(arr) {
  let nArr = [];

  arr.forEach(nest => {
    if (Array.isArray(nest)) {
      nArr = nArr.concat(flattenArrayOne(nest));
      //if the element is an array, flatten it recursively and concatenate it
    } else {
      nArr.push(nest);
    }
  })
  return nArr;
}
console.log("This is recursive using concat.")
console.log(flattenArrayOne(nestedArray));

function flattenArrayTwo(arr) {
  let nArr = [];

  arr.forEach(nest => {
    if (Array.isArray(nest)) {
      const flatNest = flattenArrayTwo(nest);
      flatNest.forEach(element => {
        nArr.push(element);
      });
    } else {
      nArr.push(nest);
    }
  })
  return nArr;
}
console.log("Without using concat");
console.log(flattenArrayTwo(nestedArray));

const test = [1, 2, [3, 4]];

console.log(test.includes(Array));

//I was thinking recursion...which makes sense. 
//But i am also struggling with retaining my changes to the temp array
