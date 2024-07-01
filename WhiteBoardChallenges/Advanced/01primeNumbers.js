// 5: Prime Numbers: Write a program that determines whether a given integer n is a prime number. A prime number is a positive integer greater than 1 that has no positive integer divisors other than 1 and itself.

function primeNumbers(num) {
  let primeArray = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === num || num % i === 0 ) {
      primeArray.push(i);
    }
  }
  if (primeArray.length === 2) {
    return console.log(`${num} is a prime number`);
  } else {
    return console.logt(`${num} is not a prime number`)
  }
}

primeNumbers(5);

function findThePrimes(num) {
  return console.log("stuff");
}

function divisorsOfNumber(num) {
  let allNeedDivide = [];
  for (let i = num; i >= 1; i--) {
    allNeedDivide.push(i);
    console.log(i);
  }
  let divisors = [];
  allNeedDivide.forEach(function(div) {
    if (num % div === 0) {
      divisors.push(div);
    }
  });
  return console.log(divisors);
  
}

divisorsOfNumber(121);