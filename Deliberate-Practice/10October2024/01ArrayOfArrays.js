// 4. Convert a hash into an array of arrays.
// For example, {"chair" => 100, "book" => 14, "desk" => 98, "footstool" => 133} becomes [["chair", 100], ["book", 14], ["desk", 98], ["footstool", 133]]..

const obj1 = {"chair":  100, "book":  14, "desk":  98, "footstool":  133};

function convertHashToArrayOfArrays(hashObject) {
  let arraysInArray = [];

  Object.entries(hashObject).forEach((key, values) => {
    arraysInArray.push([key, values]);
  });
  return arraysInArray;
}

console.log(convertHashToArrayOfArrays(obj1));

// Need to remember that Objects do not have direct access to forEach()
// You have to use their API functions to break them down. 