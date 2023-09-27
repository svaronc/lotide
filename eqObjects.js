// Function to compare two values and generate an assertion message
const assertEqual = function (actual, expected) {
  let message = "";
  if (actual === expected) {
    message = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    message = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
  return message;
};

// Function to compare two objects for equality
const eqObjects = function (object1, object2) {
  let keys1 = Object.keys(object1); // Get the keys of object1
  let keys2 = Object.keys(object1); // Get the keys of object2 (Note: Should be keys2 = Object.keys(object2))

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

// Function to compare two arrays for equality
const eqArrays = function (arr1, arr2) {
  // Check if the length of both arrays is the same
  if (arr1.length !== arr2.length) {
    return false;
  }

  // Loop through each item in the arrays and compare if they are the same
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true; // If no differences were found, the arrays are considered equal
};

// Test cases
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
console.log(assertEqual(eqObjects(shirtObject, anotherShirtObject), true)); // => true

const longSleeveShirtObject = {
  size: "medium",
  color: "red",
  sleeveLength: "long",
};
console.log(assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false)); // => false

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
};
eqObjects(multiColorShirtObject, anotherMultiColorShirtObject); // => true

const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};
eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject); // => false

console.log(
  assertEqual(
    eqObjects(multiColorShirtObject, anotherMultiColorShirtObject),
    true
  )
);
console.log(
  assertEqual(
    eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject),
    false
  )
);
