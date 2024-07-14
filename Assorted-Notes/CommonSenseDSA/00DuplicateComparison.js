// Here we are taking a look at the Big O situation in looking for a duplicate value within an array. 
// First is the simplest way to compar values within a singular array and that is to compara each element to every other element using a nested loop. This can be done and for small arrays it is not really a problem, however, when you get to much larger arrays it begins to bog down because te time complexity is N^2 for the worst case scenario. (obviously we have to keep in mind that we often never face worst case, but still important to understand.)
let numerals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 10, 11, 11];


function hasDuplicateValue(array) {
  let stepsNeeded = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      stepsNeeded++; // here we are just recording the number of steps we need tp complete the 'search'
      if (i !== j && array[i] === array[j]) {
        console.log(stepsNeeded);
        return true;
      }
    }
  }
  console.log(stepsNeeded); //this will only print is no dups were located
  return false;
}
console.log(hasDuplicateValue(numerals));
//QA (quick analysis): Biggest take away is the nested loop factor, especially when we are looking at an array such as numerals. This would be worst case where the data is duplicated, but only at the end. We are using "linear" algorithm to reach that conclusion (checking the values one at a time). The nested aspect means that as the data doubles, the number of steps increases exponentially.

//Here we will show a linear solution that presents with Big O notation of O(N). This is fundementally because we are only doing on loop so when the data doubles we are only increasing our fundamental number of steps by the increase in the elements of data. (both array temps or object temps could be used here)

function hasDupValueLinearVers(array) {
  let stepRecord = 0
  let existingValues = [];
  for (let i = 0; i < array.length; i++) {
    stepRecord++;
    if (existingValues[array[i]] === 1) {
      console.log(stepRecord);
      return true;
    } else {
      existingValues[array[i]] = 1;
    }
  }
  console.log(stepRecord);
  return false;
}
console.log(hasDupValueLinearVers(numerals));

//QA  If we look here we are only using one loop to power through the array. And we are assigning the existingValues array[i] index value a 1. This allows for direct lookup which is not incumbered by a loop. Much faster and less step intensive. Check the print out to see for yourself. 
