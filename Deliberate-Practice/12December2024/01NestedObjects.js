// 6. Calculate the sum of nested values in an array of hashes.
// Example: [{a: {b: 1}}, {a: {b: 2}}, {a: {b: 3}}] becomes 6.

const array1 = [
  { a: { b: 2 } },
  { a: { b: 4 } },
  { a: { b: 6 } },
  { a: { b: 8 } },
  { a: { b: 10 } }
];
// Expected: 30 (2 + 4 + 6 + 8 + 10)

const array2 = [
  { a: { b: 1 } },
  { a: { b: -3 } },
  { a: { b: 5 } },
  { a: { b: 7 } },
  { a: { b: -2 } },
  { a: { b: 4 } },
  { a: { b: 6 } }
];
// Expected: 18 (1 + (-3) + 5 + 7 + (-2) + 4 + 6)

function sumNestedObjValues(arrNestObj) {
  //example: [{a: {b: 1}}, {a: {b: 2}}, {a: {b: 3}}]

  let sum = 0;
  for (let i = 0; i < arrNestObj.length; i++) {
    let addative = arrNestObj[i]["a"]["b"];

    sum += addative;
  }

  return sum;
}

console.log(sumNestedObjValues(array1));
console.log(sumNestedObjValues(array2));