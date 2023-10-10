const assertArrayEqual = require('./assertArrayEqual');
// function to loop an array and extract the values until the callback returns a condition
const takeUntil = function (array, callback) {
  let result = [];
  for (const arr of array) {
    let condition = callback(arr);
    console.log("preba -->", condition);
    if (!condition) {
      result.push(arr);
    } else {
      return result;
    }
  }
  return result;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);
console.log(results1);

console.log("---");

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const results2 = takeUntil(data2, (x) => x === ",");
console.log(results2);

console.log(assertArrayEqual(results1, [1, 2, 5, 7, 2]));

console.log(assertArrayEqual(results2, ["I've", "been", "to", "Hollywood"]));
