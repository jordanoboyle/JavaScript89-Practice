// 5. Group an array of hashes by multiple keys.
// Example: [{type: "fruit", color: "red", name: "apple"}, {type: "vegetable", color: "green", name: "carrot"}, {type: "fruit", color: "yellow", name: "banana"}] by type and color becomes {fruit: {red: [{name: "apple"}], yellow: [{name: "banana"}]}, vegetable: {green: [{name: "carrot"}]}}.

const fruitHash = [{type: "fruit", color: "red", name: "apple"}, {type: "vegetable", color: "green", name: "carrot"}, {type: "fruit", color: "yellow", name: "banana"}];

// function groupHashes(arrHashes) {
//   let fruitHashGrouped = {};

//   arrHashes.forEach((item) => {
//     if (fruitHashGrouped[item.type] === undefined) {
//       fruitHashGrouped[item.type] = {item}
//     }
//   })
// }

function groupByMultipleKeys(arr, ...keys) {
  // ...keys This allows us to input multiple function variables, dictating the keys we desire to dig for.
  return arr.reduce((accumulator, obj) => {
    // iterating over the keys to create nested structure
    let currentLevel = accumulator;
    console.log("currentLevel variable", currentLevel);

    keys.forEach((key, index) => {
      const keyVal = obj[key];
      console.log("keyVal variable ", keyVal);

      if (index === keys.length - 1) {
        if (!currentLevel[keyVal]) {
          currentLevel[keyVal] = [];
        }
        //create object with the properties we want
        const reduceObject = Object.keys(obj).reduce((o, k) => {
          if (!keys.includes(k)) {
            o[k] = obj[k];
            return o;
          }
        }, {});

        currentLevel[keyVal].puch(reduceObject);
      }
    })
  });
}

groupByMultipleKeys(fruitHash, "type", "color");