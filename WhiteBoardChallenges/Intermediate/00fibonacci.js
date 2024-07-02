// 3: Fibonacci Sequence: Write a program that generates the first n numbers in the Fibonacci sequence. The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the two preceding numbers.

function findFirstNNumsFib(n) {
  let fibStart = [0, 1];
  for (let i = 1; i < n - 1; i++) {
    fibStart.push(fibStart[i] + fibStart[i - 1]);
  }
  return console.log(`These are the first ${n} numbers in the fibonacci sequence:`, fibStart);
}

findFirstNNumsFib(15);