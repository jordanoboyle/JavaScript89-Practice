// While loops have a unique "Do while" structure which we will practice here for use later. A unique property of a Do While loop is that it will always run at least one pass because the code block is executed before the condition is checked. 
let wordArray = ["arrange", "bat", "bird", "arrow", "Albeit", "alcove", "freedom"]; //=> 4
function numStartWithATwo(words) {
  let numWithA = 0;
  let i = 0;
  do {
    if (words[i][0].toLowerCase() === "a") {
      numWithA += 1;
    }
    i ++;
  }
  while (i < words.length);

  return console.log(numWithA);
}


console.log('Second Method');
numStartWithATwo(wordArray);

//There are use cases for this type of loop. If we are assured of the data being accessed this can provide and we always want the loop to assess the situation and the checks within no matter what the circumstances, this can come in handy. T
//this can be handy in situations where we might want user input where we desire the input to be postive or of a certain length, then this can cause a repeat until our desired condition is met. 
//CAVEAT, not used too often and you can always replace it with a traditional while loop or for loop with a break out statement. 

