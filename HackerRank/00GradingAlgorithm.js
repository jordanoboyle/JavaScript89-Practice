let studNum = 4;
let grades = [73, 67, 38, 33];

function gradingHackerU(studentNum, gradeArray) {
  let grades = [];
  let compare = [];
  for (let j = 40; j <= 100; j += 5) {
    compare.push(j);
  }
  gradeArray.forEach(g => {
    if (g < 38) {
      grades.push(g)
    } else if (g >= 38) {
      compare.forEach(scale => {
        if (scale - g <= 2 && scale - g >=0) {
          grades.push(g + (scale - g))
        } else if (scale - g >= 2) {
          grades.push(g); ///SOMEWHERE IN HERE I NEED TO SKIP  TO NEXT ELEMENT IN FIRST LOOP
        }
      })
    }
  })
  return console.log(grades)
}
//print the grades out
//print out pass fail situations
//conditional pass fail and print array of pass fail
//We need something to compare the grades to? build an object or array?
///WE HAVE REACHED A STOPPING POINT, RETURN TOMORROW
//THOUGHT PROCESS IS TO COMPARE THE VALUE IN GRADEARRAY TO WHAT IT MAY BE IF YOU SUBTRACT OUR TRACKING ARRAY


gradingHackerU(studNum, grades);

// let fives = [];
// for (let j = 40; j <= 100; j += 5) {
//   fives.push(j);
// }
// console.log(fives);
