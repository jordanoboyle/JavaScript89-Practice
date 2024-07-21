function spaceBar() {
  let space = "";
  for (let i = 0; i < 20; i++) {
    space += "%";
  }
  return console.log(space);
}

// 3. Given a tic-tac-toe board (matrix of 3 x 3), write a function that can check to see whether X or O won.


let ticTacToe = [
  ["x", "o", "x"], 
  ["o", "x", "o"], 
  ["x", "x", "o"]];

function findTheWinner(compG) {
  let winner = "";

  for (let i = 0; i < compG.length; i++) {
    if (compG[i][0] === compG[i][1] && compG[i][0] === compG[i][2]) {
      winner = compG[i][0];
      break;
    }
    if (compG[0][i] === compG[1][i] && compG[0][i] === compG[2][i]) {
      winner = compG[0][i];
      break;
    }
  }
  if (!winner) {
    if (compG[0][0] === compG[1][1] && compG[0][0] === compG[2][2] && compG[0][0] !== "") {
      winner = compG[0][0];
    } else if (compG[0][2] === compG[1][1] && compG[0][2] === compG[2][0] && compG[0][2] !== "") {
      winner = compG[0][2];
    }
  }
  
  if (winner) {
    return (
      console.log(`The winner is ${winner.toUpperCase()}'s.`)
    );
  } else {
    return (
      console.log("There is no winner.")
    );
  }
}
findTheWinner(ticTacToe);

//Notes: This is my initial solution to this problem. It does the trick, but I am reasonably sure that their is a better method here, although it is not as if I did not use a few neat tricks here. We are using a loop to solve having to do any extra integer indexes, which is saving the need to perform more than just these conditionals. Otherwise, you would have to write conditionals for every line. Techincally this is also O(N). And in average case scenarios it is quite quick and does not increase memory complexity. 
spaceBar();



console.log(ticTacToe[1] + ticTacToe[2]);

//This is not mine but I wanted to write this out to have on hand for study. This uses an array to define the winning conditions and a method to break down the arrays within.

// Little more dry, but also a little more complex to set up in order to monitor every possibility. The time complexity is fundamentally the same [O(N)] with a space complexity that is "higher" given the array we had to make. 

function findWinner(compG) {
  let winner = "";

  // Define winning conditions
  const winningConditions = [
    // Rows
    [ [0, 0], [0, 1], [0, 2] ],
    [ [1, 0], [1, 1], [1, 2] ],
    [ [2, 0], [2, 1], [2, 2] ],
    // Columns
    [ [0, 0], [1, 0], [2, 0] ],
    [ [0, 1], [1, 1], [2, 1] ],
    [ [0, 2], [1, 2], [2, 2] ],
    // Diagonals
    [ [0, 0], [1, 1], [2, 2] ],
    [ [0, 2], [1, 1], [2, 0] ]
  ];

  //Here we are checking for all winning conditions. 
  for (const condition of winningConditions) {
    const [a, b, c] = condition;
    if (
      compG[a[0]][a[1]] && compG[a[0]][a[1]] === compG[b[0]][b[1]] && compG[a[0]][a[1]] === compG[c[0]][c[1]]
    ) {
      winner = compG[a[0]][a[1]];
      break;
    }
  }
  if (winner) {
    console.log(`Winner is ${winner.toUpperCase()}`);
  } else {
    console.log(`There is no winner.`);
  }

}

let TTT = [
  ["x", "o", "x"], 
  ["o", "x", "o"], 
  ["x", "x", "o"]];

findWinner(TTT);