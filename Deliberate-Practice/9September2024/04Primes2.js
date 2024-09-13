// Three fold problems here. I am testing my memory to build a Prime number Identifier, N Prime number calculator, and a memory test of bubble sort (yes, I know, inefficient and I know why, but I still want to test me memory here.)

function calcNthPrimeNumbers (n) {
  let theseArePrime = [];

  let num = 2;
  
  while (theseArePrime.length < n) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(num); j++) {
      if (num % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      theseArePrime.push(num);
    }
    num++;
  }
  return theseArePrime;
}


console.log(calcNthPrimeNumbers(11));
console.log(calcNthPrimeNumbers(3));
console.log(calcNthPrimeNumbers(7));


console.log("%%%%%%%%%%%%%%%%%%%%%%");

function isThisNumPrime(n) {
  let isPrime = true;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      isPrime = false;
    }
  }

  return isPrime;
}

console.log(isThisNumPrime(11));
console.log(isThisNumPrime(32));
console.log(isThisNumPrime(177));

console.log("%%%%%%%%%%%%%%%%%%%%%%");

// Test Array 1 (Length: 7)
const testArray1 = [3, -1.5, 7.2, -8, 2.5, -0.5, 4];

// Test Array 2 (Length: 10)
const testArray2 = [15, -12, 0.3, 8.7, -45.2, 6, 1, -7.8, 9, 23];

// Test Array 3 (Length: 5)
const testArray3 = [-3.14, 2.71, -1, 0, 1.618];

// Test Array 4 (Length: 8)
const testArray4 = [50, -100, 25.5, -6.7, 13, -0.9, 30, 0.5];


function bubbleSort(unArray) {
  let sortedArray = unArray;

  let change = true;
  while (change) {
    change = false;
    for (let j = 0; j < sortedArray.length - 1; j++) {
      if (sortedArray[j] > sortedArray[j + 1]) {
        let temp = sortedArray[j];
        sortedArray[j] = sortedArray[j + 1];
        sortedArray[j + 1] = temp;
        change = true;
      }
    }
  }
  return sortedArray;
}

console.log(bubbleSort(testArray1));
console.log(bubbleSort(testArray2));
console.log(bubbleSort(testArray3));

// if (sortedArray[i] > sortedArray[i + 1]) {
//   sortedArray[i], sortedArray[i + 1] = sortedArray[i + 1], sortedArray[i];
// }
// i++;