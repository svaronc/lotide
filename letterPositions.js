// Function that compares two arrays for equality
const eqArrays = require('./eqArrays')

// Function that asserts whether two arrays are equal and returns a message
const assertArrayEqual = require('./assertArrayEqual')
// Function that returns the positions (indices) of non-space characters in a sentence
const letterPositions = function (sentence) {
  const result = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (result[sentence[i]]) {
        result[sentence[i]].push(i);
      } else {
        result[sentence[i]] = [i];
      }
    }
  }
  return result;
};

// Example usage of the letterPositions function
console.log(letterPositions("lighthouse in the house"));

// Example usage of the assertArrayEqual function to compare letter positions
console.log(assertArrayEqual(letterPositions("hello").e, [1]));
