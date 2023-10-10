// Function to compare two objects for equality
const eqObjects = require('./eqObjects');
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



module.exports = assertObjectEqual;
