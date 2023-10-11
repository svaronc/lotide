// Function to find a key in an object by its corresponding value
const findKeyByValue = function (object, value) {
  let result; // Initialize a variable to store the found key

  // Loop through each property in the object
  for (const obj in object) {
    // Check if the value of the current property matches the target value
    if (object[obj] === value) {
      result = obj; // If a match is found, assign the key to the result variable
    }
  }

  return result; // Return the key corresponding to the given value (or undefined if not found)
};

module.exports = findKeyByValue;
