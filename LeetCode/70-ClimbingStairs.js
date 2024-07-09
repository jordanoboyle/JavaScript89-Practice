// //Climbing Stairs (question 70)
// // You are climbing a staircase. It takes n steps to reach the top.
// // Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:
// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Example 2:
// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step


//Working out the steps needed:
// let's first work out 4
// 1. 1 S + 1 s + 1 s + 1 s
// 2. 1 s + 1 s + 2 s
// 3. 1 s + 2 s + 1 s
// 4. 2 s + 1 s + 1 s
// 5. 2 s + 2 s
//NOTICE THAT THE NUMBER OF COMBINATIONS IS INCREASING BY 1, THEN 2, THEN 3?  So there is a pattern here. The pattern is fibonacci...so maybe we find what nth value of the Fib sequence is. 

//1. 1s + 1s + 1s + 1s + 1s
//2. 2s + 1s + 1s + 1s
//3. 1s + 2s + 1s + 1s
//4. 1s + 1s + 2s + 1s
//5  1s + 1s + 1s + 2s
//6  2s + 2s + 1s
//7  2s + 1s + 2s
//8  1s + 2s + 2s 

//If we look at out pattern above, we notice that the fibonacci sequence is revealed if we manually count the different combinations (this thing shows up everywhere! Pascals triangle for example). Which would stand to reason that the fib number associated to the "index" of n would be our step combinations throughout no matter how high the requested number of steps is. 

//CODE
//DYNAMIC (need mod to account for n being 0 or 1)
function climbStairs(n) {
  let fibIt = n;
  let currentFib = 0;
  let firstFib = 0;
  let secondFib = 1;
  
  if (fibIt === 0 || fibIt === 1) {
    return fibIt;
  } else {
    for (let i = 0; i < fibIt; i++) {
      currentFib = firstFib + secondFib;
      let temp = secondFib;
      firstFib = temp;
      secondFib = currentFib;

    }
  }
  return console.log(currentFib);

}
climbStairs(45);
climbStairs(1);
climbStairs(0);
climbStairs(23);

//RECURSIVE
function stairsInRecursive(n) {

  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else if (n === 2 ) {
    return 2;
  } else {
    return stairsInRecursive(n - 1) + stairsInRecursive(n - 2);
  }
}
console.log(stairsInRecursive(23));

//Two Solutions to the same problem. 
//Big O: O(n) for the dynamic solution and O(2^n) for the recursive. 
//recursion is has some neat use cases but can often be very slow in terms of time complexity. However, it is great for space-complexity. 