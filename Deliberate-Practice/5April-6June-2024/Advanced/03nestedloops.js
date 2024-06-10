


// 5. Use a nested loop to compute the sum of all the numbers in an array of number pairs.
// For example, [[1, 3], [8, 9], [2, 16]] becomes 39.
let numberPairs = [[1, 3], [8, 9], [2, 16]];
let sum = 0
numberPairs.forEach(function(pair) {
  pair.forEach(function(number) {
    sum += number;
  });
});
console.log(sum);


// 6. Use a nested loop with two arrays of numbers to create a new array of the sums of each combination of numbers.
// For example, [1, 2] and [6, 7, 8] becomes [7, 8, 9, 8, 9, 10].
let pair = [1, 2];
let triplet = [6, 7, 8];
let sumPairTriplet = [];

for (let i = 0; i < pair.length; i++) {
  for (let i2 = 0; i2 < triplet.length; i2++) {
    sumPairTriplet.push(pair[i] + triplet[i2]);
  }
}
console.log(sumPairTriplet);