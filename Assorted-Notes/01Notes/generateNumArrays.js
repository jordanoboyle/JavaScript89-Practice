//This is a quick study on generating number arrays if it is ever needed

function spaceBar() {
  let space = "";
  for (let i = 0; i < 20; i++) {
    space += "#";
  }
  return console.log(space);
}

//option 1 for loop
const point = [];
for (let j = 1; j <= 40; j++) {
  point.push(j);
}
console.log(point);
spaceBar();

//option 2 USING Spread Operator and Array.keys()  Spread Operator = [...]
const trial = [...Array(40).keys()].map(i => i + 1);
console.log(trial);
spaceBar();

//option 3 USING Array.fill() and Array.map()
const example = Array(40).fill().map(function(_, i) {
  return i + 1;
});
console.log(example);
spaceBar();