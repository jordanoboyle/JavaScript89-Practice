// 2. Write a function to generate/print/store the first “n” prime numbers.

function findFirstNPrimes(desiredPrimes) {
  //you can do this with recursion, but in a lot of ways it is typically faster to not do so

  let n = desiredPrimes;
  let primes = [];
  let start = 2;

  while (primes.length <= n ) {
    let isPrime = true;
    for (let j = 2; j < start - 1; j++) {
      if (start % j === 0 ) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(start);
    }
    start++;
  }
  return primes;
}
  
  console.log(findFirstNPrimes(30))