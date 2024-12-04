// Non-constructible change

//Here we have three arrays that reach no higher than a max of 30
// We want to get the lowest minimum value that we can create with our coins. 

const array1 = [3, 1, 7, 1, 4, 1, 9, 3]; // Duplicate: 1, 3
const array2 = [8, 5, 2, 1, 5, 9, 5];    // Duplicate: 5, 1
const array3 = [6, 3, 1, 3, 6, 7, 1, 6]; // Duplicate: 1, 3, 6
const array4 = [10, 7, 9, 10, 8, 7, 5];  // Duplicate: 7, 10




function nonConstructibleChange(arr1) {
  let sortedCoins = arr1.sort((a, b) => a - b);

  let minimumChange = 0;


  for (let i = 0; i < sortedCoins.length; i++) {

    if (sortedCoins[i] > minimumChange + 1) {
      return minimumChange + 1;
    } else {
      minimumChange += sortedCoins[i];
    }
  }
  
  return minimumChange + 1;
}

console.log(array1.sort((a,b) => a - b));
console.log(array2.sort((a,b) => a - b));
console.log(array3.sort((a,b) => a - b));
console.log(array4.sort((a,b) => a - b));

(console.log(nonConstructibleChange(array1)));
(console.log(nonConstructibleChange(array2)));
(console.log(nonConstructibleChange(array3)));
(console.log(nonConstructibleChange(array4)));


//we need to iterate through this arr 

//HERE I WANT TO BRUTE FORCE THIS SITUATION
// const array5 = [3, 1, 7, 1, 4, 1, 9, 3];

// let arrayOfChange = [];

// for (let i = 0; i < array5.length; i++) {
  
// }