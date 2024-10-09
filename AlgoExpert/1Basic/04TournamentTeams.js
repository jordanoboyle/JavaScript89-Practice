
//Basics:
//We have an array of teams and an array of results of certain competitions between teams. 
//We want to record the winner of a round robin tournament where team plays all others once. 
// Each team is designated home or away, and in this case 0 is home and 1 is away.
//One team wins, each teams plays every other team, 

//Sample:

let competitions = [
  ["Terriers", "Bullies"],
  ["Bullies", "Labs"],
  ["Terriers", "Labs"],
  ["Setters", "Labs"],
  ["Setters", "Terriers"],
  ["Bullies", "Setters"]
];

function createOneZeroRandomArray(lengthCompArray) {
  let i = 0;
  let competitions = [];

  while (i < lengthCompArray.length) {
    let j = Math.floor(Math.random() * 2);
    competitions.push(j);
    i += 1;
  }
  return competitions;
}

// console.log(createOneZeroRandomArray(competitions));

//Creating a random competition array using Math API.
//test random comp function array creation
// create function that asigns a number to the brackets from competitions. 
// requires looping through two arrays at the same time (they are of equal lenght)

function determineTournamentWinner(comps, results) {
  let pointTotals = {};
  let testingTeam = [];


  console.log(results);

  for (let i = 0; i < comps.length; i++) {
    let team1 = comps[i][0];
    let team2 = comps[i][1];
    testingTeam.push([team1, team2, results[i]]);

    

    if (results[i] === 0) {
      if (pointTotals[team1] === undefined) {
        pointTotals[team1] = 3;
        if (pointTotals[team2] === undefined) {
          pointTotals[team2] = 0;
        }
      } else {
        pointTotals[comps[i][0]] += 3;
      }
    } else {
      if (pointTotals[team2] === undefined) {
        pointTotals[team2] = 3;
        if (pointTotals[team1 === undefined]) {
          pointTotals[team1] === 0;
        }
      } else {
        pointTotals[team2] += 3;
      }
    }
  }
  console.log(testingTeam);
  console.log(pointTotals);
}

determineTournamentWinner(competitions, createOneZeroRandomArray(competitions));