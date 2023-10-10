const eqArrays = require("./eqArrays");
const assertArrayEqual = function (array1, array2) {
  let message = "";
  if (eqArrays(array1, array2)) {
    message = `✅✅✅ Assertion Passed: ${array1} === ${array2}`;
  } else {
    message = `🛑🛑🛑 Assertion Failed:${array1} !== ${array2}`;
  }
  return message;
};
module.exports = assertArrayEqual;
