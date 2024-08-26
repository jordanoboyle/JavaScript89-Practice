// 9. Use a nested loop to create an array of objects from two arrays.

// Example: ["name", "age"] and ["Alice", 25, "Bob", 30] becomes [ {name: "Alice", age: 25}, {name: "Bob", age: 30} ].


const labels = ["name", "age"];
const nameAges = ["Alice", 25, "Bob", 30];

function createArrayOfObjects(labelArray, nameAgeArray) {
  let objectArray = [];
  for (let i = 0; i < nameAgeArray.length; i += 2) {
    let label1 = labelArray[0];
    let label2 = labelArray[1];
    objectArray.push({[label1]: nameAgeArray[i], [label2]: nameAgeArray[i + 1]});
  }
  return objectArray;
}

console.log(createArrayOfObjects(labels, nameAges));

function createArrayOfObjects2(labelArray, nameAgeArray) {
  let objectArray = [];

  let i = 0;
  while (i < nameAgeArray.length) {
    objectArray.push({
      [labelArray[0]]: nameAgeArray[i], 
      [labelArray[1]]: nameAgeArray[i + 1]
    });
    i += 2;
  }
  return objectArray;
}

console.log(createArrayOfObjects2(labels, nameAges));
