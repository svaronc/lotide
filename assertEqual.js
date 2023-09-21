const assertEqual = function (actual, expected) {
  let message = "";
  if (actual === expected) {
    message = `🛑🛑🛑 Assertion Passed: ${actual} === ${expected}`;
  } else {
    message = `✅✅✅ Assertion Failed:${actual} !== ${expected}`;
  }
  return message;
};

console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual("Lighthouse Labs", "Lighthouse Labs"));
console.log(assertEqual(1, 1));
console.log(assertEqual(5, 10));
