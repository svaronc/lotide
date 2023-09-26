// Function that compares two values and returns a message indicating if they are equal or not
const assertEqual = function (actual, expected) {
  let message = "";
  if (actual === expected) {
    message = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    message = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
  return message;
};

// Function to count letters in a sentence without counting blanks
const countLetters = function (sentence) {
  let result = {};
  for (const word of sentence) {
    if (word !== " ") {
      // Check if the current character is not a blank space
      if (result[word]) {
        result[word] += 1; // Increment the count if the character is already in the result object
      } else {
        result[word] = 1; // Initialize the count if it's the first occurrence of the character
      }
    }
  }
  return result;
};

// Example usage of the countLetters function
console.log(countLetters("lighthouse in the house"));
