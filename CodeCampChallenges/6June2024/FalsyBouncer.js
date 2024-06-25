// Remove all falsy values from an array. Return a new array; do not mutate the original array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// Hint: Try converting each value to a Boolean.

function bouncer(arr) {
  let notFalse = [];
  arr.forEach((value) => {
    if (Boolean(value) !== false) {
      notFalse.push(value);
    }
  })
  return notFalse;
}

bouncer([7, "ate", "", false, 9]);