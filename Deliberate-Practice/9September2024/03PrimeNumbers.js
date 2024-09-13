// 2. Write a function to generate/print/store the first “n” prime numbers.

function findThePrimes(n) {
  let primeArray = [];
  let num = 2;

  while (primeArray.length <= n) {
    let isPrime = true;
    for (let j = 2; j <= num - 1; j++) {
      if (num % j === 0) {
        isPrime = false;
        break;
      }  
    }
    if (isPrime) {
      primeArray.push(num);
    }
    num++
  }
  return primeArray;
}


console.log(findThePrimes(11));

