const assertArrayEqual = require('./assertArrayEqual')
const flatten = function (array) {
  let resutl = [];
  for (const arr of array) {
    if (Array.isArray(arr) === true) {
      for (const value of arr) {
        resutl.push(value);
      }
    } else {
      resutl.push(arr);
    }
  }
  return resutl;
};
console.log(flatten([1, 2, [3, 4], 5, [6]]));
console.log(
  assertArrayEqual(flatten([1, 2, [3, 4], 5, [6, 7]]), [1, 2, 3, 4, 5, 6, 7])
);
