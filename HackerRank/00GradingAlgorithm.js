let studNum = 4;
let grades = [73, 67, 38, 33];

function gradingHackerU(gradeArray) {
  let scaling = [];

  gradeArray.forEach(g => {
    if (g < 38) {
      scaling.push(g);
    } else if (g >= 38) {
      let factor = g % 10;
      if (10 - factor <= 2 && 10 - factor >= 0) {
        scaling.push(g + (10 - factor));
      } else if (5 - factor <= 2 && 5 - factor >= 0) {
        scaling.push(g + (5 - factor));
      } else {
        scaling.push(g);
      }
    }
  });
  return console.log(scaling);
}

gradingHackerU(studNum, grades);

// here we have a factoring modulo solution. I believe lines 10 to 18 can be refactored into something similar. 
// It is also possible to use regex here (you just where you would convert the number after matching)
// There
