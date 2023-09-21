const assertEqual = function (actual, expected) {
  let message = "";
  if (actual === expected) {
    message = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    message = `🛑🛑🛑 Assertion Failed:${actual} !== ${expected}`;
  }
  return message;
};

console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual("Lighthouse Labs", "Lighthouse Labs"));
console.log(assertEqual(1, 1));
console.log(assertEqual(5, 10));

const head = function (array) {
  console.log(array[0]);
  return array[0];
};

console.log(assertEqual(head([5, 6, 7]), 5));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));
console.log(assertEqual(head([5]), 5));
console.log(assertEqual(head([])));
