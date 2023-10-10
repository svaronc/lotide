const assertArrayEqual = require('./assertArrayEqual')
// array of words
const words = ["ground", "control", "to", "major", "tom"];
// Function to map an array using a callback function
const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

//test cases to assert the function map
const results1 = map(words, (word) => word[0]);
console.log(assertArrayEqual(results1, ["g", "c", "t", "m", "t"]));
const results2 = map(words, (word) => word.length);
console.log(assertArrayEqual(results2, [6, 7, 2, 5, 3]));
const results3 = map(words, (word) => (word += "!"));
console.log(assertArrayEqual(results3, ["not good"]));
