let studNum = 4;
let grades = [73, 67, 38, 33];

function gradingHackerU(studentNum, gradeArray) {
  let grades = [];
  let compare = [];
  for (let j = 40; j <= 100; j += 5) {
    compare.push(j);
  }

  for (let i = 0; i < gradeArray.length; i++) {
    if (gradeArray[i] < 38) {
      grades.push(gradeArray[i]);
    } else if (gradeArray[i] >= 38) {
      for (let k = 0; k < compare.length; k ++) {
        if (gradeArray[i] >= compare[k] && (compare[k + 1] - gradeArray[i]) < 3) {
          console.log("don't touch");
          console.log(gradeArray[i]);
        }
      }
    }
  }
  return console.log(compare, grades);
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