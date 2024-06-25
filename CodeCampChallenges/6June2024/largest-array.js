function largestOfFour(arr) {
  let largest = [];
  arr.forEach(array => {
    let biggest = array[0];
    array.forEach(num => {
      if (biggest < num) {
        biggest = num;
      } else {
        biggest = biggest;
      }
    });
    largest.push(biggest);
  });
  return largest;
}

console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));