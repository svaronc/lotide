const eqArrays = require('./eqArrays');
// Function to compare two objects for equality
const eqObjects = function (object1, object2) {
  let keys1 = Object.keys(object1); // Get the keys of object1
  let keys2 = Object.keys(object2); // Get the keys of object2 (Note: Should be keys2 = Object.keys(object2))

  // Check if the number of keys in both objects is the same
  if (keys1.length !== keys2.length) {
    return false;
  }

  // Iterate through each key in object1
  for (const key of keys1) {
    const value1 = object1[key]; // Get the value associated with the current key in object1
    const value2 = object2[key]; // Get the value associated with the same key in object2

    // Check if the values are arrays and if so, compare them using eqArrays function
    if (Array.isArray(value1) && Array.isArray(value2)) {
      if (!eqArrays(value1, value2)) {
        return false;
      }
    } else if (value1 !== value2) {
      // Check if the values are not arrays and not equal
      return false;
    }
  }

  return true; // If no differences were found, the objects are considered equal
};

module.exports = eqObjects;

