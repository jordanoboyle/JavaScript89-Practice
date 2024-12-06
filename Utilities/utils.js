
export function selectionSort(unsortArr) {

  let sortArr = unsortArr;
  let n = sortArr.length;

  for (let i = 0; i < n - 1; i++) {

    let minimumIndex = i;

    for (let j = i + 1; j < n; j++) {

      if (sortArr[minimumIndex] > sortArr[j]) {
        minimumIndex = j;
      }
    }

    if (minimumIndex !== i) {
      let temporary = sortArr[i];
      sortArr[i] = sortArr[minimumIndex];
      sortArr[minimumIndex] = temporary;
    }
  }
  return sortArr;
}

export function eliminateDuplicates(arr) {
  let checkAgainst = {};
  let dupElim = [];

  arr.forEach(value =>  {
    if (checkAgainst[value] !== true) {
      dupElim.push(value);
      checkAgainst[value] = true;
    }
  });

  return dupElim;
}

export function spaceBar() {
  let space = "";
  for (let i = 0; i < 20; i++) {
    space += "$";
  }
  return console.log(space);
}