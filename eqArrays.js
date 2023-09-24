const assertEqual = function (actual, expected) {
  let message = "";
  if (actual === expected) {
    message = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    message = `🛑🛑🛑 Assertion Failed:${actual} !== ${expected}`;
  }
  return message;
};
const eqArrays = function (arr1, arr2) {
  //checking if the length is the same
  if (arr1.length !== arr2.length) {
    return false;
  }
  // loop each item to compare if the are the same
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
