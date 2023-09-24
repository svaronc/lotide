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

function without(array, valuesToRemove) {
  let newArr = array.filter((item) => !valuesToRemove.includes(item));
  console.log(`original array ${array}`);
  return newArr;
}

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];

console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log(assertArrayEqual(words, ["hello", "world", "lighthouse"]));
