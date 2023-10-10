const eqArrays = require("../eqArrays");
const assertArrayEqual = require("../assertArrayEqual");

console.log(eqArrays([1, 2, 3], [1, 2, 4])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

console.log(assertArrayEqual([1, 2, 3], [1, 2, 3]));
