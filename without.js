const assertArrayEqual = require("./assertArrayEqual");

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
module.exports = without;