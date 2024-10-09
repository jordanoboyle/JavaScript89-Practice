
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
  // let testingTeam = [];

  let highTeamScore = [comps[0][0], 0];

  for (let i = 0; i < comps.length; i++) {
    let homeTeam = comps[i][1];
    let awayTeam = comps[i][0];

    if (pointTotals[homeTeam] === undefined) {
      pointTotals[homeTeam] = 0;
    } 
    if (pointTotals[awayTeam] === undefined) {
      pointTotals[awayTeam] = 0;
    }

    if (results[i] === 0) {
      pointTotals[homeTeam] += 3;
      if (pointTotals[homeTeam] > highTeamScore[1]) {
        highTeamScore = [homeTeam, pointTotals[homeTeam]]
      }
    } else {
      pointTotals[awayTeam] += 3;
      if (pointTotals[awayTeam] > highTeamScore[1]) {
        highTeamScore = [awayTeam, pointTotals[awayTeam]]
      }
    }
  }

  return highTeamScore[0];
}

console.log(determineTournamentWinner(competitions, createOneZeroRandomArray(competitions)));

let competitions2 = [
  ["HTML", "Java"],
  ["Java", "Python"],
  ["Python", "HTML"],
  ["C#", "Python"],
  ["Java", "C#"],
  ["C#", "HTML"]
];
let results2 = [0, 1, 1, 1, 0, 1];

console.log(determineTournamentWinner(competitions2, results2));