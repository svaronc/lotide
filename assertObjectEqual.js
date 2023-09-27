const eqArrays = function (arr1, arr2) {
  //checking if the length is the same
  if (arr1.length !== arr2.length) {
    return false;
  }
  // loop each item to compare if the are the same
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
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

const assertObjectEqual = function (actual, expected) {
  const inspect = require("util").inspect;
  let message = "";
  if (eqObjects(actual, expected)) {
    message = `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(
      expected
    )}`;
  } else {
    message = `🛑🛑🛑 Assertion Failed:${inspect(actual)} !== ${inspect(
      expected
    )}`;
  }
  return message;
};

console.log(
  assertObjectEqual(
    { name: "sebastian", lasteName: "varon", hobbys: ["soccer", "Tennis"] },
    { name: "sebastian", lasteName: "varon", hobbys: ["soccer", "Tennis"] }
  )
);
console.log(
  assertObjectEqual(
    { name: "Juan jose", lasteName: "varon" },
    { name: "sebastian", lasteName: "varon" }
  )
);
