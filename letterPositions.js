// Function that compares two arrays for equality
const eqArrays = function (arr1, arr2) {
  // Checking if the length of the arrays is the same
  if (arr1.length !== arr2.length) {
    return false;
  }
  // Loop through each item in the arrays to compare if they are the same
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true; // If no differences are found, the arrays are considered equal
};

// Function that asserts whether two arrays are equal and returns a message
const assertArrayEqual = function (array1, array2) {
  let message = "";
  if (eqArrays(array1, array2)) {
    message = `✅✅✅ Assertion Passed: ${array1} === ${array2}`;
  } else {
    message = `🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`;
  }
  return message;
};

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
