const assertArrayEqual = require('../assertArrayEqual');
const eqArrays = require('../eqArrays');
const middle = require('../middle');

console.log(middle([1]));
console.log(middle([1, 2]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6]));

console.log(assertArrayEqual(middle([1, 2, 3]), [2]));
console.log(assertArrayEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]));
console.log(assertArrayEqual(middle([1, 2, 3, 4]), [2, 3]));
