const assertArrayEqual = function (array1, array2) {
  let message = "";
  if (eqArrays(array1, array2)) {
    message = `✅✅✅ Assertion Passed: ${array1} === ${array2}`;
  } else {
    message = `🛑🛑🛑 Assertion Failed:${array1} !== ${array2}`;
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

console.log(eqArrays([1, 2, 3], [1, 2, 4])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

console.log(assertArrayEqual([1, 2, 3], [1, 2, 3]));
